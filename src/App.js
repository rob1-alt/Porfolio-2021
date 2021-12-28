// eslint-disable-next-line
import { useState, useEffect } from "react";
import './App.css';
import './index.js'
import 'antd/dist/antd.css';
// eslint-disable-next-line
import ellipse from './img/Ellipse1.png';
// eslint-disable-next-line
import ellipseDown from './img/Ellipse2.png';
// eslint-disable-next-line
import rectangle from './img/Rectangle6.png';
import { Helmet } from 'react-helmet'



const title = 'Robin Pautigny 🛠'


/* const screenWidth = useScreenSize().width;

const [disableParallax, setdisableParallax] = useState(false);

useEffect(() => {
  if (screenWidth <= 1200) {
    setdisableParallax(true);
  } else {
    setdisableParallax(false);
  }
}, [screenWidth]); */

function App() {
  return (
    <div className="App">
      <Helmet>
          <title>{ title }</title>
        </Helmet>
      <header className="App-header">
        <p className=" description text-left p-16 mr-64">Bonjour, Je suis Robin Pautigny - étudiant en 3ème année à <span className="hover:underline heticSchool">Hetic</span>.
          Je m’intéresse aux nouvelles technologies, aux voitures ainsi qu’au marketing. Actuellement à la recherche d’un stage en tant que Chef de projet digital.</p>
      </header>
    </div>
  );
}

export default App;
