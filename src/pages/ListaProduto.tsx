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

	function handleDelete(id: number) {
		const confirmacao = window.confirm('Tem certeza que deseja excluir este produto?');
		if (!confirmacao) return;

		fetch(`http://localhost:8080/produtos/${id}`, {
			method: 'DELETE',
		})
			.then(() => {
			alert('Produto excluído com sucesso!');
			// Atualiza a lista removendo o produto excluído
			setProdutos(produtos.filter(p => p.id !== id));
			})
			.catch(() => alert('Erro ao excluir produto.'));
		}

	return (
		<div>
			<h1>Lista de Produtos</h1>
			<ul>
        {produtos.map(produto => (
			<li key={produto.id}>
			{produto.codigo} - {produto.nome} - R$ {produto.preco}
			<button onClick={() => handleDelete(produto.id)} style={{ marginLeft: '10px', color: 'red' }}>
				Excluir
			</button>
			</li>
        ))}
      </ul>
	</div>
	);
}

export default ListaProdutos;
