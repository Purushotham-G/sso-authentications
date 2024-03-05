import logo from './logo.svg';
import './App.css';
// import { Demo } from './Component/Demo';
// import Login from './Component/Login';
import Demo2 from './Component/Demo2';
import { Parent } from './Component/Parent';
// import { Child } from './Component/Child';
import Demo from './Component/Demo';
// import { UseMemo } from './Component/UseMemo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstApi from './Practice/FirstApi';
import UseMemo from './Practice/UseMemo';
import UseCallbackANDuseMemo from './Practice/UseCallbackANDuseMemo';
import Login from './SSOAUTH/Login';
import Local11 from './Component/Local11';
import { Test1 } from './test/Test1';
import { Crud } from './CRUD/Crud';
import { PraCrud } from './CRUD/PraCrud';
// import Parent from './Practice/Parent';
// import { Local } from './Component/Localocal';


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
      {/* <Parent /> */}
        {/* <Route path='/' element={<Login />} /> */}
        <Route path='firstApi' element={<FirstApi />} />
        <Route path='/' element={<Parent />} />
        <Route path='local' element={<Local11 /> } />
        <Route path='test' element={<Test1 /> } />
        <Route path='useMemo' element={<UseMemo />} />
        {/* <Route path='/' element={<Parent />} /> */}
        <Route path='useCallback/useMemo' element={<UseCallbackANDuseMemo />} />
        <Route path='crud' element={<Crud />} />
        <Route path='pracrud' element={<PraCrud />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
