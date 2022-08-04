import React from 'react';
import {useDispatch} from 'react-redux';
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route, Routes } from 'react-router-dom';

import {connect} from 'react-redux';
import pizzas from './redux/reducers/pizzas';
import filters from './redux/reducers/filters';

function App() {
 
 

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Cart" element={<Cart />} />
      </Routes>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
