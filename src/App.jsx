import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorPage404 from './pages/ErrorPage404/ErrorPage404';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Accommodation from './pages/Accommodation/Accommodation';
import BaseLayout from './components/BaseLayout';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/accommodation/:id' element={<Accommodation />} />
          <Route path='/accommodation/*' element={<ErrorPage404 />} />
          <Route path='*' element={<ErrorPage404 />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
