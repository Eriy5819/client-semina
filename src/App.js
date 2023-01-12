import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import PageSignin from './pages/signin';
import DashboardPage from './pages/dashboard';
import CategorisPage from './pages/categories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardPage />} />
        <Route path='signin' element={<PageSignin />} />
        <Route path='categories' element={<CategorisPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
