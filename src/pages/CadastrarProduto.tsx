import React, { useState } from 'react';

const CadastrarProduto = () => {
  const [codigo, setCodigo] = useState('');
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidadeEstoque, setQuantidadeEstoque] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const novoProduto = {
      codigo,
      nome,
      preco: parseFloat(preco),
      quantidadeEstoque: parseInt(quantidadeEstoque),
    };

    try {
      const response = await fetch('http://localhost:8080/produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoProduto)
      });

      if (response.ok) {
        alert('Produto cadastrado com sucesso!');
        // Limpa os campos após sucesso
        setCodigo('');
        setNome('');
        setPreco('');
        setQuantidadeEstoque('');
      } else {
        alert('Erro ao cadastrar produto');
      }
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
      alert('Erro na requisição');
    }
  };

  return (
    <div>
      <h2>Cadastrar Produto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Código"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        /><br />
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        /><br />
        <input
          type="number"
          step="0.01"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        /><br />
        <input
          type="number"
          placeholder="Quantidade em estoque"
          value={quantidadeEstoque}
          onChange={(e) => setQuantidadeEstoque(e.target.value)}
        /><br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastrarProduto;
