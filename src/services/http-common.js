/**
 * Este archivo contiene la creación y configuración
 * de instancias axios para el consumo de API's 
 * @author Rodrigo García Ávila
 */

import axios from "axios";

 /**
  * Crea una conexión con la API
  */
 export const createAPIConnection = axios.create({
     baseURL: process.env.VUE_APP_API,
     headers: {      
       Accept: "applicacion/json",
       "Content-type": "application/json",      
     }
 });
 
 
 
 
 
