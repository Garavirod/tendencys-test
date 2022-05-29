
/**
 * Verifica si los valores de un objetos son todos
 * vacios.
 * @param {*} object 
 * @returns boolan
 */
export const isEmptyObjectValues = (object) => {
  for(const property in object){
    if(object[property] === "") return true;
  }
  return false;
}