import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import store from './Store'
import {Provider} from 'react-redux'
const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Router>
      <Provider store={store}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      </Provider>
      </Router>
    </div>
  );
};

export default App;
