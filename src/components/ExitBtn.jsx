import React from "react";
import { useNavigate } from "react-router-dom";
import { authState, userDataState, userState } from "../recoil/auth/atom";
import { useRecoilState } from "recoil";

function ExitBtn() {
  const [token, setToken] = useRecoilState(authState);
  const [userData, setUserData] = useRecoilState(userDataState);
  const [user, setUser] = useRecoilState(userState)
  let navigate = useNavigate();


  function logOut() {
    setToken("");
    setUser();
    setUserData({});
  }
  return (
    <div>
      <button onClick={() => [logOut(), navigate(`/login`)]}>Logga ut</button>
    </div>
  );
}

export default ExitBtn;
