import { save, validateDocument } from './db';

export const storeDocument = (document) => {
    return validateDocument(document)
        .then((result) => {
            if(!result) return Promise.reject("Invalid document");
            return save(document);
        })
        .catch((error) => {
            console.log(error);
        });
}
