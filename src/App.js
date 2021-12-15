import './App.css';
import 'antd/dist/antd.css';
import ellipse from './img/Ellipse1.png';
import { Helmet } from 'react-helmet'

const title = 'Robin Pautigny'

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
                    <li>À propos de moi</li>
                    <li>Projets</li>
                    <li>Contact</li>
                  </ol>
                </nav>
              </div>
        </div>
        {/* <div>
          <img src={ellipse}/>
        </div> */}

        
              
      </header>
    </div>
  );
}

export default App;
