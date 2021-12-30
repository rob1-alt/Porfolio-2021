// eslint-disable-next-line
import { useState, useEffect } from "react";
import './App.css';
import './index.js'
import 'antd/dist/antd.css';
import { Helmet } from 'react-helmet'
import Hamburger from 'react-hamburgers';



const title = 'Robin Pautigny 🛠'



function App() {
  return (
    <div className="App">
      <Helmet>
          <title>{ title }</title>
        </Helmet>
      <header className="App-header">
        <p className=" description">Bonjour, Je suis Robin Pautigny - étudiant en 3ème année à <span className="hover:underline heticSchool">Hetic</span>.
          Je m’intéresse aux nouvelles technologies, aux voitures ainsi qu’au marketing. Actuellement à la recherche d’un stage en tant que Chef de projet digital.</p>
      </header>
    </div>
  );
}

export default App;
