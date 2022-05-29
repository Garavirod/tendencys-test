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

    
}

export default new HomeService()