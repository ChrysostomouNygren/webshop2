import React from "react";
import BackBtn from "../components/BackBtn";

// komponenter
import Footer from "../components/Footer";
import Header from "../components/Header";
import Users from "../components/Users";

function UserRegistry() {
    
  return (
    <div>
      <Header />
      <BackBtn />
      <h2>Användarregister:</h2>
      <Users />
      <Footer />
    </div>
  );
}

export default UserRegistry;
