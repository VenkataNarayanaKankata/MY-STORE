import { useLocation, useNavigate } from "react-router-dom";
function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state; //Receive data in ProductDetails.jsx
    if (!product) {
    return <h2>No product data</h2>; //Prevents crash
  }

  return (
    <div className="card p-4 shadow">

      <h2>{product.name}</h2>
      <h4 className="text-success">₹{product.price}</h4>
       <p className="text-muted">
      This is a high-quality product available at the best price.
    </p>


      <button 
        className="btn btn-secondary mt-3"
        onClick={() => navigate("/home")}
      >
        Back
      </button>

    </div>
  );
}

export default ProductDetails;