import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const API_URL = "http://localhost:5277/api/Usuarios";

const LoginPage = () => {
  // 1. INICIALIZAÇÃO DE ESTADOS E HOOKS DENTRO DO COMPONENTE
  const navigate = useNavigate(); // ⬅️ CORREÇÃO 1: Inicialize o hook useNavigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // ⬅️ CORREÇÃO 2: Inicialize o estado de erro

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // ⬅️ CORREÇÃO 3: Remova 'nome' e envie apenas 'email' e 'password'
        body: JSON.stringify({ email, password }), 
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login bem-sucedido! Dados:', data);

        navigate('/home'); // ⬅️ CORREÇÃO 1: Chame 'navigate' com 'n' minúsculo
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Erro no login. Tente novamente.');
      }
    } catch (err) {
      console.error('Erro de conexão:', err);
      setError('Erro de conexão. Tente novamente mais tarde.');
    }
  };

  return (
    <div className="account-container">
      <div className="account-card">
        {/* Ícone */}
        <div className="icon">
          <span role="img" aria-label="shopping-bag">🛍️</span>
        </div>

        <h1 className="title">Bem-vindo de volta</h1>
        <p className="subtitle">Entre com suas credenciais para continuar</p>
        
        {/* ⬅️ NOVO: Exibe o erro aqui */}
        {error && <p style={{ color: 'red', marginBottom: '15px' }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* Campo Email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
          </div>

          {/* Campo Senha */}
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
          </div>

          {/* Botão Entrar */}
          <button type="submit" className="submit-button">
            Entrar
          </button>
        </form>

        {/* Link para Cadastrar */}
        <div className="link-container">
          <span>Não tem uma conta? </span>
          <Link to="/register" className="anchor-link">
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;