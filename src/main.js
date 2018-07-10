import { render } from './view';
const { Container, PARAMS_MODE } =  require('samurai-inject')
import Database from './db';
import DataStore from './dataStore';

console.log('IoC and DI Example');

const container = Container() 
container.register('dataStore', DataStore, ['db'], PARAMS_MODE.asConfigObject);
container.register('db', Database)

const dataStore = container.resolve('dataStore');
render(dataStore);