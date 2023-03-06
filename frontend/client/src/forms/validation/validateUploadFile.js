export default function validateUploadFile(values){
    let errors = {}

    if(!values.file){
        errors.file = "Archivo"
    } 
    return errors;
}   