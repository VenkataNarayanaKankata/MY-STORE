import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup(){
    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const navigate=useNavigate();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    function handleSignup(e){
        e.preventDefault();
        if(!name||!email||!password){
            alert("please enter details");
            return;
        }
        if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return;
        }
         if (!passwordRegex.test(password)) {
        alert("Password must be strong (8 chars, A-Z, a-z, number, symbol)");
        return;
        }
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = existingUsers.find(
        (u) => u.email.toLowerCase() === email.toLowerCase()
        );
         if (userExists) {
            alert("Account already exists with this email ❌");
            return;
        }
        existingUsers.push({ name,email, password });
        localStorage.setItem("users", JSON.stringify(existingUsers));
        alert("account is created");
        navigate("/login");
    }
    function namechange(event){
        console.log(event.target.value);
        setname(event.target.value);
    }
    function emailchange(event){
        console.log(event.target.value);
        setemail(event.target.value)
    }
    function passwordchange(event){
        console.log(event.target.value);
        setpassword(event.target.value);
    }
    return(
        <div>
             <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="card p-4 shadow" style={{ width: "350px", borderRadius: "20px" }}>
                     <h3 className="text-center mb-4 fw-bold text-success">Create Account</h3>
                    <form onSubmit={handleSignup}>
                        <div className="mb-3">
                    <label className="mb-3">NAME</label>
                    <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="ENTER YOUR NAME"
                    value={name}
                    onChange={namechange}
                    />
                    </div>
                    <div className="mb-3">
                    <label className="mb-3">EMAIL</label>
                    <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="ENTER EMAIL"
                    value={email}
                    onChange={emailchange}
                    />
                    </div>
                    <div className="mb-3">
                    <label className="mb-3">PASSWORD</label>
                    <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="ENTER PASSWORD"
                    value={password}
                    onChange={passwordchange}
                    />
                    </div>
                    <button 
                    className="btn w-100 rounded-pill fw-semibold"
                    style={{
                    background: "linear-gradient(to right, #11998e, #38ef7d)",
                    color: "#fff"
                    }}
                   >
                    Sign Up
                    </button>
                    <p className="text-center mt-3">
                    Already have an account?{" "}
                    <span 
                    style={{ color: "#007bff", cursor: "pointer" }}
                    onClick={() => navigate("/login")}
                    >
                     Login
                    </span>
                     </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Signup;