import axios from 'axios'

import {
    GET_COMPRAS,
    GET_COMPRAS_OK,
    GET_COMPRAS_FAIL,

    ADD_COMPRA,
    ADD_COMPRA_OK,
    ADD_COMPRA_FAIL,

    ELIMINAR_COMPRA, // Agrega el ActionType de eliminación
    ELIMINAR_COMPRA_OK, // Agrega el ActionType de eliminación exitosa
    ELIMINAR_COMPRA_FAIL // Agrega el ActionType de eliminación con error


 
} from './actionTypes'


export function actionGetCompras(){
    return {
        type : GET_COMPRAS
    }
}


export function actionGetComprasOk(compras){
    return {
        type:GET_COMPRAS_OK,
        payload:compras
    }
}


export function actionGetComprasFail(error){
    return {
        type:GET_COMPRAS_FAIL,
        payload:error,
     }
}


export function getCompras(){
    return async (dispatch) =>{
        dispatch(actionGetCompras())
        try {
            const response = await axios.get("http://localhost:3000/caras")
             dispatch(actionGetComprasOk(response.data))
        } catch(error){
            dispatch(actionGetComprasFail(error))
        }
    }
}


// Acción para agregar una nueva cronología
export function actionAgregarCompras() {
    return {
      type: ADD_COMPRA
    };
  }
  
  export function actionAgregarComprasOk(compras) {
    return {
      type: ADD_COMPRA_OK,
      payload: compras
    };
  }
  
  export function actionAgregarComprasFail(error) {
    return {
      type: ADD_COMPRA_FAIL,
      payload: error
    };
  }
  
  export function agregarCompras(compra) {
    return async (dispatch) => {
      dispatch(actionAgregarCompras()); // Dispatch de la acción para indicar que se está realizando la operación
  
      try {
        // Llamada a API utilizando axios.post para agregar la cronología
        const response = await axios.post('http://localhost:3000/caras', compra);
        
        // Si la operación es exitosa, dispatch de la acción con los datos de la nueva cronología
        dispatch(actionAgregarComprasOk(response.data));
      } catch (error) {
        // Si ocurre un error, dispatch de la acción de error con el mensaje de error
        dispatch(actionAgregarComprasFail(error));
      }
    };
  }


    // Acción para eliminar una cronología
export function actionEliminarCompra() {
    return {
        type: ELIMINAR_COMPRA
  }
   }
  
  export function actionEliminarCompraOk(compraId) {
    return {
        type: ELIMINAR_COMPRA_OK,
        payload: compraId
    };
  }
  
  export function actionEliminarCompraFail(error) {
    return {
        type: ELIMINAR_COMPRA_FAIL,
        payload: error
    };
  }
  
  export function eliminarCompra(compraId) {
    return async (dispatch) => {
        dispatch(actionEliminarCompra()); // Dispatch de la acción para indicar que se está realizando la operación
  
        try {
            // Llamada a API utilizando axios.delete para eliminar la cronología
            await axios.delete(`http://localhost:3000/caras/${compraId}`);
  
            // Si la operación es exitosa, dispatch de la acción con el ID de la cronología eliminada
            dispatch(actionEliminarCompraOk(compraId));
        } catch (error) {
            // Si ocurre un error, dispatch de la acción de error con el mensaje de error
            dispatch(actionEliminarCompraFail(error));
        }
    };
  }