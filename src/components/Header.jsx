import React from "react";
import { useNavigate } from "react-router-dom";

// css
import "./css/Header.css";

// png's till knappar:
import shoppingcart from "./resources/shopping-cart-pngrepo-com.png";
import profileSite from "./resources/user-profile-pngrepo-com.png";

// states
import { authState } from "../recoil/auth/atom";
import { userState } from "../recoil/auth/atom";
import { useRecoilState } from "recoil";

function Header() {
  let navigate = useNavigate();
  const [token, setToken] = useRecoilState(authState);
  const [user, setUser] = useRecoilState(userState);

  const home = () => {
    navigate(`/`);
  };
  const cart = () => {
    navigate(`/cart`);
  };

  // ifsats för att avgöra admin eller profile
  const profile = () => {
    if (user === 1216874387060039) {
      navigate(`/admin`);
    } else {
      navigate(`/profile`);
    }
  };
  const login = () => {
    navigate(`/login`);
  };

  return (
    <header>
      <h1>
        <button onClick={home}>webshop</button>
      </h1>
      <div>
        <p>
          {/* knappen skickar en antingen till profil eller login, beroende på om en har en token eller ej! */}
          <button onClick={token ? profile : login}>
            {" "}
            <img src={profileSite} alt="profile" /> kundsida
          </button>
        </p>
        {/* emoji, varukorg */}
        <p>
          <button onClick={cart}>
            {" "}
            <img src={shoppingcart} alt="cart" /> varukorg
          </button>
        </p>
      </div>
    </header>
  );
}

export default Header;
