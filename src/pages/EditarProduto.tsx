import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type Produto = {
  id: number;
  codigo: string;
  nome: string;
  preco: number;
  quantidadeEstoque: number;
};

export default function EditarProduto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [produto, setProduto] = useState<Produto>({
    id: 0,
    codigo: '',
    nome: '',
    preco: 0,
    quantidadeEstoque: 0,
  });

  useEffect(() => {
    fetch(`http://localhost:8080/produtos/${id}`)
      .then(res => res.json())
      .then(data => setProduto(data)) 
      .catch(() => alert('Erro ao carregar o produto'));
  }, [id]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setProduto(prev => ({
    ...prev,
    [name]: ['preco', 'quantidadeEstoque', 'id'].includes(name) ? Number(value) : value
  }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    fetch(`http://localhost:8080/produtos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(produto),
    })
      .then(() => {
        alert('Produto atualizado com sucesso!');
        navigate('/');
      })
      .catch(() => alert('Erro ao atualizar produto'));
  }

  return (
    <div>
      <h2>Editar Produto</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Código: </label>
        <input type="text" name="codigo" value={produto.codigo} onChange={handleChange} placeholder="Codigo" />
        <label htmlFor="nome">Nome: </label>
        <input type="text" name="nome" value={produto.nome} onChange={handleChange} placeholder="Nome" />
        <label htmlFor="nome">Preço: </label>
        <input type="number" name="preco" value={produto.preco} onChange={handleChange} placeholder="Preço" />
        <label htmlFor="nome">Qtd Estoque: </label>
        <input type="number" name="quantidadeEstoque" value={produto.quantidadeEstoque} onChange={handleChange} placeholder="Estoque" />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
