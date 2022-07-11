import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../utilities/users-service'
import './Login.css'

const Login = ({ setUser }) => {
    const [message, setMessage] = useState("Hey Pet Lover - Welcome Back!")
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
            setMessage('Log In Failed - Try Again!')
        }
    }

    return (
        <div id='login-img'>
            <form className='mx-auto w-50 border p-5 m-5' onSubmit={handleSubmit}>
                <div className="mb-3">
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
                <div className="mb-3">
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
                            <input className="form-check-input" type="checkbox" value="" id="form2Example34" checked />
                            <label className="form-check-label" for="form2Example34"> Remember me </label>
                        </div>
                    </div>

                    <div className="col">

                        <a href="#!">Forgot password?</a>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Sign In</button>
                <br />
                <br />
                <div className="text-center">
                    <p>Not a member? <a href="/signup">Register Now!</a></p>
                </div>

            </form>
        </div>

    );
}

export default Login;