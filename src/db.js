
function save(document){
   return new Promise((resolve, reject) => {
        //do some stuff
        resolve(true);
    })
}

function validateDocument(document){
    return new Promise((resolve, reject) => {
        //do some stuff
        document ? resolve(true) : resolve(false);
        
    })
}

export{ save, validateDocument };