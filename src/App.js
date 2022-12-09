import Layout from './Layout';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import { Container } from 'react-bootstrap';
import Catalogo from './components/Catalogo';
import {Carrito} from "./components/carrito";
import Personalizar from "./components/Personalizar";

function App(){
    return(
        <Layout >
            <Container style={{marginTop: "100px" }}>
            <Carrito/>
                <Routes>
                    <Route path="/" element={<Home />} />  
                    <Route path="/catalogo" element={<Catalogo />} /> 
                    <Route path="/personalizar" element={<Personalizar />} /> 
                </Routes>
            </Container>
        </Layout>
    );
}

export default App;