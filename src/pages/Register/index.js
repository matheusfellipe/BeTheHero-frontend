import React from "react";
import './style.css';
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logoImg from '../../assets/logo.png'

export default function Register(){
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1> Cadastro</h1>
                    <p>Faça o seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className = "back-link" to="/registrer">
                        <FiArrowLeft size={16} color="#e02041"/>
                
                Não tenho cadastro
                    </Link>
                </section>
                <form >
                    <input placeholder="nome da ONG" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="whatsapp" />
                    <div className = "input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{width:80}}/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>

        </div>
    );
}