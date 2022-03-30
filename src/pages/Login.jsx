import React, { useState } from "react";
import axios from "axios";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";

// states
import { useRecoilState } from "recoil";
import { authState, userState, nameState } from "../recoil/auth/atom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useRecoilState(authState);
  const [user, setUser] = useRecoilState(userState)
  const [name, setName] = useRecoilState(nameState);
  const navigate = useNavigate();

  async function getToken() {
    const response = await axios.post(
      "https://k4backend.osuka.dev/auth/login",
      {
        username: username,
        password: password,
      }
    );
    setToken(response.data.token);
    setUser(response.data.userId)
    console.log(response.data)

    if (response.data.userId == 1216874387060039) {
      navigate("/admin");
    } 
    else if (response.data.token) {
      navigate("/profile");
    }
  }

  function clearForm() {
    setUsername("");
    setPassword("");
  }

  return (
    <div>
      <Header />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Användarnamn"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          placeholder="Lösenord"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="button"
          value="Logga in"
          onClick={() => [clearForm(), getToken()]}
        />
      </form>
      <a href="#">
        <p>Skapa konto</p>
      </a>
      <a href="#">
        <p>Glömt lösenord?</p>
      </a>
      <Footer />
    </div>
  );
}

export default Login;
