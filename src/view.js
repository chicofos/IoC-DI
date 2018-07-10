
export function render(dataStore){

    let document = {
        size: 123023,
        name : "file.pdf"
    }

    dataStore.storeDocument(document)
        .then((data) => {
            if(data)
                console.log('Document saved');
        })
        .catch((error) => {
            console.log(error);
        });
}