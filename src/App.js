
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationComponent from './components/NavigationComponent/NavigationComponent';
import HomePage from './pages/HomePage';
import CompraPage from './pages/CompraPage';
import FormularioPage from './pages/FormularioPage';

function App() {
  return (
    <div className="App">
   <NavigationComponent></NavigationComponent>
   <Routes>
  <Route exact path="/" element={<HomePage/>}></Route> 
  <Route exact path="/compras" element={<CompraPage/>} ></Route>
  <Route exact path="/formulario-compra" element={<FormularioPage/>} ></Route> 

 
    </Routes>


    </div>
  );
}

export default App;
