import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h1>Simple Shop</h1>
      </Link>
      <ul className="menu">
        <li>
          <Link className="menu-link" to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/products">
            Productos
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/products/medias">
            Medias
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/products/pantalones">
            Pantalones
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/products/remeras">
            Remeras
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/products/buzos">
            Buzos
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/nosotros">
            Nosotros
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/contacto">
            Contacto
          </Link>
        </li>
        {/* <li>
          <CartWidget />
        </li> */}
      </ul>
    </nav>
  );
};
