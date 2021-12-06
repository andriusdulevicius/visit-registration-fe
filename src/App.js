import React from 'react';
import './Globals.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Admin from './components/pages/Admin';
import Booking from './components/pages/Booking';
import MainPage from './components/pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<MainPage />} />
          <Route path='/register' element={<Booking />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
