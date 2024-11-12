

import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Navigate } from "react-router-dom";
import login_bg from '../images/login_bg.png';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  

    const handleSubmit = (e) => {

    let isValid = true;
    

    if (name === "") {
   
      isValid = false;
    }

    if (email === "") {
   
      isValid = false;
    }

    if (password === "") {
       
      isValid = false;
    }

   
    if (isValid) {
        e.preventDefault();
        axios.post('http://localhost:3001/signup', { name, email, password })
            .then(result => console.log(result))
            .catch(err => console.log(err));
        alert('Signup successful');
        Navigate('/login')
    }
    else{
        alert("Enter Valid Details")
    }
        
    }

    return (
        <div className="relative flex justify-center items-center min-h-screen bg-cover" style={{ backgroundImage: `url(${login_bg})` }}>
          
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-semibold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-input mt-1 block w-full rounded border-gray-300"
                            onChange={(e) => setName(e.target.value)}
                        />
                        
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-semibold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-input mt-1 block w-full rounded border-gray-300"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-semibold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-input mt-1 block w-full rounded border-gray-300"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="w-full py-2 bg-rosepink text-white font-semibold rounded-lg shadow-md hover:bg-gray-500">
                        Register
                    </button>
                </form>
                <p className="mt-4 text-center">Already Have an Account?</p>
                <Link to="/login" className="block w-full py-2 mt-2 bg-rosepink text-white font-semibold rounded-lg shadow-md text-center hover:bg-gray-500">
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Signup;
