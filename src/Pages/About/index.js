import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
    return (
        <div>
            <h1>Pagina Sobre</h1>
            <Link to="/"><button>Voltar</button></Link>
        </div>
    );
}