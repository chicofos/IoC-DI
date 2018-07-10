class Database {
    
    save(document){
        return new Promise((resolve, reject) => {
            //Mock
            resolve(true);
        });
    }
    
    validateDocument(document){
        return new Promise((resolve, reject) => {
            //Mock
            document ? resolve(true) : resolve(false);
        });
    }
}

export default Database;