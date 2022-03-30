import React from "react";
import { useNavigate } from "react-router-dom";
import { authState } from "../recoil/auth/atom";
import { useRecoilState } from "recoil";

function ExitBtn() {
  const [token, setToken] = useRecoilState(authState);
  let navigate = useNavigate();


  function logOut() {
    setToken("");
  }
  return (
    <div>
      <button onClick={() => [logOut(), navigate(`/login`)]}>Logga ut</button>
    </div>
  );
}

export default ExitBtn;
