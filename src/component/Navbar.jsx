import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

function Navbar() {
  const { getItemCount } = useContext(ShopContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light p-3 bg-secondaryBrown shadow fixed-top">
      <div className="container">
        <NavLink to="/" className="navbar-brand text-primaryBrown fs-4 fw-bolder">
          Coffee
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
             <li className="nav-item">
                <NavLink to="/" className="nav-link text-primaryBrown fw-bold mx-2">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/shop" className="nav-link text-primaryBrown fw-bold mx-2">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link text-primaryBrown fw-bold mx-2">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link text-primaryBrown fw-bold mx-2">
                  Contact
                </NavLink>
              </li>
          </ul>

          <ul className="navbar-nav ms-auto  d-lg-inline-flex">
              <NavLink to="/cart" className="nav-link text-primaryBrown fw-bold position-relative">
                <i className="fa-solid fa-cart-shopping"></i>{" "}
                <p className="position-absolute top-20 start-100 translate-middle badge rounded-pill bg-primaryBrown">{getItemCount()}</p>
              </NavLink>

              <li className="nav-item dropdown d-none d-md-inline-block">
                <a
                  className="nav-link text-primaryBrown fw-bold dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profile
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <NavLink to="/profile" className="nav-link text-primaryBrown fw-bold">
                      Profile
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/favorites" className="nav-link text-primaryBrown fw-bold">
                      Favorites
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="nav-item">
                    <NavLink to="/logout" className="nav-link text-primaryBrown fw-bold">
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item d-sm-inline-block d-md-none">
                <NavLink to="/profile" className="nav-link text-primaryBrown fw-bold">
                  Profile
                </NavLink>
              </li>
              <li className="nav-item d-sm-inline-block d-md-none">
                <NavLink to="/favorites" className="nav-link text-primaryBrown fw-bold">
                  Favorites
                </NavLink>
              </li>
              <li className="nav-item d-sm-inline-block d-md-none">
                <NavLink to="/logout" className="nav-link text-primaryBrown fw-bold">
                  Logout
                </NavLink>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
