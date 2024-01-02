// ViewProduct.jsx
import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../component/ProductDisplay";

function ViewProduct() {
  const { AllItems } = useContext(ShopContext);
  const { productId } = useParams();
  const product = AllItems.find((e) => e.id === Number(productId));

  return (
    <div>
      <ProductDisplay
        product={product}
      />
    </div>
  );
}

export default ViewProduct;
