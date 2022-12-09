import React, { useContext } from "react";
import { X, ArrowUp, ArrowDown, Trash } from "../Iconos";
import { DataContext } from "../../context/Dataprovider";

export const Carrito = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;

  const toggleFalse = () => {
    setMenu(false);
  };

  const show1 = menu ? "carritos show" : "carritos";
  const show2 = menu ? "carrito show" : "carrito";

  const eliminarProducto = (id) => {
    if (window.confirm("¿Estás seguro de eliminar el producto?")) {
      carrito.forEach((item, index) => {
        if (item.id === id) {
          item.cantidad = 1;
          carrito.splice(index, 1);
        }
      });
      setCarrito([...carrito]);
    }
  };

  const resta = (id) => {
    carrito.forEach((item) => {
      if (item.id === id) {
        item.cantidad === 1 ? (item.cantidad = 1) : (item.cantidad -= 1);
      }
    });
    setCarrito([...carrito]);
  };

  const suma = (id) => {
    carrito.forEach((item) => {
      if (item.id === id) {
        item.cantidad += 1;
      }
    });
    setCarrito([...carrito]);
  };

  return (
    <div className={show1}>
      <div className={show2}>
        <div className="carrito__close" onClick={toggleFalse}>
          <X />
        </div>
        <h2>Su carrito</h2>

        <div className="carrito__center">
          {carrito.length === 0 ? (
            <h2 style={{ textAlign: "center", fontSize: "3rem" }}>
              Carrito vacío
            </h2>
          ) : (
            <>
              {carrito.map((producto) => (
                <div className="carrito__item" key={producto.id}>
                  <img src={producto.image} alt="" />
                  <div>
                    <h3>{producto.tittle}</h3>
                    <p className="price">${producto.price}</p>
                  </div>
                  <div>
                    <a onClick={() => suma(producto.id)}>
                      <ArrowUp />
                    </a>
                    <p className="cantidad">{producto.cantidad}</p>
                    <a onClick={() => resta(producto.id)}>
                      <ArrowDown />
                    </a>
                  </div>
                  <div
                    className="remove__item"
                    onClick={() => eliminarProducto(producto.id)}
                  >
                    <Trash />
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="carrito__footer">
          <h3>Total: ${total}</h3>
          <button className="btn">Comprar</button>
        </div>
      </div>
    </div>
  );
};
