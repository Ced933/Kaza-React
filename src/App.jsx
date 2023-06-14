import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorPage404 from './pages/ErrorPage404/ErrorPage404';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import SinglePage from './pages/SinglePage/SinglePage';
// import Navigation from './components/Navigation/Navigation';
// import Footer from './components/Footer/Footer';
import BaseLayout from './components/BaseLayout';

const App = () => {
  return (
    <div>
      {/* <Navigation /> */}
      <Routes>
        <Route path='/' element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/singlepage/:id' element={<SinglePage />} />
          <Route path='*' element={<ErrorPage404 />} />
        </Route>

      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
