import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
function ProductDisplay(props) {
    const {toggleFavorite, addToCart, favorites } = useContext(ShopContext);
  return (
    <div className="container">
      <div>
        <i
          className={`${
            favorites.includes(props.id)
              ? "fa-solid text-danger"
              : "fa-regular text-light"
          } fa-heart position-absolute top-0 end-0 m-3 z-index-1 `}
          onClick={() => toggleFavorite(props.id)}
        ></i>
        <img src={props.image} alt="" srcSet="" width={"100%"} />

        <div className="p-3">
          <div className="d-flex justify-content-between">
            <h3>{props.name}</h3>
            <p>₱{props.price}</p>
          </div>
          <p>{props.description}</p>
          <div className="d-flex">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
        <button className="btn btn-dark" onClick={() => addToCart(props.id)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductDisplay;
