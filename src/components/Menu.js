import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "./logo.png";
import { Cart } from "./Iconos";
import { DataContext } from "../context/Dataprovider";

function BasicExample() {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito;

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <Navbar fixed="top" style={{ background: "#FF5757", color: "red" }}>
      <Container>
        <Navbar.Brand href="#home" style={{ color: "white",fontWeight:"bold" }}>
          Pizza'sck
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <a href="/">
              {" "}
              <img
                src={Logo}
                alt="Logo"
                width="50"
                height="50"
                marginLeft="5px"
              />
            </a>
            <Nav.Link href="/catalogo" style={{ color: "white", fontWeight:"bold"}}>
              Menú{" "}
            </Nav.Link>
            <Nav.Link
              href="/personalizar"
              style={{ paddingRight: "600px", color: "white",fontWeight:"bold" }}
            >
              Arma tu pizza
            </Nav.Link>
            <div onClick={toggleMenu} style={{ color: "white" }}>
              <Cart />
              <span color="red">{carrito.length}</span>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
