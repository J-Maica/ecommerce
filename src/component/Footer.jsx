import React from "react";

function Footer() {
  return (
    <footer className="mt-5 text-secondaryBrown">
      <div className="container px-4">
        <div className="row">
          <div className="col d-flex py-4 row">
            <h5 className="col-md-6">
              <a className="navbar-brand text-secondaryBrown fs-4 fw-bolder" href="#">
                <i className="bi-house-fill"></i> Coffee Shop
              </a>
            </h5>
            <div className="col-md-6 text-end d-flex justify-content-end gap-3">
              <i className="fa-brands fa-facebook fs-4"></i>
              <i className="fa-brands fa-twitter fs-4"></i>
              <i className="fa-brands fa-instagram fs-4"></i>
              <i className="fa-brands fa-youtube fs-4"></i>
            </div>
          </div>
          <hr className="text-secondaryBrown" />

          <div
            className="col-md-12 row row-gap-3 text-start text-md-center p-5"
          >
            <div className="col-md-3">
              <h6>
                <strong>Company Info</strong>
              </h6>
              <ul className=" fw-normal p-0">
                <li className="list-unstyled py-2">
                  <a href="#" className="text-decoration-none text-secondaryBrown">
                    About Us
                  </a>
                </li>
                <li className="list-unstyled py-2">
                  <a href="#" className="text-decoration-none text-secondaryBrown">
                    Contact Us
                  </a>
                </li>
                <li className="list-unstyled py-2">
                  <a href="#" className="text-decoration-none text-secondaryBrown">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h6>
                <strong>Legal</strong>
              </h6>
              <ul className=" fw-normal p-0">
                <li className="list-unstyled py-2">
                  <a href="#" className="text-decoration-none text-secondaryBrown">
                    Privacy Policy
                  </a>
                </li>
                <li className="list-unstyled py-2">
                  <a href="#" className="text-decoration-none text-secondaryBrown">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h6>
                <strong>Explore</strong>
              </h6>
              <ul className=" fw-normal p-0">
                <li className="list-unstyled py-2">
                  <a href="#" className="text-decoration-none text-secondaryBrown">
                    Menu
                  </a>
                </li>
                <li className="list-unstyled py-2">
                  <a href="#" className="text-decoration-none text-secondaryBrown">
                    Specials
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h6>
                <strong>Connect</strong>
              </h6>
              <ul className=" fw-normal p-0">
                <li className="list-unstyled py-2">
                  <a href="#" className="text-decoration-none text-secondaryBrown">
                    Newsletter
                  </a>
                </li>
                <li className="list-unstyled py-2">
                  <a href="#" className="text-decoration-none text-secondaryBrown">
                    Loyalty Program
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid text-center text-secondaryBrown">
        <p className="py-3">&copy; 2023 Coffee Shop. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
