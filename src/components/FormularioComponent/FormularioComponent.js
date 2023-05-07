import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { agregarCompras } from '../../store/compras/actions';
import './FormularioComponent.css';

const FormularioComponent = () => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [urlImagen, setUrlImagen] = useState('');
  const dispatch = useDispatch();

  const handleAgregarCompra = (e) => {
    e.preventDefault();

    if (!nombre || !precio || !urlImagen) {
      alert('Por favor completa todos los campos');
      return;
    }

    dispatch(agregarCompras({ nombre, precio, urlImagen }));

    setNombre('');
    setPrecio('');
    setUrlImagen('');
  };

  return (
    <form onSubmit={handleAgregarCompra} className="formulario-container">
      <label>
        Nombre
        <input
          type="text"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre((e.target.value))}
          className="input-nombre"
        />
      </label>
      <label>
        Precio
        <input
          type="number"
          name="precio"
          value={precio}
          onChange={(e) => setPrecio((e.target.value))}
          className="input-precio"
        />
      </label>

      <label>
        Imagen
        <input
          type="text"
          name="urlImagen"
          value={urlImagen}
          onChange={(e) => setUrlImagen(e.target.value)}
          className="input-imagen"
        />
      </label>

      <input type="submit" value="Agregar" className="agregar-button" />
    </form>
  );
};

FormularioComponent.propTypes = {};

FormularioComponent.defaultProps = {};

export default FormularioComponent;
