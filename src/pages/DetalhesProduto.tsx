import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Produto {
  id: number;
  codigo: string;
  nome: string;
  preco: number;
  quantidadeEstoque: number;
}

export default function DetalhesProduto() {
  const { id } = useParams();
  const [produto, setProduto] = useState<Produto | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8080/produtos/${id}`)
      .then(res => res.json())
      .then(data => setProduto(data))
      .catch(() => alert('Erro ao carregar produto'));
  }, [id]);

  if (!produto) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Detalhes do Produto</h2>
      <p><strong>ID:</strong> {produto.id}</p>
      <p><strong>Código:</strong> {produto.codigo}</p>
      <p><strong>Nome:</strong> {produto.nome}</p>
      <p><strong>Preço:</strong> R$ {produto.preco}</p>
      <p><strong>Estoque:</strong> {produto.quantidadeEstoque} unidades</p>

      <Link to="/">Voltar para a lista</Link>
    </div>
  );
}
