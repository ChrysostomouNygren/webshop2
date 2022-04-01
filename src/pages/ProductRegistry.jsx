import React from "react";
import BackBtn from "../components/BackBtn";


// komponenter
import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";

function ProductRegistry() {

  return (
    <div>
      <Header />
      <BackBtn />
      <h2>Produktregister:</h2>
      <Products />
      <Footer />
    </div>
  );
}

export default ProductRegistry;
