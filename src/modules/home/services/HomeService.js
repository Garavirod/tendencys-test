import { createAPIConnection } from "@/services/http-common";
import { Service } from "@/services/serivce";


class HomeService extends Service{
    constructor(){
        super()
        this.token="eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ"         
    }

    /**
     * Obtiene la lista de órdenes 
     * @param {*}  
     * @returns {Promise}
     */
    getListaOrdenes(){
        createAPIConnection.defaults.headers.common['Authorization'] = this.token;
        return createAPIConnection.get(`/orders`)        
    }

    /**
     * Simula una conexión con la API para realizar el pago de una orden
     * @param {*} datosOrden 
     * @returns {Promise}
     */
    realizarOrdenPago(datosOrden){
        console.log("Realizando pago...", datosOrden);
        /* Simulando peticon asíncrona de pago */
        return new Promise((resolve) => setTimeout(resolve, 3000));
    }

    
}

export default new HomeService()