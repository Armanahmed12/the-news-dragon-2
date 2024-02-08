import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div style={{ background: "#00ff9738" }} className='w-50 p-4 mx-auto my-4 shadow-lg bg-gradient rounded'>
            <form>
                <h2 className='text-center py-4 fw-bold'>Register your account</h2>
                <hr className='border-top-2 border-solid border-danger' />
                <div className="Named-Field">
                    <label className="label">
                        <span className="label-text fw-semibold fs-5">Your Name</span>
                    </label><br />
                    <input type="text" placeholder="Enter your name" className="w-100 mb-3 px-2" required />
                </div>
                <div className="Photo-Field">
                    <label className="label">
                        <span className="label-text fw-semibold fs-5">Photo URL</span>
                    </label><br />
                    <input type="url" placeholder="Enter your photo url" className="w-100 mb-3 px-2" required />
                </div>
                <div className="Email-Field">
                    <label className="label">
                        <span className="label-text fw-semibold fs-5">Email address</span>
                    </label><br />
                    <input type="email" placeholder="Enter your email address" className="w-100 mb-3 px-2" required />
                </div>
                <div className="Password-Field">
                    <label className="label">
                        <span className="label-text fw-semibold fs-5" >Password</span>
                    </label><br />
                    <input type="password" placeholder="Enter your password" className="w-100 px-2" required />
                    {/* checkBox */}
                    <div className='d-flex align-items-center mt-2'>
                        <input type="checkbox" style={{ width: '25px', height: "25px" }} id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1" className='fw-semibold text-danger ms-2'> Accept Term & Conditions</label><br />
                    </div>
                </div>
                <input className='block w-100 fw-bold text-white bg-dark mt-4 fs-5 border-0 py-2' type="submit" value="Register" />
            </form>
            <h5 className='fw-semibold text-center mt-3 mb-0'>Already Have An Account ?<Link to={'/logIn'} className='text-danger'>LogIn</Link></h5>
        </div>
    );
};

export default Register;