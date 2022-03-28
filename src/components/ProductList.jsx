import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";

// css
import "./css/ProductList.css";

// png ist för knapp
import add from "./resources/add-tool-pngrepo-com.png";

// states
import { cartState } from "../recoil/cart/atom";

function ProductList() {
  // Jag hämtar produkterna i en array, då de alla hänger i en array redan.
  const [products, setProducts] = useState([]);
  // Cart kommer ifrån atomen där den "sparar" vårt innehåll.
  const [cart, setCart] = useRecoilState(cartState);

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

  // useEffect för att bara kalla på backendens produkter en gång, så att jag inte råkar krascha servern :)
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="productList">
      {products.map((product) => {
        return (
          <span className="product" key={product.id}>
            <img src={product.image} alt={product.title} value={product.id} />
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
            </div>
          </span>
        );
      })}
    </div>
  );
}

export default ProductList;
