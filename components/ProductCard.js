import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={product.image}
          className="card-img-top p-3"
          alt={product.title}
          style={{ height: '200px', objectFit: 'contain' }}
        />
        <div className="card-body d-flex flex-column">
          <h6 className="card-title">{product.title}</h6>
          <p className="text-muted small">{product.category}</p>
          <p className="fw-bold">${product.price}</p>
          <p className="small">
            ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
          </p>
          <Link
            href={`/product/${product.id}`}
            className="btn btn-primary mt-auto"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
