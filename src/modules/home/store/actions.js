
import { buildErrorMessage } from "@/helpers/error-manage";
import HomeService from "../services/HomeService"


/**
 * Conecta con el servicio HomeService para obtener todas las órdenes
 * @param {*} param0 
 */
export const getListaOrdenesAction = async ({ commit }) => {
  try {
    const data = await HomeService.getListaOrdenes();
    if (data.data.orders) commit('setListaOrdenes', data.data.orders)
  } catch (error) {
    // Informa al usuasrio que hubo un error al realizar cierto proceso.
    commit(
      'Shared/setShowErrorOrSuccessAlert',
      {
        message: buildErrorMessage(error.response),
        errorOnPetition: true,
      },
      {root: true}
    )
  }
}

/**
 * Conecta con el servicio HomeService para ejecutar el proceso de
 * pago.
 * @param {*} param0 
 * @param {*} datosPago 
 */
export const realizarPagoAction = async ({ commit }, datosPago) => {
  try {
    // Muestra el componente overlay del sistema     
    commit(
      'Shared/setOverlayState',
      { text: "Realizando pago, espere...", visible: true },
      { root: true }
    )
    // Proceso de pago
    await HomeService.realizarOrdenPago(datosPago);
    // Cerrar overlay del sistema al terminar petición
    commit(
      'Shared/setOverlayState',
      { text: ".", visible: false },
      { root: true }
    )
    // Muestra alerta de proceso exitoso
    commit(
      'Shared/setShowErrorOrSuccessAlert',
      { message: "Pago realizado exitosamente", success: true },
      { root: true }
    )
  } catch (error) {
    // Informa al usuasrio que hubo un error al realizar cierto proceso.
    commit(
      'Shared/setShowErrorOrSuccessAlert',
      {
        message: buildErrorMessage(error.response),
        errorOnPetition: true,
      },
      {root: true}
    )
  }
}

