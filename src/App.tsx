import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaProdutos from './pages/ListaProduto';
import CadastrarProduto from './pages/CadastrarProduto';
import EditarProduto from './pages/EditarProduto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListaProdutos />} />
        <Route path="/produtos" element={<ListaProdutos />} />
        <Route path="/produtos/novo" element={<CadastrarProduto />} />
        <Route path="/produtos/editar/:id" element={<EditarProduto />} />
      </Routes>
    </Router>
  );
}

export default App;