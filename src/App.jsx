import { Routes, Route } from "react-router-dom";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/Productdetails";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/home" element={
          <div className="container py-4"><ProductList /></div>} 
        />
        <Route path="/product/:id" element={
          <div className="container py-4"><ProductDetails/> </div>} 
        />
      </Routes>
     
    </div>
  );
}

export default App;