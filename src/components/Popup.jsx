import { Modal, Button } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { idState } from "../recoil/id/atom";
// Här har jag id't på den jag tryckt på.... nao wat?


function Popup(props) {
  const id = useRecoilValue(idState);


  console.log(id.title)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {id.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>{id.price}:-</h5>
        <p>
          {id.description}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Popup;
