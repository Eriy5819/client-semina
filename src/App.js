import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import PageSignin from './pages/signin';
import DashboardPage from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardPage />} />
        <Route path='signin' element={<PageSignin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
