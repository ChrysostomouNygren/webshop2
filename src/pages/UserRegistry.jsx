import React from "react";

// komponenter
import Footer from "../components/Footer";
import Header from "../components/Header";
import Users from "../components/Users";

function UserRegistry() {
    
  return (
    <div>
      <Header />
      <h2>Användarregister:</h2>
      <Users />
      <Footer />
    </div>
  );
}

export default UserRegistry;
