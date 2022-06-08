import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './login.css';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
 
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();
 
    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            });
            history.push("/dashboard");
        } catch (error) {
            return setMsg("Invalid login");
        }
    }
        return (
            <section id="loginform">
                <h2 id="headerTitle">Login </h2>
                <form onSubmit={Auth}>
                <div class="row">
                    <label>Email</label>
                    <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="row">
                    <label>Password</label>
                    <input type="password" className="input" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div id="button" class="row">
                    <button onSubmit={Auth}>Login</button>
                </div>
                <p className="isa_error">{msg}</p>
                </form>
                <li className="noaccount"><NavLink tag={Link} to="/register">Dont have an account? Create one</NavLink></li>
            </section>
        )
}
 
export default Login