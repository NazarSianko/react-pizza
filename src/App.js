import React from 'react';
import { useDispatch } from 'react-redux';
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import UpArrow from './components/UpArrow';
import { connect } from 'react-redux';
import pizzas from './redux/reducers/pizzas';
import { Link, animateScroll } from 'react-scroll';
import filters from './redux/reducers/filters';
import { useEffect, useState } from 'react';

function App() {
  const [pageOffset, setOffset] = useState(0);
  const showOffset = () => {
    setOffset(window.pageYOffset);
  };
  useEffect(() => {
    document.addEventListener('scroll', showOffset);
 
  }, [pageOffset]);
  

  return (
    <div className="wrapper">
      {pageOffset > 150 ? <UpArrow/> : ''}

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
