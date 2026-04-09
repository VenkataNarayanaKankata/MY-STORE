import { useNavigate } from "react-router-dom";
function ProductCard({ product, onClick,addToCart }) {
   const navigate = useNavigate();
  return (
    <div className="card mb-3 shadow">
      <div className="card-body text-center">
        <h5 className="fw-bold mb-0 text-truncate"
          >ProductName:{product.name}</h5>
        <p className="card-text  text-success fs-5">ProductPrice:₹{product.price}</p>
        <div className="d-flex flex-column gap-2 mt-3">
        <div className="d-flex justify-content-between">
         <button 
          className="btn btn-primary w-50 me-2"
          onClick={() => navigate(`/product/${product.id}`, { state: product })} //sends full product data
        >
          View Details
        </button>
        <button 
          className="btn btn-primary flex-fill"
          onClick={onClick}
        >
         View
        </button>
        </div>
        <div className="d-flex justify-content-between">
         <button
           className="btn btn-sm btn-success w-50 me-2"
          onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
           }}
        >
         Add to Cart
        </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;