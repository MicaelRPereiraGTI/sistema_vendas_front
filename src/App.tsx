import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaProdutos from './pages/ListaProdutos';
import CadastrarProduto from './pages/CadastrarProduto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListaProdutos />} />
        <Route path="/produtos/novo" element={<CadastrarProduto />} />
      </Routes>
    </Router>
  );
}

export default App;