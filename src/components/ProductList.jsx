import React, { useEffect, useState } from "react";
import axios from "axios";

// css
import "./css/ProductList.css";

// png/svgs ist för knappar
import add from "./resources/add-tool-pngrepo-com.png";
import addHeart from "./resources/heart-pngrepo-com.png";

// states
import { useRecoilState } from "recoil";
import { cartState } from "../recoil/cart/atom";
import { idState } from "../recoil/id/atom";
import { heartState } from "../recoil/heart/atom";

// components
import Popup from "./Popup";

function ProductList() {
  // Jag hämtar produkterna i en array, då de alla hänger i en array redan.
  const [products, setProducts] = useState([]);
  // Cart kommer ifrån atomen där den "sparar" vårt innehåll.
  const [cart, setCart] = useRecoilState(cartState);
  // Popup är kopplat till id-atomen, så att rätt information skickas med till bilden som klickas på.
  const [currentPopup, setCurrentPopup] = useRecoilState(idState);
  // modalen (popupen) är default false, vid klick blir den true och poppas upp
  const [modalShow, setModalShow] = useState(false);
  const [heart, setHeart] = useRecoilState(heartState);

  // Använder mig av axios för att hämta produkterna från backenden.
  function getProducts() {
    axios
      .get("https://k4backend.osuka.dev/products")
      .then((res) => {
        // Använde mig av console.log för att se ifall jag fått mitt önskade resultat.
        // console.log(res)
        setProducts(res.data);
        // inuti Products finns nu följade:
        // id
        // title
        // price (skrivet i $ eller €?)
        // description
        // category
        // image (en url)
        // rating (som är ett object)
      })
      .catch((error) => console.log(error));
  }

  function handleAdd(product) {
    const newCart = [...cart, product];
    setCart(newCart);
  }

  function handleHeart(product) {
    const newHeart = [...heart, product];
    setHeart(newHeart);
  }

  // useEffect för att bara kalla på backendens produkter en gång, så att jag inte råkar krascha servern :)
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="productList">
      <Popup show={modalShow} onHide={() => setModalShow(false)} />
      {products.map((product) => (
        <span className="product" key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            value={product.id}
            onClick={() => [setCurrentPopup(product), setModalShow(true)]}
          />
          <div>
            <span>
              <h4>{product.title}</h4>
              <h4>€{product.price}</h4>
            </span>
            <img
              className="button"
              key={product.id}
              src={add}
              alt="add"
              onClick={() => handleAdd(product)}
            />
            <img src={addHeart} alt="heart-symbol" key={product.id} onClick={() => handleHeart(product)} />
          </div>
        </span>
      ))}
    </div>
  );
}

export default ProductList;
