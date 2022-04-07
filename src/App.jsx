import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import { userState, userDataState, roleState } from "./recoil/auth/atom";
import { useRecoilState } from "recoil";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import UserRegistry from "./pages/UserRegistry";
import ProductRegistry from "./pages/ProductRegistry";

function App() {
  const [user, setUser] = useRecoilState(userState);
  const [userData, setUserData] = useRecoilState(userDataState);
  const [role, setRole] = useRecoilState(roleState);

  async function getUser() {
    const response = await axios.get(
      `https://k4backend.osuka.dev/users/${user}`
    );
    setUserData(response.data);
    setRole(response.data.role)
  }
  useEffect(() => {
    getUser();
  }, []);

  console.log(userData)
  console.log(userData.role)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={user ? <Profile /> : <Login />} />
        <Route path="/admin" element={userData.role === "admin" ? <Admin /> : <Login />} />
        <Route path="/users" element={<UserRegistry />} />
        <Route path="/products" element={<ProductRegistry />} />
      </Routes>
    </div>
  );
}

export default App;
