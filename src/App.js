import logo from './logo.svg';
import './App.css';
// import { Demo } from './Component/Demo';
import Login from './Component/Login';
import Demo2 from './Component/Demo2';
import { Parent } from './Component/Parent';
import { Child } from './Component/Child';
import Demo from './Component/Demo';
import { UseMemo } from './Component/UseMemo';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React testing

        </a>
      </header> */}
      {/* <Demo /> */}
      <UseMemo />
      {/* <Parent /> */}
      {/* <Child /> */}
      {/* <Demo2 /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
