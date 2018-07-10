import 'babel-polyfill';
import Database from '../src/db';
import DataStore from '../src/dataStore';

const { Container, PARAMS_MODE } =  require('samurai-inject')

var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
var expect = chai.expect;
var assert = chai.assert;
chai.should();

const container = Container() 
container.register('dataStore', DataStore, ['db'], PARAMS_MODE.asIndividualParams);
container.register('db', Database)

describe('document storage', () => {
    
    let db = container.resolve('db');

    let document = {
        size: 123123,
        name: "test.pdf"
    }

    it('should validation be fullfilled', (done) => {
        db.validateDocument(document).should.be.fulfilled.and.notify(done);
    });

    it('should pass validation', (done) => {
        db.validateDocument(document)
            .then( (result) => {
                result.should.equal(true);
                done();
            });
    });

    it('should save be fullfilled', (done) => {
        db.save(document).should.be.fulfilled.and.notify(done);
    });

    it('should save the document', (done) => {
        db.save(document)
            .then((result) => {
                result.should.equal(true);
                done();
            });
    });
});

describe('dataStore module', () => {

    let ds = container.resolve('dataStore');

    let document = {
        size: 123123,
        name: "test.pdf"
    }

    it('should store the document', (done) => {
        ds.storeDocument(document)
            .then((result) => {
                result.should.equal(true);
                done();
            });
    });
});