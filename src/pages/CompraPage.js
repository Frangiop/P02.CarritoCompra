import { Link } from "react-router-dom";
import MultiComprasComponent from "../components/MultiComprasComponent/MultiComprasComponent";
import './CompraPage.css';

export default function CompraPage(){
    return (
        <div>
            <h1 className="titulo">Carrito de tus cumpras</h1>
            <Link to="/formulario-compra" className="boton">Ir al formulario de compra</Link>
            <p> Puede eliminar cualquier item que ya no necesites </p>
            <MultiComprasComponent></MultiComprasComponent>
        </div>
    )
}
