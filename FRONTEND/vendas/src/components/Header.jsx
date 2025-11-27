import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // O header usa estilos definidos no Home.css

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-logo">Fashion Store</div>
      <nav className="header-nav">
        {/* Aqui você usaria Link do react-router-dom para navegação real */}
        <Link to="/" className="nav-item">🏠 Início</Link>
        <Link to="/cart" className="nav-item">🛒 Carrinho</Link>
        <Link to="/chat" className="nav-item">💬 Chat</Link>
        <Link to="/profile" className="nav-item">👤 Perfil</Link>
      </nav>
    </header>
  );
};

export default Header;