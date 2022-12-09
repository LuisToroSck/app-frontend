import { Container, Row, Col, Card } from "react-bootstrap";
import React, { useContext } from "react";
import { DataContext } from "../context/Dataprovider";
import { PoductoItem } from "./ProductoItem";

function Personalizar() {

    const value = useContext(DataContext);
    const [productos] = value.productos;
    const addCarrito = value.addCarrito;

    // Datos de los ingredientes, tipo queso, tamaño de la masa, etc.
    const ingredientesCarne = ["Carne", "Carne mechada", "Pepperoni", "Salchicha", "Jamón", "Pollo", "Tocino"];
    const ingredientesVegetales = ["Aceituna", "Choclo", "Piña", "Cebolla", "Pimiento", "Tomate", "Champiñones"];
    const tipoQueso = ["Gouda", "Mozarella"];
    const cantidadQueso = ["Normal", "Extra", "Doble"];
    const tipoMasa = ["Normal", "Delgada"];
    const tamanioMasa = ["Familiar", "Mediana", "Personal"];

    // Para usar y modificar estos datos
    const [ingredientesCarneState, setIngredientesCarneState] = React.useState("");
    const [ingredientesVegetalesState, setIngredientesVegetalesState] = React.useState("");
    const [tipoQuesoState, setTipoQuesoState] = React.useState("");
    const [cantidadQuesoState, setCantidadQuesoState] = React.useState("");
    const [tipoMasaState, setTipoMasaState] = React.useState("");
    const [tamanioMasaState, setTamanioMasaState] = React.useState("");

    // función para crear la pizza
    const crearPizza = () => {
        const pizza = [
            ingredientesCarneState,
            ingredientesVegetalesState,
            tipoQuesoState,
            cantidadQuesoState,
            tipoMasaState,
            tamanioMasaState
        ].map((item) => item + ", ");
        console.log("Pizza: ", pizza);

        // obtener pizza perzonlizada
        const pizzaPersonalizada = productos.filter((item) => {
            return item.id === 17;
        })[0]

        // agregar los ingredientes a la pizza personalizada
        pizzaPersonalizada.ingrediente = pizza;
        console.log("Pizza personalizada: ", pizzaPersonalizada);

        // agregar al carrito
        addCarrito(pizzaPersonalizada.id);
    }






    return (
        <Container
            style={{
                justifyContent: "center",
                marginTop: "70px",
                fontFamily: "Century Gothic",
            }}
        >
            <h1>¡Crea una pizza a tú gusto!</h1>
            <button
                onClick={() => crearPizza()}
                type="button" class="btn btn-primary">Añadir al carrito</button>
            <br></br>
            <Card style={{ borderColor: "#FFDE59" }}>
                <Row xs={1} md={2} className="g-4">
                    <Card style={{ borderColor: "#FFDE59" }}>
                        <Col>
                            <h2>Selecciona los ingredientes de carne</h2>
                            <div>
                                {ingredientesCarne.map((ingrediente) => (
                                    <div>
                                        <label>{ingrediente}</label>
                                        <input class="form-check-input"
                                            value={ingrediente}
                                            type={"checkbox"}
                                            name="ingredienteCarne"
                                            onChange={(e) => {
                                                setIngredientesCarneState(e.target.value);
                                                console.log("Ingrediente de carne: ", e.target.value);
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Card>
                    <Card style={{ borderColor: "#FFDE59" }}>
                        <Col>
                            <h2>Selecciona los ingredientes vegetales</h2>
                            <div>
                                {ingredientesVegetales.map((ingrediente) => (
                                    <div>
                                        <label>{ingrediente}</label>
                                        <input class="form-check-input"
                                            value={ingrediente}
                                            type={"checkbox"}
                                            name="ingredienteVegetal"
                                            onChange={(e) => {
                                                setIngredientesVegetalesState(e.target.value);
                                                console.log("Ingrediente vegetal: ", e.target.value);
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Card>
                    <Card style={{ borderColor: "#FFDE59" }}>
                        <Col>
                            <h2>Selecciona el tipo de queso</h2>
                            <div>
                                {tipoQueso.map((queso) => (
                                    <div>
                                        <label>{queso}</label>
                                        <input class="form-check-input"
                                            value={queso}
                                            type={"radio"}
                                            name="tipoQueso"
                                            onChange={(e) => {
                                                setTipoQuesoState(e.target.value);
                                                console.log("Tipo de queso: ", e.target.value);
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Card>
                    <Card style={{ borderColor: "#FFDE59" }}>
                        <Col>
                            <h2>Selecciona el tipo de masa</h2>
                            <div>
                                {tipoMasa.map((masa) => (
                                    <div>
                                        <label>{masa}</label>
                                        <input class="form-check-input"
                                            value={masa}
                                            type={"radio"}
                                            name="tipoMasa"
                                            onChange={(e) => {
                                                setTipoMasaState(e.target.value);
                                                console.log("Tipo de masa: ", e.target.value);
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>

                        </Col>
                    </Card>
                    <Card style={{ borderColor: "#FFDE59" }}>
                        <Col>
                            <h2>Selecciona la cantidad de queso</h2>
                            <div>
                                {cantidadQueso.map((cantidad) => (
                                    <div>
                                        <label>{cantidad}</label>
                                        <input class="form-check-input"
                                            value={cantidad}
                                            type={"radio"}
                                            name="cantidadQueso"
                                            onChange={(e) => {
                                                setCantidadQuesoState(e.target.value);
                                                console.log("Cantidad de queso: ", e.target.value);
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>

                        </Col>
                    </Card>
                    <Card style={{ borderColor: "#FFDE59" }}>
                        <Col>
                            <h2>Selecciona el tamaño de la masa</h2>
                            <div>
                                {tamanioMasa.map((tamanio) => (
                                    <div>
                                        <label>{tamanio}</label>
                                        <input class="form-check-input"
                                            value={tamanio}
                                            type={"radio"}
                                            name="tamanioMasa"
                                            onChange={(e) => {
                                                setTamanioMasaState(e.target.value);
                                                console.log("Tamaño masa: ", e.target.value);
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Card>
                </Row>
            </Card>
        </Container>
    );
}

export default Personalizar;