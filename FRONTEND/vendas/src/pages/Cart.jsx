import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/Cart.css';

const Cart = () => {
  return (
    <>
      <Header />

      <main className="cart-container">
        <h1 className="cart-title">Carrinho de Compras</h1>
        <p className="cart-subtitle">Seus itens selecionados</p>

        <div className="cart-empty-box">
          <div className="cart-empty-icon">
            <img src="/images/empty-cart.png" alt="Carrinho vazio" />
          </div>

          <h2 className="cart-empty-title">Seu carrinho está vazio</h2>
          <p className="cart-empty-description">
            Adicione produtos à sua cesta para começar suas compras
          </p>

          <Link to="/" className="cart-empty-button">
            Ir às Compras
          </Link>
        </div>
      </main>
    </>
  );
};

export default Cart;