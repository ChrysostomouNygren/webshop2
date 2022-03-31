import React from "react";

// komponenter
import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";

function ProductRegistry() {
  return (
    <div>
      <Header />
      <h2>Produktregister:</h2>
      <Products />
      <Footer />
    </div>
  );
}

export default ProductRegistry;
