import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Career } from './components/Greet';
import Description from './components/wel';
import { Other } from './components/wel';
import Contentx from './components/msg';
import Counter from './components/counter';

function App() {
  console.log('asdasd'); 
  console.log(<Greet/>);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!! 
        </p>
        <Counter he="13xxxxxxxxxx"/>
        <Contentx />
        <Greet name='john'>
          <button>
            Action 
          </button>
        </Greet>
        <Greet name="hassan" age="15"/> <Other/>
        <Career/>
        <Description name='john'/>
        <Description name='dina'>
        <button>
            Action 2
          </button>
        </Description>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
