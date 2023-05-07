import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { eliminarCompra, getCompras } from '../../store/compras/actions';

import './MultiComprasComponent.css';

const MultiComprasComponent = () => { 

  const dispatch = useDispatch()
  const {compras,loadingCompras} = useSelector((state) =>state.ComprasReducer)

// nuevo par aagregar compras 
  const [nuevaCompra, setNuevaCompra] =useState(null); // Nuevo estado para la nueva cronología


  useEffect(()=> {
    // llamar a la accion para que obtenga los posts  
    dispatch(getCompras())
  },[])

// eliminar item 
  const eliminarCompraHandler = (compraId) => {
    // Llama a la acción de eliminación de cronología utilizando dispatch
    dispatch(eliminarCompra(compraId));
  }



  return ( 
    <div className="compras-container">
      {compras.map(compra => {
        return (
          <div className="compra-item" key={compra.id} >
            <div className="compra-img-container">
              <img className="compra-img" src={compra.imagen} alt={compra.imagen} />
            </div>
            <div className="compra-info">
              <div className="compra-nombre">{compra.nombre}</div>
              <div className="compra-precio">{compra.precio}</div>
              {/* <div className="compra-descripcion">{compra.descripcion}</div> */}
  
            </div>
            <button className="compra-eliminar-btn"  onClick={() => eliminarCompraHandler(compra.id)}>Eliminar</button>
          </div>
        )
      })}

    {/* Nuevo elemento para representar la nueva cronología */}
    {nuevaCompra && (
  <div key={nuevaCompra.id}>
    <div>
      {nuevaCompra.año &&  nuevaCompra.nombre}
    </div>
    <div>
      - {nuevaCompra.precio}
    </div>
    <div>
    - <img src={nuevaCompra.urlImagen} alt=""></img> {/* Corregido: Agregué la etiqueta img para mostrar la imagen */}
    </div>
  </div>
)}



    </div>
  )
};

MultiComprasComponent.propTypes = {};

MultiComprasComponent.defaultProps = {};

export default MultiComprasComponent;
