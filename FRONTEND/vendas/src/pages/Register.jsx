import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Register.css';

const API_URL = 'http://localhost:5277';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(''); // Inicialize o estado de erro

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Limpa erro anterior

    if (senha !== confirmPassword) {
      setError('As senhas não coincidem!'); 
      return;
    }

    try {
      // ⬅️ CORREÇÃO DE ROTA: Adicione o nome do Controller (Usuarios) à URL
      //http://localhost:5277/api/Usuarios/register
      const response = await fetch(`${API_URL}/api/Usuarios/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, senha }), 
      });

      if (response.ok) {
        console.log('Cadastro bem-sucedido!');
        navigate('/home'); 
      } else {
        // CORREÇÃO CRÍTICA: TRATAMENTO DE ERRO PARA RESPOSTAS VAZIAS/404
        const textError = await response.text();
        
        let errorMessage = `Erro ${response.status}: `;

        try {
          // Tenta ler como JSON (se o backend retornou um erro formatado)
          const errorData = JSON.parse(textError);
          errorMessage += errorData.message || 'Ocorreu um erro desconhecido.';
        } catch {
          // Se não for JSON (ex: 404, HTML, ou corpo vazio)
          if (response.status === 404) {
            errorMessage = '404 - Endpoint não encontrado. Verifique a rota da API (Backend).';
          } else if (textError) {
            errorMessage += textError;
          } else {
            errorMessage = `Erro ${response.status} no servidor.`;
          }
        }
        
        setError(errorMessage);
        console.error('API Error:', errorMessage);
      }
    } catch (err) {
      console.error('Erro de conexão:', err);
      setError('Erro de conexão. Verifique se sua API está rodando em ' + API_URL);
    }
  };

  return (
    <div className="account-container">
      <div className="account-card">
        {/* Ícone e Título */}
        <div className="icon">
          <span role="img" aria-label="shopping-bag">🛍️</span>
        </div>

        <h1 className="title">Criar Conta</h1>
        <p className="subtitle">Cadastre-se para começar suas compras</p>

        {/* ⬅️ Exibe o erro aqui */}
        {error && <p style={{ color: 'red', marginBottom: '15px', fontWeight: 'bold' }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* Campos do Formulário omitidos para brevidade */}
          <div className="form-group">
            <label htmlFor="nome">Nome Completo</label>
            <input
              id="nome"
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="input-field"
              required
            />
          </div>

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

          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="senha"
              placeholder="Mínimo 6 caracteres"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="input-field"
              required
              minLength={6}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Digite a senha novamente"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input-field"
              required
              minLength={6}
            />
          </div>

          {/* Botão Cadastrar */}
          <button type="submit" className="submit-button">
            Cadastrar
          </button>
        </form>

        {/* Link para Login */}
        <div className="link-container">
          <span>Já tem uma conta? </span>
          <Link to="/" className="anchor-link">
            Fazer login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;