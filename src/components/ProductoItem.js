import React, { useContext } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DataContext } from "../context/Dataprovider";

export const PoductoItem = ({
  id,
  tittle,
  price,
  description,
  category,
  image,
  cantidad,
}) => {
  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;

  return (
    <Col>
      <Card className="text-center" style={{ width: "15rem", borderColor: "#FFDE59" }}>

        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title style={{ fontWeight: "600" }}>{tittle}</Card.Title>

          <Card.Text>{description}</Card.Text>

         

          <div class="row">
            <div class="col-5">
              <Card.Text style={{ fontSize: "1.5rem", color: "black" }}>
                ${price}
              </Card.Text>
            </div>
            <div class="col-7">
              <Button
                onClick={() => addCarrito(id)}
                style={{ color: "white", backgroundColor: "#FF5757" }}
              >
                Agregar al carrito
              </Button>
            </div>

          </div>
        </Card.Body>
      </Card>
      <p></p>
    </Col>

  );
};
