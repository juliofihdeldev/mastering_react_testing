import './App.css';
import Hello from './Hello';
import Link from './Link';
import Toggle from './Toggle';
import User from './User';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link
          page="some_link">
          Learn React
        </Link>
        <Hello name="Julio JEAN FILS "/>

        <User id={123} ></User>
        {/* <Contact /> */}
        <Toggle></Toggle>
      </header>
    </div>
  );
}

export default App;
