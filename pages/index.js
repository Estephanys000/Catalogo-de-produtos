import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  return (
    <div className="container">
      <h1>Catálogo de Produtos</h1>
      <Link href="/novo-produto">
        <button>Adicionar Produto</button>
      </Link>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - R$ {product.price.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
}

