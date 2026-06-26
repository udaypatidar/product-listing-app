import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

export default function Home({ products }) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [filtered, setFiltered] = useState(products);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setFiltered(
        products.filter((p) =>
          p.title.toLowerCase().includes(query.toLowerCase())
        )
      );
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">🛍️ Product Listing</h1>

      {/* Search Bar */}
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Spinner */}
      {loading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  return {
    props: { products },
  };
}
