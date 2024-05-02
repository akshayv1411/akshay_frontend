import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary shadow m-3">
        <Container fluid>
          <Navbar.Brand href="#" className="fw-bold ps-2" style={{ marginLeft: "200px" }}>BizLand.</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link
                href="#action1"
                className="text-decoration-none position-relative"
                onClick={() => setActiveLink('home')}
              >
                Home
                {activeLink === 'home' && (
                  <span className="position-absolute bottom-0 start-50 translate-middle-x bg-primary" style={{ height: '3px', width: '50%', borderRadius: '2px' }}></span>
                )}
              </Nav.Link>
              <Nav.Link
                href="#action2"
                className="text-decoration-none position-relative"
                onClick={() => setActiveLink('about')}
              >
                About
                {activeLink === 'about' && (
                  <span className="position-absolute bottom-0 start-50 translate-middle-x bg-primary" style={{ height: '3px', width: '50%', borderRadius: '2px' }}></span>
                )}
              </Nav.Link>
              <Nav.Link
                href="#action3"
                className="text-decoration-none position-relative"
                onClick={() => setActiveLink('services')}
              >
                Services
                {activeLink === 'services' && (
                  <span className="position-absolute bottom-0 start-50 translate-middle-x bg-primary" style={{ height: '3px', width: '50%', borderRadius: '2px' }}></span>
                )}
              </Nav.Link>
              <Nav.Link
                href="#action4"
                className="text-decoration-none position-relative"
                onClick={() => setActiveLink('portfolio')}
              >
                Portfolio
                {activeLink === 'portfolio' && (
                  <span className="position-absolute bottom-0 start-50 translate-middle-x bg-primary" style={{ height: '3px', width: '50%', borderRadius: '2px' }}></span>
                )}
              </Nav.Link>
              <Nav.Link
                href="#action5"
                className="text-decoration-none position-relative"
                onClick={() => setActiveLink('team')}
              >
                Team
                {activeLink === 'team' && (
                  <span className="position-absolute bottom-0 start-50 translate-middle-x bg-primary" style={{ height: '3px', width: '50%', borderRadius: '2px' }}></span>
                )}
              </Nav.Link>
              <Nav.Link
                href="#action6"
                className="text-decoration-none position-relative"
                onClick={() => setActiveLink('dropdown')}
              >
                Drop Down
                {activeLink === 'dropdown' && (
                  <span className="position-absolute bottom-0 start-50 translate-middle-x bg-primary" style={{ height: '3px', width: '50%', borderRadius: '2px' }}></span>
                )}
              </Nav.Link>
              <Nav.Link
                href="#action7"
                className="text-decoration-none position-relative"
                onClick={() => setActiveLink('contact')}
              >
                Contact
                {activeLink === 'contact' && (
                  <span className="position-absolute bottom-0 start-50 translate-middle-x bg-primary" style={{ height: '3px', width: '50%', borderRadius: '2px' }}></span>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
