import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './NavigationComponent.css';

const NavigationComponent = () => { 
  return ( 
    <div className="nav-wrapper">
      <Link to='/' className="nav-link">Home</Link>  
      <Link to='/compras' className="nav-link">Compras</Link>
    </div>
  )
};

NavigationComponent.propTypes = {};

NavigationComponent.defaultProps = {};

export default NavigationComponent;
