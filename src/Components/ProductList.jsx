import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import Modal from "./Modal";
import Productlistheader from "./Productlistheader";
import Addtocart from "./Addtocart";

function ProductList() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [pname,setname]=useState("");
  const [pprice,setprice]=useState("");
  const [pimage, setPimage] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
   const [showCart, setShowCart] = useState(false);
  const navigate=useNavigate();
  function pnamechange(event){
    console.log(event.target.value);
    setname(event.target.value);
  }
  function ppricechange(event){
    console.log(event.target.value);
    setprice(event.target.value);
  }
  function pimagechange(event){
    console.log(event.target.value);
    setPimage(event.target.value);
  }
  const userKey = `products_${currentUser?.email}`;
  const [products, setproduct] = useState(
  JSON.parse(localStorage.getItem(userKey)) || []
);
  function addproduct(){
     if (!pname || !pprice) {
    alert("Please enter product details");
    return;
  }
    const newProduct={
      id: Date.now(),
      name: pname,
      price: pprice,
    image: pimage ||""
    }
    const updateproduct=[...products,newProduct]

    setproduct(updateproduct);
    localStorage.setItem(userKey, JSON.stringify(updateproduct));
    setname("");
    setprice("");
    setPimage("")
  }
  function addToCart(product) {
   const existing = cart.find(item => item.id === product.id);

  if (existing) {
    setCart(
      cart.map(item =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  } else {
    setCart([...cart, { ...product, qty: 1 }]);
  }
}
 function increaseQty(id) {
  setCart(
    cart.map(item =>
      item.id === id
        ? { ...item, qty: item.qty + 1 }
        : item
    )
  );
}
function decreaseQty(id) {
  setCart(
    cart
      .map(item =>
        item.id === id
          ? { ...item, qty: item.qty - 1 }
          : item
      )
      .filter(item => item.qty > 0) // remove if 0
  );
}
      function removeFromCart(id) {
  setCart(cart.filter(item => item.id !== id));
}   
  

  return (
    <div>
    <Productlistheader
    currentUser={currentUser}
    cart={cart}
    setShowCart={setShowCart}
    />
    
   <div className="row g-3">
    <div className="card p-3 mb-4 shadow-sm">
       <h5 className="mb-3">Add New Product</h5>
    <label>ProductName:</label>
    <input
    type="text" 
    name="pname"
    value={pname}
    className="form-control mb-2"
    placeholder="enter product name"
    onChange={pnamechange}
    />
    <label>ProductPrice:</label>
    <input
    type="text" 
    name="pprice"
    value={pprice}
    className="form-control mb-2"
    placeholder="enter product price"
    onChange={ppricechange}
    />
    <label>Product Image URL:</label>
    <input
    type="text"
    className="form-control mb-2"
    placeholder="Enter image URL"
    value={pimage}
    onChange={pimagechange}
    />
    <button className="btn btn-success mb-3" onClick={addproduct}>
    Add Product
    </button>
    </div>
    <label>SEARCH:</label>
    <input
    type="text"
    className="form-control form-control-lg mb-4 shadow-sm"
    placeholder="Search product..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    />
      {products
      .filter((item) =>
      item?.name?.toLowerCase().includes(search.toLowerCase())
      )
      .map((item) => (
         <div className="col-md-4" key={item.id}>
          <ProductCard
       product={item}
       onClick={() => setSelectedProduct(item)}
       addToCart={addToCart}
      />
       </div>
       ))
      }
      {showCart && (
      <Addtocart
      cart={cart}
      removeFromCart={removeFromCart}
      increaseQty={increaseQty}
      decreaseQty={decreaseQty}
    />
    )}
  

      {selectedProduct && (
        <Modal 
          product={selectedProduct}
          closeModal={() => setSelectedProduct(null)}
        />
      )}
    </div>
    </div>
  );
}

export default ProductList;