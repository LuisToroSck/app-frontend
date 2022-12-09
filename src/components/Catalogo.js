import { Col, Container, Row } from "react-bootstrap";
import React, { useContext } from "react";
import { DataContext } from "../context/Dataprovider";
import { PoductoItem } from "./ProductoItem";

function Catalogo() {
  const value = useContext(DataContext);
  const [productos] = value.productos;

  console.log(productos);

  return (
    <Container
      style={{
        justifyContent: "center",
        marginTop: "70px",
        fontFamily: "Century Gothic",
      }}
    >
      <h1>Pizzas de nuestro menú</h1>
      <Row xs={4}>
        {productos.map((producto) => {
          {
            if (producto.category === "pizza") {
              return <PoductoItem
                key={producto.id}
                id={producto.id}
                tittle={producto.tittle}
                price={producto.price}
                description={producto.description}
                image={producto.image}
                cantidad={producto.cantidad}
              />
            }

          }
        })}
      </Row>
      <br></br>
      <h1>Bebestibles</h1>
      <Row xs={4}>
        {productos.map((producto) => {
          {
            if (producto.category === "bebestible") {
              return <PoductoItem
                key={producto.id}
                id={producto.id}
                tittle={producto.tittle}
                price={producto.price}
                image={producto.image}
                cantidad={producto.cantidad}
              />
            }

          }
        })}
      </Row>
      <br></br>
      <h1>Salsas</h1>
      <Row xs={4}>
        {productos.map((producto) => {
          {
            if (producto.category === "salsa") {
              return <PoductoItem
                key={producto.id}
                id={producto.id}
                tittle={producto.tittle}
                price={producto.price}
                image={producto.image}
                cantidad={producto.cantidad}
              />
            }

          }
        })}
      </Row>
    </Container>
  );
}

export default Catalogo;
