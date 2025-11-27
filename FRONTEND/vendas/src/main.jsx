import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login'; 
import RegisterPage from './pages/Register'; 
import HomePage from './pages/Home'; // ⬅️ Página Inicial/Home
import Cart from './pages/Cart';
import './index.css'; 
// Importe seus estilos globais, se houver.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Rota principal: Login (Página de acesso) */}
        <Route path="/" element={<LoginPage />} /> 
        
        {/* Rota de Cadastro */}
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Rota da Página Principal (Para onde o usuário vai após login/cadastro) */}
        <Route path="/home" element={<HomePage />} />

        {/*Rota para o carrinho de compras */}
        <Route path="/cart" element={<Cart />} />
        
        {/* Rota Curinga para URLs não encontradas */}
        <Route path="*" element={
          <div style={{ padding: '50px', textAlign: 'center' }}>
            <h1>404</h1>
            <p>Página Não Encontrada</p>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);