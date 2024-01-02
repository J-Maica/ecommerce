import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { NavLink } from "react-router-dom";

function Cart() {
  const { AllItems, cartItem, addToCart, removeToCart, totalCartAmount } =
    useContext(ShopContext);

  return (
    <div className="container py-5 mt-5">
      {totalCartAmount() === 0 ? <h1 className=" text-secondaryBrown">Empty Cart</h1> : (
         <div>
         <table className="table mt-5 text-secondaryBrown ">
           <thead>
             <tr>
               <th scope="col">Product image</th>
               <th scope="col">Name</th>
               <th scope="col">Price</th>
               <th scope="col">Quantity</th>
               <th scope="col">Total</th>
             </tr>
           </thead>
           <tbody className="bg-secondaryBrown text-primaryBrown">
             {AllItems.map((item, key) => {
               if (cartItem[item.id] > 0) {
                 return (
                   <tr key={key}>
                     <td>
                       <img src={item.image} alt="" className="w-75" style={{maxWidth:"150px", height:"auto"}}/>
                     </td>
                     <td>{item.name}</td>
                     <td>₱{item.price}</td>
                     <td>
                       <div className="d-flex align-items-center">
                         <i
                           className="fa-solid fa-minus cursor-pointer"
                           onClick={() => removeToCart(item.id)}
                         ></i>
                         <span className="mx-2">{cartItem[item.id]}</span>
                         <i
                           className="fa-solid fa-plus cursor-pointer"
                           onClick={() => addToCart(item.id)}
                         ></i>
                       </div>
                     </td>
                     <td>₱{item.price * cartItem[item.id]}</td>
                   </tr>
                 );
               }
               return null;
             })}
           </tbody>
           <tfoot>
             <tr>
               <td colSpan="3"></td>
               <td className="fw-bold fs-4">Total:</td>
               <td className="fw-bold fs-4">₱{totalCartAmount()}</td>
             </tr>
           </tfoot>
         </table>
   
         {/* action btns*/}
         <div className="d-grid d-md-flex gap-2 mt-5">
           <NavLink to={"/shop"} className={"btn btn-secondaryBrown"}>
             Continue Shopping
           </NavLink>
           <button className="btn btn-secondaryBrown">Proceed To Checkout</button>
         </div>
         </div>
      )}

     
    </div>
  );
}

export default Cart;
