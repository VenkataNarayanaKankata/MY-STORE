import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Productlistheader({currentUser, cart, setShowCart}){
     const [showDropdown,setShowDeopdown]=useState(false);
      const navigate=useNavigate();
      function handlelogout(){
    localStorage.removeItem("currentUser");
    navigate("/login");
  }

    return(
        <div className="d-flex justify-content-between align-items-center mb-4">
       <h2 className="fw-bold text-primary">🛍️ My Store</h2>
        <div className="d-flex align-items-center gap-3 position-relative">
          <span className="fw-semibold text-dark">
          👤WELCOME, {currentUser?.name}
          </span>
           <button
          className="btn btn-outline-dark"
          onClick={() => setShowDeopdown(!showDropdown)}
           >
          ⏷
          </button>
          {showDropdown && (
      <div
        className="card position-absolute p-2 shadow"
        style={{
          top: "50px",
          right: "0",
          width: "150px",
          zIndex: 1000
        }}
      >
        <button 
        className="btn btn-danger"
        onClick={handlelogout}
        >
        Logout
        </button>
        </div>
          )}
        <button 
          className="btn btn-warning position-relative"
          onClick={() => setShowCart(prev => !prev)}
        >
        🛒 Cart
        <span className="position-absolute top-0 start-100 translate-middle badge bg-danger">
        {cart.length}
        </span>
        </button>
      </div>
    </div>
    )
}
export default Productlistheader;