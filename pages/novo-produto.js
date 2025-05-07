import { useState } from 'react';
import { useRouter } from 'next/router';

export default function NovoProduto() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, price: parseFloat(price) };
    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
    existingProducts.push(newProduct);
    localStorage.setItem('products', JSON.stringify(existingProducts));
    router.push('/');
  };

  return (
    <div className="container">
      <h1>Adicionar Novo Produto</h1>
      <form onSubmit={handleSubmit}>
        <label>Nome do Produto:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Preço do Produto:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
