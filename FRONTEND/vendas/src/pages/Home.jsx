import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import produtosService from "../services/produtosService";
import "../styles/Home.css";

const Home = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    produtosService
      .listar()
      .then((res) => setProdutos(res.data))
      .catch((err) => console.error("Erro ao carregar produtos:", err));
  }, []);

  return (
    <>
      <Header />

      <main className="home-main-content">
        <h2 className="suggestions-title">Sugestões para Você</h2>
        <p className="suggestions-subtitle">Produtos selecionados com carinho</p>

        <div className="products-grid">
          {produtos.length > 0 ? (
            produtos.map((product) => (
              <ProductCard
                key={product.idprodutos}
                imageSrc="/images/default_product.png"  // <<< IMAGEM PADRÃO
                category={product.genero}
                title={product.nome}
                rating={120}
                price={`R$ ${product.preco}`}
              />
            ))
          ) : (
            <p>Carregando produtos...</p>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
