
class DataStore {

    constructor(db){
        this._db = db;
    }

    storeDocument(document){
        return this._db.validateDocument(document)
            .then((result) => {
                if(!result) return Promise.reject("Invalid document");
                return this._db.save(document);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export default DataStore;