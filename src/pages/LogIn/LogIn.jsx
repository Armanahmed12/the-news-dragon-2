import React, { useContext } from 'react';
import { Link, redirect, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const LogIn = () => {

    // user path
    const location = useLocation();
    let from = location.state?.from || "/";
    console.log(location);
    const navigate = useNavigate();

    // auth context data
    const {userLogIn} = useContext(AuthContext);
    const handleUserLogIn = (event) =>{
        
           event.preventDefault();
           const form = event.target;
           const email = form.email.value;
           const password = form.password.value;
           userLogIn(email, password)
           .then(userCredential =>{

                console.log(userCredential.user);
                form.reset();
                ('/');
                navigate(from, {replace : true});

           }).catch(error =>{
               
                console.log(error.message);
           })
    }
    return (
        <div style={{ background: "#00ff9738" }} className='w-50 p-4 mx-auto my-4 shadow-lg bg-gradient rounded'>
            <form onSubmit={handleUserLogIn}>
                <h2 className='text-center py-4 fw-bold'>Login your account</h2>
                <hr className='border-top-2 border-solid border-danger' />
                <div className="Email-Field">
                    <label className="label">
                        <span className="label-text fw-semibold fs-5">Email address</span>
                    </label><br />
                    <input type="email" name='email' placeholder="Enter your email address" className="w-100 mb-3 px-2" required />
                </div>
                <div className="Password-Field">
                    <label className="label">
                        <span className="label-text fw-semibold fs-5" >Password</span>
                    </label><br />
                    <input type="password" name='password' placeholder="Enter your password" className="w-100 px-2" required />
                </div>
                <input className='block w-100 fw-bold text-white bg-dark mt-3 fs-5 border-0 py-2' type="submit" value="LogIn" />
            </form>
            <h5 className='fw-semibold text-center mt-3 mb-0'>Dont’t Have An Account ?<Link to={'/register'} className='text-danger'> Register</Link></h5>
        </div>
    );
};

export default LogIn;