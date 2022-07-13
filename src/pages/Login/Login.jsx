import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../utilities/users-service'
import './Login.css'

const Login = ({ setUser }) => {
    const [message, setMessage] = useState("Hey Furrriend - Welcome Back!")
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const handleChange = e => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const handleSubmit = async e => {
        // Prevents form from being submitted to the server
        e.preventDefault()
        try {
            const user = await login(credentials)
            // Once we get our user back, update our App.js user state with the user's firstname
            console.log(user)
            if (user) {
                setUser(user)
                // Redirect to pets page after successful login
                navigate('/pets')
            } else {
                throw new Error()
            }
        } catch (e) {
            setMessage('Log In Unsuccessful - Try Again Furrriend!')
        }
    }
    return (
        <div id='login-img'>
            <form className='mx-auto w-50 border border-5 rounded-3 p-5 m-5' onSubmit={handleSubmit}>
                <div className="mb-3 col-md-6 m-auto" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        name='email'
                        onChange={handleChange}
                        value={credentials.email}
                    />
                    <div id="emailHelp" className="form-text">{message}</div>
                </div>
                <div className="mb-3 col-md-6 m-auto">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name='password'
                        onChange={handleChange}
                        value={credentials.password}
                    />
                </div>
                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck">
                                Remember Me
                            </label>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn col-2 bg-info text-white">Sign In</button>
                </div>
                <br />
                <div className="col text-center">
                    <a href="#!" className="link-light">Forgot Password?</a>
                </div>
                <div className="text-center">
                    <p>Not a Member? <a href="/signup" className="link-light">Join Now!</a></p>
                </div>
            </form>
        </div>
    );
}

export default Login;