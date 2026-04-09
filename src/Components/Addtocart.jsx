function Addtocart({cart, increaseQty, decreaseQty, removeFromCart}){
return(
  <div className="card shadow-sm p-3 mb-4">
    <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold mb-0">🛒 Cart Items</h5>
      </div>
    {cart.length ===0 ?(
      <p className="text-muted text-center">No items in cart</p>
    ):(
   cart.map((item, index) => (
  <div
    key={index}
    className="d-flex justify-content-between align-items-center border rounded p-2 mb-2"
  >
     <div style={{ flex: 2, minWidth: "150px" }}>
    <span className="fw-medium text-truncate d-block">
      {item.name}
    </span>
    </div>
     <div className="d-flex align-items-center gap-2" style={{ flex: 1 }}>
        <button
        className="btn btn-sm btn-secondary"
        onClick={() => decreaseQty(item.id)}
        >
        -
        </button>
        <span>{item.qty}</span>
        <button
        className="btn btn-sm btn-success"
        onClick={() => increaseQty(item.id)}
        >
        +
        </button>

    </div>

    <span className="text-success fw-bold">
      ₹{item.price}
    </span>
    <div style={{ flex: 1 }} className="text-end">
    <button
      className="btn btn-sm btn-danger"
      onClick={() => removeFromCart(item.id)}
    >
      Remove
    </button>
    </div>
  </div>
)))}
        </div>
    )
}
export default Addtocart;