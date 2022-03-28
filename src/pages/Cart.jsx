import React from "react";

// olika recoils
import { cartState } from "../recoil/cart/atom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { cartStatus, removeItemSelector } from "../recoil/cart/selectors";

// komponenter
import Header from "../components/Header";
import Footer from "../components/Footer";

// Styling tack!
import "../components/css/Cart.css";

function Cart() {
  const [cart, setCart] = useRecoilState(cartState);
  const { totalItems, totalPrice } = useRecoilValue(cartStatus);
  const removeItem = useSetRecoilState(removeItemSelector);

  return (
    <div>
      <Header />
      <h3>Din varukorg</h3>
      {cart.map((product, index) => (
        <p className="cart">
          <img className="cart-img" src={product.image} alt={product.title} />
          <div className="product-info">
            {product.title} €{product.price}{" "}
            <button className="cart-button" onClick={() => removeItem(index)}>Ta bort</button>
          </div>
        </p>
      ))}
      <p>Antal varor: {totalItems}st</p>
      <p>Summa: €{totalPrice}</p>
      <button className="cart-button" disabled>Gå till betalning</button>
      <Footer />
    </div>
  );
}

export default Cart;
