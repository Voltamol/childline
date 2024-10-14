import React, { useState } from 'react';
import '../../sign-in.css';
import logo from '../../childline-logo.png';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure to install axios

const FormTitle = (props) => {
    return <h1 className="h3 mb-3 fw-normal text-center">{props.title}</h1>
}

const RememberMe = () => {
    return (
        <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
            </label>
        </div>
    );
}

const NamePassword = (props) => {
    const setUsername= props.setUsername;
    const setPassword= props.setPassword;
    return (
        <>
            {props.children}
            <div className="form-floating">
                <input type="text" className={props.newHere ? "form-control rounded-0" : "form-control rounded-bottom-0"} id="floatingInput" placeholder="name/alias" onChange={(e)=>{setUsername(e.target.value)}} />
                <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
                <label htmlFor="floatingPassword">Password</label>
            </div>
        </>
    );
}

const LoginForm = (props) => {
    const setUsername= props.setUsername;
    const setPassword= props.setPassword;
    return (
        <form onSubmit={props.onSubmit}>
            <img className="mb-4 img-fluid" src={logo} alt="" />
            {props.children[0]}
            {props.newHere ? <NamePassword newHere={true} setUsername={setUsername} setPassword={setPassword}>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email</label>
                </div>
            </NamePassword> : <NamePassword setUsername={setUsername} setPassword={setPassword} />}
            <RememberMe />
            {props.children[1]}
            {props.children[2]}
            <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
        </form>
    );
}

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Use useNavigate
    const handleSubmit = async (event) => {
        event.preventDefault();

        const loginData = {
            username: username,
            password: password,
        };

        try {
            const response = await axios.post('http://localhost:8000/login/', loginData); // Adjust the URL as needed
            alert('Login successful:');
            navigate('/blog-edits');
            // Handle successful login here (e.g., redirect, store tokens, etc.)
        } catch (error) {
            alert('Login failed:');
            // Handle login error (e.g., show a message to the user)
        }
    };

    return (
        <main className="form-signin w-100 m-auto mt-5">
            <LoginForm onSubmit={handleSubmit} setUsername={setUsername} setPassword={setPassword}>
                <FormTitle title="Please Login" />
                <button className="btn btn-dark w-100 py-2" type="submit">Login</button>
                <Link to='/signup' className='text-dark'>New here? Signup</Link>
            </LoginForm>
        </main>
    );
}

const Signup = (props) => {
    return (
        <main className="form-signin w-100 m-auto mt-5">
            <LoginForm newHere={true}>
                <FormTitle title="Please Sign Up" />
                <button className="btn btn-dark w-100 py-2" type="submit">Signup</button>
                <Link to='/login' className='text-dark'>Already a member? Login</Link>
            </LoginForm>
        </main>
    );
}

export { Login, Signup };