import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorPage404 from './pages/ErrorPage404/ErrorPage404';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import SinglePage from './pages/SinglePage/SinglePage';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='*' element={<ErrorPage404 />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/singlepage/:id' element={<SinglePage />} />
        {/* <Route path='/singlepage' element={<SinglePage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
