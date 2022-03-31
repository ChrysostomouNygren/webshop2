import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";

// komponenter
import Header from "../components/Header";
import Footer from "../components/Footer";
import ExitBtn from "../components/ExitBtn";

// states
import {
  userState,
  nameState,
  userDataState,
  authState,
  addressState,
} from "../recoil/auth/atom";


function Profile() {
  const [user, setUser] = useRecoilState(userState);
  const [token, setToken] = useRecoilState(authState);
  const [name, setName] = useRecoilState(nameState);
  const [address, setAddress] = useRecoilState(addressState)
  const [userData, setUserData] = useRecoilState(userDataState);

  async function getUser() {
    const response = await axios.get(
      `https://k4backend.osuka.dev/users/${user}`
    );
    setUserData(response.data);

    // destructuringen fungerade inte kontinuerligt som jag ville, så jag gjorde 2 states för de objekten i medlemsuppgifts-arrayen för att kunna komma åt dess data.
    setName(response.data.name);
    setAddress(response.data.address);
  }
  const { email, phone } = userData;
  
  const { firstname, lastname } = name;
  const { city, street, number, zipcode } = address;
  
  useEffect(() => {
    getUser();
  }, []);
  
  
  return (
    <div>
      <Header />
      <h1>Hej {firstname} {lastname}!</h1>
      <h5>Dina nuvarande uppgifter:</h5>
      <p>Email: {email}</p>
      <p>Tel: {phone}</p>
      <p>Adress: {street} {number}<br/>
      {zipcode} {city}</p>
      <ExitBtn />
      <Footer />
    </div>
  );
}

export default Profile;
