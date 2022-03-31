import "./App.css";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import UserRegistry from "./pages/UserRegistry";
import ProductRegistry from "./pages/ProductRegistry";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/users" element={<UserRegistry />} />
        <Route path="/products" element={<ProductRegistry />} />
      </Routes>
    </div>
  );
}

export default App;
