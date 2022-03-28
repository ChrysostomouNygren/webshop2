import React from "react";
import { useRecoilState } from "recoil";
import axios from "axios";

// komponenter
import Header from "../components/Header";
import Footer from "../components/Footer";

// states
import { userState, nameState, userDataState } from "../recoil/auth/atom";

function Profile() {
  const [user, setUser] = useRecoilState(userState);
  const [name, setName] = useRecoilState(nameState);
  const [userData, setUserData] = useRecoilState(userDataState);

  async function getUser() {
    const response = await axios.get(
      `https://k4backend.osuka.dev/users/${user}`
    );
    console.log(response.data.name.firstname);
    console.log(response.data);
    setName(response.data.name.firstname);
    setUserData(response.data)
  }
  getUser();

  console.log(name);

  return (
    <div>
      <Header />
      <h1>Hej {name}</h1>
      <Footer />
    </div>
  );
}

export default Profile;
