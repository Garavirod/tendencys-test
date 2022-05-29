
import { buildErrorMessage } from "@/helpers/error-manage";
import HomeService from "../services/HomeService"


export const getListaOrdenesAction = async ({ commit }) => {
  try {
    const data = await HomeService.getListaOrdenes();
    if (data.data.orders) commit('setListaOrdenes', data.data.orders)
  } catch (error) {
    console.log(error.response);
    commit(
      'Shared/setShowErrorOrSuccessAlert',
      {
        message: buildErrorMessage(error.response),
        errorOnPetition: true,
      },
      {
        root: true
      }
    )
  }
}

