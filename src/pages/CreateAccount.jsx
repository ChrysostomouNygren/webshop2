import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

function CreateAccount(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState();
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");

  async function create() {
    const response = await axios.post("https://k4backend.osuka.dev/users", {
      username: username,
      password: password,
      email: email,
      role: "user",
      name: {
        firstname: firstname,
        lastname: lastname,
      },
      address: {
        city: city,
        street: street,
        number: number,
        zipcode: zipcode,
      },
      phone: phone,
      __v: 0
    });
  }

  function clearForm() {
    setUsername("");
    setPassword("");
    setEmail("");
    setFirstname("");
    setLastname("");
    setCity("");
    setStreet("");
    setNumber("");
    setZipcode("");
    setPhone("");
  }

  function closeModal(){
      props.onHide
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Skapa konto
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <p>
            Användarnamn:{" "}
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
          </p>
          <p>
            Lösenord:{" "}
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </p>
          <p>
            Email:{" "}
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </p>
          <p>
            Förnamn:{" "}
            <input
              type="text"
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
              required
            />
          </p>
          <p>
            Efternamn:{" "}
            <input
              type="text"
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
              required
            />
          </p>
          <p>
            Telefon:{" "}
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required
            />
          </p>
          <p>
            Adress:
            <input
              type="text"
              placeholder="Gata"
              onChange={(e) => setStreet(e.target.value)}
              value={street}
              required
            />
            <input
              type="number"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              required
            />
            <br />
            <input
              type="number"
              placeholder="Postnummer"
              onChange={(e) => setZipcode(e.target.value)}
              value={zipcode}
              required
            />
            <input
              type="text"
              placeholder="Postort"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              required
            />
          </p>
        </form>
      </Modal.Body>
      <Modal.Footer>
          <Button onMouseDown={() => [create(), clearForm()]} onClick={props.onHide}>Skapa</Button>
        <Button onClick={props.onHide}>Stäng</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateAccount;
