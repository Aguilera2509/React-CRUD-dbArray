import logo from './logo.svg';
import './App.css';
import { CRUD_APP } from './componentes/crud-app';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <CRUD_APP />

        <br />
        <br />
        <br />
        <br />

      </header>
    </div>
  );
}

export default App;
