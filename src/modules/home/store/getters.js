/**
 * Retrona una funciona que retorna la lista de ordenes
 * del stroe.
 * @param {*} state 
 * @returns {Function}
 */
export const getListaOrdenesState = ( state ) => () => {
    return state.listaOrdenes
}