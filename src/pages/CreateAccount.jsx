import React from "react";
import { Modal, Button } from "react-bootstrap";

function CreateAccount(props) {
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
        {/* <form></form> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Stäng</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateAccount;
