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
import './bootstrap.min.css'
import styles from './components/appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import Fragments from './components/Fragments';
import Table from './components/Table';
import ComparePureandNot from './components/ComparePureandNot';
import Refs from './components/Refs';
import Putfocus from './components/Putfocus';
import FRParentinput from './components/FRParentinput';
import Portal from './components/Portal';
import WrongComp from './components/WrongComp';
import BoundryErorr from './components/BoundryErorr';
import HoverCounter from './components/HoverCounter';
import ClickCounter from './components/ClickCounter';
import RenderProps from './components/RenderProps';
import { Sender } from './components/userContext';
import ComponentA from './components/ComponentA';
function App() {
  // console.log('asdasd'); 
  // console.log(<Greet/>);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 >--------- ex : Context    ------------</h1>
        <Sender value='sender-value'>
          <ComponentA/>
        </Sender>    
        <h1 >--------- ex : Render Props    ------------</h1>
        <RenderProps render={(count, increment) => (
          <ClickCounter count={count} increment_count={increment} />
        )}
        />

        <h1 >--------- ex : HOC    ------------</h1>
        <ClickCounter name2='hassan2' />
        <HoverCounter />
        <h1 >--------- ex : wrong    ------------</h1>
        <BoundryErorr>

          <WrongComp name="wrongs" />
        </BoundryErorr>
        <BoundryErorr>

          <WrongComp name="wrongs" />
        </BoundryErorr>
        {/* <WrongComp name="wrong" /> */}
        <h1 >--------- ex : protals    ------------</h1>
        <Portal />
        <h1 >--------- ex : forward Refs    ------------</h1>
        <FRParentinput />
        <h1 >--------- ex : remote from parent Refs    ------------</h1>
        <Putfocus />
        <h1 >--------- ex : Refs    ------------</h1>
        <Refs />
        <h1 >--------- ex : PureComponent clg   ------------</h1>
        <ComparePureandNot />
        <h1 >--------- ex : Fragments   ------------</h1>
        <Fragments />
        <Table />
        <h1 >--------- ex : Lifecycle   ------------</h1>
        <LifecycleA />
        <h1 >--------- ex : Form#1   ------------</h1>
        <Form />
        <h1 className={styles.success}>--------- ex : css module   ------------</h1>
        <h1 className='error'>--------- ex : css sheet   ------------</h1>

        <h1>--------- ex : inline sheet  ------------</h1>
        <Inlinestyle />
        <h1>--------- ex : style sheet  ------------</h1>
        <Stylesheet issuccess={true} />
        <h1>--------- ex : ListElements render ------------</h1>
        <ListElements />
        <h1>--------- ex : Conditional render ------------</h1>
        <ConditionalRendering />
        <h1>--------- ex : Method as Props ------------</h1>
        <Baba />
        <p>
          Hello world!!
        </p>
        <h1>--------- ex : EventBind ------------</h1>
        <EventBind />
        <NewComp />
        <h1>--------- ex : setState ------------</h1>
        <Counter he="13xxxxxxxxxx" />
        <Contentx />
        <h1>--------- ex : Props ------------</h1>
        <Greet name='john'>
          <button>
            Action
          </button>
          <button type="button" class="btn btn-primary">
            Notifications <span class="badge bg-dark">4</span>
          </button>

          <span class="badge bg-dark">Dark</span>
          <span class="badge badge-pill badge-danger">Danger</span>
          <label for="collaborativa_utenti_pollo"><span class="badge bg-danger">pollo</span></label>


        </Greet>
        <Greet name="hassan" age="15" /> <Other />
        <Career />
        <Description name='john' />
        <Description name='dina'>
          <button className='btn btn-success'>
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
