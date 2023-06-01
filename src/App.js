import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage404 from './pages/ErrorPage404/ErrorPage404';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import SinglePage from './pages/SinglePage/SinglePage';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<ErrorPage404 />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/singlepage' element={<SinglePage />} />
          <Route path='*' element={<ErrorPage404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
