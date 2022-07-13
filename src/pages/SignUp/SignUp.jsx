import './SignUp.css'
const SignUp = () => {
    return (
        <div id='signUp-img'>
            <form className="row g-3 mx-auto w-50 border border-5 rounded-3 p-5 m-5">
                <div className="col-md-6">
                    <label htmlFor="inputFirstName4" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="inputFirstName4" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputLastName4" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="inputLastName4" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
          
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Let's be furrriends - signup for news & updates!
                        </label>
                    </div>
                </div>
                <div className="col-12 text-center">
                    <button type="submit" className="btn bg-info text-white">Create Account</button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
