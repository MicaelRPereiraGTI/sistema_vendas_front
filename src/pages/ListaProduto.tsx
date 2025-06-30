import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ListaProdutos() {
	const [produtos, setProdutos] = useState<Produto[]>([]);

	interface Produto {
	id: number;
	codigo: string;
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
            {produto.codigo} - {produto.nome} - R$ {produto.preco.toFixed(2)}
            {' '}
            <Link to={`/produtos/editar/${produto.id}`}>
              <button>Editar</button>
            </Link>
          </li>
        ))}
      </ul>
	</div>
	);
}

export default ListaProdutos;
