import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

function Navbar() {
  const { getItemCount } = useContext(ShopContext);

  return (
    <nav className="bg-secondaryBrown navbar navbar-expand-lg navbar-light py-3 py-lg-4">
      <div className="container d-lg-flex justify-content-between">
        <NavLink to="/" className="navbar-brand text-primaryBrown fw-bolder bg-danger">
          SHOPNAME
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse bg-warning" id="navbarNav">
          <div className="d-grid d-lg-flex justify-content-lg-end bg-danger">
            <ul className="navbar-nav d-flex gap-lg-4">
              <li className="nav-item">
                <NavLink to="/" className="nav-link text-primaryBrown fw-bold">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/shop" className="nav-link text-primaryBrown fw-bold">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link text-primaryBrown fw-bold">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link text-primaryBrown fw-bold">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item"></li>
            </ul>

            <ul className="navbar-nav d-flex gap-2 align-items-lg-center d-flex gap-lg-4">
              <NavLink to="/cart" className="nav-link text-primaryBrown fw-bold position-relative">
                <i className="fa-solid fa-cart-shopping"></i>{" "}
                <p className="position-absolute top-20 start-100 translate-middle badge rounded-pill bg-danger">{getItemCount()}</p>
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
      </div>
    </nav>
  );
}

export default Navbar;
