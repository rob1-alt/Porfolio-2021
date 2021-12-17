import { useState, useEffect } from "react";
import './App.css';
import 'antd/dist/antd.css';
import ellipse from './img/Ellipse1.png';
import ellipseDown from './img/Ellipse2.png';
import rectangle from './img/Rectangle6.png';
import { Helmet } from 'react-helmet'



const title = 'Robin Pautigny'


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
        <div className='wrapperHome'>
          <div className='box'>
                <p className='mainText'>
                    Je suis Robin Pautigny - étudiant en 3ème année à <a href='https://hetic.net' target='_blank'><span className='vert'>Hetic</span></a>.
                    Je m’intéresse aux nouvelles technologies, aux voitures ainsi qu’au marketing. Actuellement à la recherche d’un stage en tant que Chef de projet digital.
                  </p>
              </div>
              <div className='box2'>
                <nav className='wrapperMenu'>
                  <ol>
                    <a href='#'>
                    <li>À propos de moi</li>
                    </a>
                    <a href='1'>
                    <li>Projets</li>
                    </a>
                    <a href='#'>
                    <li>Contact</li>
                    </a>
                  </ol>
                </nav>
              </div>
        </div>
        <div  className="wrapperArticle">
          <img classname="ellipse1" src={ellipse}/>
          <div className="articlePart">
            <h3 className="datesTime">2021</h3>
            <p>Spoty Draft</p>
          </div>
        </div>
        <img className="ellipse2" src={ellipseDown}/>
      </header>
    </div>
  );
}

export default App;
