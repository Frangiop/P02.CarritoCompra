
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
    

    const initialState = {
        compras: [],
        loadingCompras: false,
        nuevaCompra: {
            id:null, // O el valor inicial para el ID
          nombre: '',
          precio: '',
          urlImagen: ''
        },
        addingCompra: false,
        error: {
          message: ''
        }
      };
     
    export default function ComprasReducer(state = initialState,action) {
        switch(action.type){
             case GET_COMPRAS:

                state = {...state, loadingCompras:true}
                 break 

             case GET_COMPRAS_OK:
                state={...state,loadingCompras:false , compras:action.payload}
                 break
                 
             case GET_COMPRAS_FAIL:
                  state={...state,loadingCompras:false, compras:[], error :{message:action.payload} }
                  break  
// agregamos compra 

 // nuevo codigo par argegar tecnologia 

 case ADD_COMPRA:
    state = { ...state, addingCompras: true };
    break;
case ADD_COMPRA_OK:
    
    state = { ...state, addingCompras: false, compras: [...state.compras, action.payload] };
    break;
case ADD_COMPRA_FAIL:
    state = { ...state, addingCompras: false, error: { message: action.payload } };
    break;




// boton eliminar 


case ELIMINAR_COMPRA:
    state = { ...state, deletingCompra: true }; // Activar el estado de eliminación
    break;
case ELIMINAR_COMPRA_OK:
    // Filtrar la cronología eliminada del estado
    const compraId = action.payload;
    const comprasActualizadas = state.compras.filter(compra => compra.id !== compraId);
    state = { ...state, deletingCompra: false, compras: comprasActualizadas };
    break;
case ELIMINAR_COMPRA_FAIL:
    state = { ...state, deletingCompra: false, error: { message: action.payload } };
    break;






             default: 
                  break

        }
   return state  
    }
