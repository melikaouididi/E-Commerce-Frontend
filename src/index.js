import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'; 
import {ContextUse} from './context/ContextUse'
import { SignUpPage } from './pages/SignUpPage';
import { LoginPage } from './pages/LoginPage';
import { Shop } from './pages/Shop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ContextUse> */}
      <Router>
        <Routes>
          <Route exact path='/' element={<App/>}></Route>
          <Route exact path='/register' element={<SignUpPage/>}></Route>
          <Route exact path='/signin' element={<LoginPage/>}></Route>
          <Route exact path='/shop' element={<Shop/>}></Route>


        </Routes>
      </Router>
{/* </ContextUse> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

