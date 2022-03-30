import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import axios from "axios";

// komponenter
import Header from "../components/Header";
import Footer from "../components/Footer";

// states
import {
  userState,
  nameState,
  userDataState,
  authState,
} from "../recoil/auth/atom";


function Profile() {
  const [user, setUser] = useRecoilState(userState);
  const [token, setToken] = useRecoilState(authState);
  const [name, setName] = useRecoilState(nameState);
  const [userData, setUserData] = useRecoilState(userDataState);
  let navigate = useNavigate();

  async function getUser() {
    const response = await axios.get(
      `https://k4backend.osuka.dev/users/${user}`
    );
    console.log(response.data.name.firstname);
    console.log(response.data);
    setName(response.data.name.firstname);
    setUserData(response.data);
    const { email, phone, address } = userData;
    const { city, street, number, zipcode } = address;
  }

  useEffect(() => {
    getUser();
  }, []);

  function logOut() {
    setToken("");
  }

  console.log(token);

  return (
    <div>
      <Header />
      <h1>Hej {name}!</h1>
      <h5>Dina nuvarande uppgifter:</h5>
      {/* <p>Email: {email}</p>
      <p>Tel: {phone}</p>
      <p>Adress: {street} {number}<br/>
      {zipcode} {city}</p> */}
      <button onClick={() => [logOut(), navigate(`/login`)]}>Logga ut</button>
      <Footer />
    </div>
  );
}

export default Profile;
