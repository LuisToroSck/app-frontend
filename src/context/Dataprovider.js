import React, { createContext, useEffect, useState } from "react";
import Data from "./Data.js";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [productos, setProducts] = useState([]);
  const [menu, setMenu] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const producto = Data.items;
    if (producto) {
      setProducts(producto);
    } else {
      setProducts([]);
    }
  }, []);

  const addCarrito = (id) => {
    const check = carrito.every((producto) => {
      return producto.id !== id;
    });
    if (check) {
      const data = productos.filter((producto) => {
        return producto.id === id;
      });
      setCarrito([...carrito, ...data]);
    } else {
      alert("El producto ya se ha agregado al carrito.");
    }
  };

  /* prev es un acumulador */
  useEffect(() => {
    const getTotal = () => {
      const res = carrito.reduce((prev, item) => {
        return prev + (item.price * item.cantidad);
      }, 0);
      setTotal(res);
    }
    getTotal()
  },[carrito])

  /* Obtiene y convierte lo q hay guardado en el localstorage */
  useEffect(() => {
    const DataCarrito = JSON.parse(localStorage.getItem("dataCarrito"));
    if (DataCarrito) {
      setCarrito(DataCarrito);
    }
  },[])

  /* Setea lo que hay en localstorage */
  useEffect(() => {
    localStorage.setItem("dataCarrito", JSON.stringify(carrito));
  },[carrito])

  const value = {
    productos: [productos],
    menu: [menu, setMenu],
    addCarrito: addCarrito,
    carrito: [carrito, setCarrito],
    total: [total, setTotal],
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
