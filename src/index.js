import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Header from './Extends/Header';
import Footer from './Extends/Footer';
import reportWebVitals from './reportWebVitals';
import Story from "./Views/Story/Index";
import Mint from "./Views/Mint/Index";
import Team from "./Views/Team/Index";
ReactDOM.render(
  <BrowserRouter basename="/">
    <header className='pageheader'>
      <Header />
    </header>
    {/* <App /> */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Story" element={<Story />} />
      <Route path="Mint" element={<Mint />} />
      <Route path="Team" element={<Team />} />
    </Routes>
    <footer>
      <Footer />
    </footer>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
