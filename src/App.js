import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <h1 className='title'>Hiromi Akita</h1>
        <p className='subtitle'>Work in progress, but we can be friends on LinkedIn :&#41;</p>
        <nav>
          <a href='https://www.linkedin.com/in/hiromiakita/' target='_blank' rel="noopener noreferrer" >
            <FontAwesomeIcon icon={faLinkedin} color="#0077b5" size="lg"/>
          </a>
        </nav>
      </header>
    </div>
  );
}

export default App;
