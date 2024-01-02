import { useContext } from "react";
import { AllItems } from "../assets/datas/AllItems.jsx";
import { ShopContext } from "../context/ShopContext.jsx";
import { Link } from "react-router-dom";
import ViewProduct from "../pages/ViewProduct.jsx";

function NewCoffee() {
  const { addToCart, toggleFavorite, favorites, viewProduct, selectedProduct } =
    useContext(ShopContext);

  return (
    <div className="container pt-5 py-5">
      <h1 className="text-secondaryBrown text-center">Popular Coffee</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5">
        {AllItems.map((item, key) => (
          <div key={key} className="col">
            <div className="card border-secondaryBrown bg-transparent h-100 text-secondaryBrown py-4">
              
              <i
                className={`${
                  favorites.includes(item.id)
                    ? "fa-solid text-danger"
                    : "fa-regular text-secondaryBrown"
                } fa-heart position-absolute top-0 end-0 m-3 z-index-2 fs-4 btn`}
                onClick={() => toggleFavorite(item.id)}
                style={{ cursor: "pointer" }}
              ></i>

              <div className="card-img-top rounded position-relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-50 mx-auto d-block"
                  onClick={() => viewProduct(item.id)}
                />
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between fs-5">
                  <h5 className="card-title">
                    <b>{item.name}</b>
                  </h5>
                  <p>
                    <b>₱{item.price}</b>
                  </p>
                </div>
                <p className="card-text">{item.description}</p>
              </div>
              <div className="card-footer d-flex justify-content-center align-items-center">
                <button
                  className="btn btn-secondaryBrown "
                  onClick={() => addToCart(item.id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewCoffee;
