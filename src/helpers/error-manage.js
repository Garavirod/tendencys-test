/**
 * Se encarga formar el mensaje de alerta en caso de errores
 * @param {*} err 
 * @returns String (meesage)
 */
 export const buildErrorMessage  = (err) => {
    if (err.response) {
      // Error al procesar información statuscode 2.x.x
      return err.response.data.message + " - " + err.response.status;
    } else if (err.request) {
        // Error de conexión con el servidor
        return "¡Hubo un error al conectar con el servidor, intente más tarde!";
    } else {
        // Error interno
        return "Hubo un error interno al tratar de realizar la petición";
    }
  }