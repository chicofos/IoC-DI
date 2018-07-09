import { storeDocument } from './dataStore';

export function render(){

    let document = {
        size: 123023,
        name : "file.pdf"
    }

    storeDocument(document)
        .then((data) => {
            if(data)
                console.log('Document saved');
        })
        .catch((error) => {
            console.log(error);
        });
}