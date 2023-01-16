import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import PageSignin from './pages/signin';
import DashboardPage from './pages/dashboard';
import CategorisPage from './pages/categories';
import CategorisCreate from './pages/categories/create';
import CategorisEdit from './pages/categories/edit';
import { listen } from './redux/listener';

function App() {
  useEffect(() => {
    listen();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardPage />} />
        <Route path='signin' element={<PageSignin />} />
        <Route path='categories' element={<CategorisPage />} />
        <Route path='categories/create' element={<CategorisCreate />} />
        <Route path='categories/create/:id' element={<CategorisEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
