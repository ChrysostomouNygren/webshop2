import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// komponenter
import ExitBtn from "../components/ExitBtn";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Users from "../components/Users";

function Admin() {
  let navigate = useNavigate();

  const users = () => {
    let path = `/users`;
    navigate(path);
  };

  async function getProducts() {
    const response = await axios.get(`https://k4backend.osuka.dev/products`);
    console.log(response.data);
  }

  useEffect(() => {
    // produktlistan
    getProducts();
  }, []);

  return (
    <div>
      <Header />
      <button onClick={users}>Användarregister</button>
      <ExitBtn />
      <Footer />
    </div>
  );
}

export default Admin;
