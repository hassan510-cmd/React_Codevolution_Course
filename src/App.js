import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Career } from './components/Greet';
import Description from './components/wel';
import { Other } from './components/wel';
import Contentx from './components/msg';
import Counter from './components/counter';
import NewComp from './components/functionclick';
import EventBind from './components/EventBind';
import Baba from './components/Baba';
import ConditionalRendering from './components/ConditionalRendering';
import ListElements from './components/ListElements';
import Stylesheet from './components/Stylesheet';
import Inlinestyle from './components/Inlinestyle';
import './components/appStyles.css';
import styles from './components/appStyles.module.css';
function App() {
  // console.log('asdasd'); 
  // console.log(<Greet/>);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className={styles.success}>--------- ex : css module   ------------</h1>
        <h1 className='error'>--------- ex : css sheet   ------------</h1>

        <h1>--------- ex : inline sheet  ------------</h1>
        <Inlinestyle/>
        <h1>--------- ex : style sheet  ------------</h1>
        <Stylesheet issuccess={true}/>
        <h1>--------- ex : ListElements render ------------</h1>
        <ListElements/>
        <h1>--------- ex : Conditional render ------------</h1>
        <ConditionalRendering/>
        <h1>--------- ex : Method as Props ------------</h1>
        <Baba/>
        <p>
          Hello world!! 
        </p>
        <h1>--------- ex : EventBind ------------</h1>
        <EventBind />
        <NewComp/>
        <h1>--------- ex : setState ------------</h1>
        <Counter he="13xxxxxxxxxx"/>
        <Contentx />
        <h1>--------- ex : Props ------------</h1>
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
