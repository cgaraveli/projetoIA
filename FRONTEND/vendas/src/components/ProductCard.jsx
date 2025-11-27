import React from 'react';
import '../styles/Home.css'; // Os cards usam estilos definidos no Home.css

const ProductCard = ({ imageSrc, category, title, rating, price }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        {/* Usaria a prop 'imageSrc' aqui, mas mantemos um placeholder para o exemplo */}
        <img 
            src={imageSrc} 
            alt={title} 
            className="product-image"
        />
        <span className="product-category">{category}</span>
      </div>
      <h3 className="product-title">{title}</h3>
      <div className="product-rating">
        {/* Simulação de estrelas: (128) */}
        <span>⭐⭐⭐⭐⭐</span>
        <span className="rating-count">({rating})</span>
      </div>
      <p className="product-price">{price}</p>
      <button className="add-to-cart-button">
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ProductCard;