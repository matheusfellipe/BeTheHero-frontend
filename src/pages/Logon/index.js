import React from "react";
import {FiLogIn} from 'react-icons/fi';

import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.png';

export default function Logon(){
    return (
     <div className="logon-container">
         <section className="class-form">
         <img src={logoImg} alt="Be The Hero"/>
         <form>
             <h1>Faça o seu Logon</h1>
             <input placeholder="Sua ID" />
            <button className="button" type="submit">Entrar</button>


            <a href="/registrer">
                <FiLogIn size={16} color="#e02041"/>
                Não tenho cadastro
            </a>
         </form>
         </section>
         <img src={heroesImg} alt="Heroes"/>
     </div>
    );
}