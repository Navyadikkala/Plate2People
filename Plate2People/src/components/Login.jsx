
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import login_bg from '../images/login_bg.png';

function Login({ setIsLoggedIn}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
      
    
        if (email === "") {
        
          isValid = false;
        }
    
        if (password === "") {
         
          isValid = false;
        }
    
      
        if(isValid){
            
            axios.post('http://localhost:3001/', { email, password })
                .then(result => {
                    if (result.data === "Success") {
                        navigate('/');
                        setIsLoggedIn(true);
                    }
                })
            .catch(err => console.log(err));
        }
        else{
            alert("Enter Valid Details")
        }

        }
      

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-cover" style={{ backgroundImage: `url(${login_bg})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* relative bg-white p-6 rounded-lg shadow-lg w-full  */}
            <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            className="form-input mt-1 block w-full rounded border-gray-300"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
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
                    <button type="submit" className="bg-rosepink text-white w-full rounded py-2 hover:bg-gray-600">
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Don't have an account?
                </p>
                <Link to="/signup" className="bg-rosepink border w-full text-white rounded py-2 block text-center mt-2 hover:bg-gray-500">
                    Signup
                </Link>
            </div>
        </div>
    );
}

export default Login;
