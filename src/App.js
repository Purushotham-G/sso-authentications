import logo from './logo.svg';
import './App.css';
// import { Demo } from './Component/Demo';
// import Login from './Component/Login';
import Demo2 from './Component/Demo2';
// import { Parent } from './Component/Parent';
import { Child } from './Component/Child';
import Demo from './Component/Demo';
// import { UseMemo } from './Component/UseMemo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstApi from './Practice/FirstApi';
import Parent from './Practice/Parent';
import UseMemo from './Practice/UseMemo';
import UseCallbackANDuseMemo from './Practice/UseCallbackANDuseMemo';
import Login from './SSOAUTH/Login';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React testing

    //     </a>
    //   </header>
    //   <Demo />
    //   <UseMemo />
    //   <Parent />
    //   <Child />
    //   <Demo2 />
    //   <Login />
      
    // </div>
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='firstApi' element={<FirstApi />} />
        <Route path='parent' element={<Parent />} />
        <Route path='useMemo' element={<UseMemo />} />
        <Route path='useCallback/useMemo' element={<UseCallbackANDuseMemo />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
