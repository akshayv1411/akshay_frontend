import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import InputGroupUi from "./components/InputGroupUi";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MessageUi from "./components/MessageUi";
import ButtonUi from "./components/ButtonsUi";
import HeaderUi from "./components/HeaderUi";
import "./App.css";

function App() {
  return (
    <>
      <header className="text-center">
        <HeaderUi />
      </header>
      <Container className="border mt-5 bg-white col-sm-11 col-lg-6 rounded p-4 shadow">
        <Row>
          <Col sm={12} md={8} lg={6}>
            <InputGroupUi />
          </Col>
          <Col sm={12} md={8} lg={6}>
            <MessageUi />
          </Col>
          <Col className="justify-content-center text-center">
            <ButtonUi />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
