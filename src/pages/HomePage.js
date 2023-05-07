import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div>
      <h1>Bienvenido a tus compras de cuadros</h1>
      <p>
        Por favor ve al link de "compras" en el margen derecho en la parte
        superior o bien puedes pinchar en el botón compras que esta abajo:
      </p>
      <Link to="/compras" className="boton-compras">
        Compras
      </Link>
    </div>
  );
}
