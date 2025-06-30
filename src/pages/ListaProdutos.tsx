import React, { useEffect, useState } from 'react';

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  interface Produto {
  id: number;
  nome: string;
  preco: number;
}

  useEffect(() => {
    fetch('http://localhost:8080/produtos')
      .then(response => response.json())
      .then(data => setProdutos(data))
      .catch(error => console.error('Erro ao buscar produtos:', error));
  }, []);

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {produtos.map(produto => (
          <li key={produto.id}>
            {produto.nome} - R$ {produto.preco}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaProdutos;
