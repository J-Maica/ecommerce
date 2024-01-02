// Inside Favorites
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

function Favorites() {
  const { AllItems, toggleFavorite, favorites, addToCart } = useContext(ShopContext);

  const favoriteItems = AllItems.filter((item) => favorites.includes(item.id));

  return (
    <div className="container pt-5 py-5">
<h1 className="text-secondaryBrown text-center mt-5">Favorites</h1>
      <div className="row g-3">
          {favoriteItems.map((item, key) => {
            return (
              <div className="col-12 col-md-6 col-lg-4 d-grid text-center align-items-center position-relative" key={key}>
                <img src={item.image} alt="" srcSet="" width={"100%"} />

                <i
                className={`${
                  favorites.includes(item.id)
                    ? "fa-solid text-danger"
                    : "fa-regular text-light"
                } fa-heart position-absolute top-0 end-0 m-3 z-index-1 `}
                onClick={() => toggleFavorite(item.id)}
              ></i>

                <div className="p-3">
                  <div className="d-flex justify-content-between">
                    <h3>{item.name}</h3>
                    <p>₱{item.price}</p>
                  </div>
                  <p>{item.description}</p>
                  <div className="d-flex">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <button className="btn btn-dark" onClick={() => addToCart(item.id)}>Add to cart</button>
              </div>
            );
          })}
      </div>
      </div>
      
  );
}

export default Favorites;
