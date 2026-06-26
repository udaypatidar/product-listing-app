import Link from 'next/link';

export default function ProductDetail({ product }) {
  return (
    <div className="container mt-5">
      <Link href="/" className="btn btn-secondary mb-4">
        ← Back to Products
      </Link>
      <div className="row">
        <div className="col-md-4 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid p-3"
            style={{ maxHeight: '350px', objectFit: 'contain' }}
          />
        </div>
        <div className="col-md-8">
          <h2>{product.title}</h2>
          <p className="text-muted text-capitalize">{product.category}</p>
          <h4 className="text-success">${product.price}</h4>
          <p>
            ⭐ {product.rating?.rate} — {product.rating?.count} reviews
          </p>
          <hr />
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();
  return {
    props: { product },
  };
}
