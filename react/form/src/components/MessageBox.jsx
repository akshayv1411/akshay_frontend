import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";

function MessageBox() {
  return (
    <>
      <Form.Label>Message</Form.Label>
      <FloatingLabel controlId="floatingTextarea2">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
        />
      </FloatingLabel>
    </>
  );
}

export default MessageBox;
