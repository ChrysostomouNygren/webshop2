import React from "react";
import { useNavigate } from "react-router-dom";

// komponenter
import ExitBtn from "../components/ExitBtn";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Admin() {
  let navigate = useNavigate();

  const users = () => {
    navigate(`/users`);
  };
  const products = () => {
    navigate(`/products`);
  }


  return (
    <div>
      <Header />
      <h3>Jättehemlig adminsida!!!!!!!!</h3>
      <button onClick={users}>Användarregister</button>
      <button onClick={products}>Produktregister</button>
      <ExitBtn />
      <Footer />
    </div>
  );
}

export default Admin;
