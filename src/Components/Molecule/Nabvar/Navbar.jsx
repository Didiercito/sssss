import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Searchs from '../../Atoms/Searchs/Search';
import Algo2 from '../../../db/db2';

function Navs() {
  return (
    <>
      {Algo2.Data2.map((Data2) => (
        <Navbar bg="primary" data-bs-theme="dark" key={Data2.id}>
          <Container>
            <Navbar.Brand href="#home">
              <img
                src=""
                alt="Logo"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#nuevo-grupo">Nuevo grupo</Nav.Link>
              <Nav.Link href="#reportes">Reportes</Nav.Link>
            </Nav>
            <Searchs />
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navs;
