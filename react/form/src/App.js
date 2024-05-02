import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import InputPlaceHolders from './components/InputPlaceHolders'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MessageBox from './components/MessageBox'
import ButtonExample from './components/Buttons';
import HeaderBody from './components/HeadBody'
import "./App.css";

function App() {
  return (
    <>
      <header className="text-center">
        <HeaderBody />
      </header>
      <Container className="border mt-5 bg-white col-sm-11 col-lg-6 rounded p-4 shadow">
        <Row>
          <Col sm={12} md={8} lg={6}>
            <InputPlaceHolders />
          </Col>
          <Col sm={12} md={8} lg={6}>
            <MessageBox />
          </Col>
          <Col className="justify-content-center text-center">
            <ButtonExample />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
