import { useState } from "react";
import { useNavigate } from "react-router-dom";
import shopping from "../assets/shopping.jpg";
function Login(){
    const[Name,setName]=useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    function handlelogin(e){
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(
        (u) => u.email === email && u.password === password
    );

       if (!user) {
        alert("Invalid credentials ❌");
        return;
    }
            localStorage.setItem("currentUser", JSON.stringify(user));
            alert("Login successful ✅");
            navigate("/home");
  
    }
    function namechange(event){
        console.log(event.target.value);
        setName(event.target.value);
    }
    function emailchange(event){
        console.log(event.target.value);
        setEmail(event.target.value);
    }
    function passwordchange(event){
        console.log(event.target.value)
        setPassword(event.target.value);
    }
    return(
        <div
        className="auth-page d-flex justify-content-center align-items-center"
        style={{
        background: "linear-gradient(to right, #4facfe, #00f2fe)"
         }}
        >
             
                <div className="card shadow-lg p-4" style={{ width: "350px", borderRadius: "20px", background: "#ffffff" }}>
                    <h3 className="text-center mb-4 fw-bold text-primary">Login</h3>
            <form onSubmit={handlelogin}>
                <div className="mb-3">
                    <label className="mb-3">NAME</label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Enter NAME"
                        value={Name}
                        onChange={namechange}
                    />
                </div>
                <div className="mb-3">
                    <label className="mb-3">EMAIL</label>
                    <input
                        type="email"
                        className="form-control mb-3"
                        placeholder="Enter Email"
                        value={email}
                        onChange={emailchange}
                    />
                </div>
                <div className="mb-3">
                    <label className="mb-3">PASSWORD</label>
                    <input
                        type="password"
                        className="form-control mb-3"
                        placeholder="Enter Password"
                        value={password}
                        onChange={passwordchange}
                    />
                </div>
                <button className="btn w-100 rounded-pill fw-semibold"
                 style={{
                    background: "linear-gradient(to right, #667eea, #764ba2)",
                    color: "#fff"
                 }}
                >
                     Login
                </button>

                <p className="text-center mt-3">
                Don't have an account?{" "}
                <span 
                style={{ color: "#007bff", cursor: "pointer", fontWeight: "500"}}
                onClick={() => navigate("/signup")}
                >
                Sign Up
                </span>
                </p>
            </form>
            
            </div>
        </div>
    )
}

export default Login;