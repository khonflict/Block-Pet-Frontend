import { useState } from 'react';
import { signUp } from '../../utilities/users-service'
import { useNavigate } from 'react-router-dom';
import './SignUp.css'

const SignUp = ({ setUser}) => {
    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repassword: ''
    });

    const navigate = useNavigate()

    const handleChange = e => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const user = await signUp(newUser)
            // console.log(user)
            setUser(user)
            if(user) navigate('/pets')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div id='signUp-img'>
            <form className="row g-3 mx-auto w-50 border border-5 rounded-3 p-5 m-5" onSubmit={handleSubmit}>
                
                <div className="col-md-6">
                    <label 
                        htmlFor="inputFirstName" 
                        className="form-label">First Name
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputFirstName"
                        name="firstName"
                        value={newUser.firstName}
                        onChange={handleChange}
                        required 
                    />
                </div>

                <div className="col-md-6">
                    <label 
                        htmlFor="inputLastName" 
                        className="form-label">Last Name
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputLastName" 
                        name="lastName"
                        value={newUser.lastName}
                        onChange={handleChange}
                        required 
                    />
                </div>

                <div className="col-md-6">
                    <label 
                        htmlFor="inputEmail" 
                        className="form-label">Email
                    </label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="inputEmail" 
                        name="email"
                        value={newUser.email}
                        onChange={handleChange}
                        required 
                />
                </div>

                <div className="col-md-3">
                    <label 
                        htmlFor="inputPassword" 
                        className="form-label">Password
                    </label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="inputPassword" 
                        name="password"
                        value={newUser.password}
                        onChange={handleChange}
                        required 
                    />
                </div>

                <div className="col-md-3">
                    <label 
                        htmlFor="inputRepassword" 
                        className="form-label">Re-type Password
                    </label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="inputRepassword" 
                        name="repassword"
                        value={newUser.repassword}
                        onChange={handleChange}
                        required 
                    />
                </div>
          
                <div className="col-12">
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="gridCheck" 
                        />
                        <label 
                            className="form-check-label" 
                            htmlFor="gridCheck">
                            Let's be furrriends - signup for news & updates!
                        </label>
                    </div>
                </div>
                <div className="col-12 text-center">
                    <button 
                        type="submit" 
                        className="btn bg-info text-white">Create Account
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
