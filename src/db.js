class Database {
    
    save(document){
        return new Promise((resolve, reject) => {
            //do some stuff
            resolve(true);
        })
    }
    
    validateDocument(document){
        return new Promise((resolve, reject) => {
            //do some stuff
            document ? resolve(true) : resolve(false);
            
        })
    }
}

export default Database;