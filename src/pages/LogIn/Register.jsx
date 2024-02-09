import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

    // navigation
    const navigate = useNavigate();

    const {createNewUser} = useContext(AuthContext);
    
     // Make sure whether the terms &  conditions are accepted or not. if these are not accepted, then don't create a new user.
     const submitBtnRef = useRef("submitBtn");
     const [isDisabled, setIsDisabled] = useState(true);
     useEffect(()=>{
        if(isDisabled){

            submitBtnRef.current.setAttribute('style', 'opacity : 0.5');

        }else{
           console.log("Not disabled");
           submitBtnRef.current.removeAttribute('style');
        }
       
     },[isDisabled]);
   
    // Create a new account
    const handleCratingUser = (event) =>{
               
            event.preventDefault();
            const form = event.target;
            const name = form.text.value;
            const photoUrl = form.photoUrl.value;
            const email = form.email.value;
            const password = form.password.value;
            
          createNewUser(email, password)
            .then((result) =>{

                 console.log(result.user);
                 form.reset();
                 navigate('/');
                

            }).catch(error =>{

                console.log(error.message);
                
            })  

    }
    // alert('Please accept the terms and conditions.')
    return (
        <div style={{ background: "#00ff9738" }} className='w-50 p-4 mx-auto my-4 shadow-lg bg-gradient rounded'>
            <form onSubmit={handleCratingUser}>
                <h2 className='text-center py-4 fw-bold'>Register your account</h2>
                <hr className='border-top-2 border-solid border-danger' />
                <div className="Named-Field">
                    <label className="label">
                        <span className="label-text fw-semibold fs-5">Your Name</span>
                    </label><br />
                    <input type="text" name='text' placeholder="Enter your name" className="w-100 mb-3 px-2" autoComplete='on' required />
                </div>
                <div className="Photo-Field">
                    <label className="label">
                        <span className="label-text fw-semibold fs-5">Photo URL</span>
                    </label><br />
                    <input type="url" name='photoUrl' placeholder="Enter your photo url" className="w-100 mb-3 px-2" autoComplete='on' required />
                </div>
                <div className="Email-Field">
                    <label className="label">
                        <span className="label-text fw-semibold fs-5">Email address</span>
                    </label><br />
                    <input type="email" name='email' placeholder="Enter your email address" className="w-100 mb-3 px-2" autoComplete='on' required />
                </div>
                <div className="Password-Field">
                    <label className="label">
                        <span className="label-text fw-semibold fs-5" >Password</span>
                    </label><br />
                    <input type="password" name='password' placeholder="Enter your password" className="w-100 px-2" autoComplete='on' required />
                             {/* checkBox */}
                    <div className='d-flex align-items-center mt-2'>
                        <input type="checkbox" onClick={()=>setIsDisabled(!isDisabled)} style={{ width: '25px', height: "25px" }} id="checkbox" name="checkbox" value="Bike" />
                        <label htmlFor="checkbox" className='fw-semibold text-danger ms-2'> Accept Term & Conditions</label><br />
                    </div>
                </div>
                <input className="block bg-dark w-100 fw-bold text-white  mt-4 fs-5 border-0 py-2"  type="submit" value="Register" ref={submitBtnRef} disabled={isDisabled?true:false}/>
            </form>
            <h5 className='fw-semibold text-center mt-3 mb-0 '>Already Have An Account ?<Link to={'/logIn'} className='text-danger'>LogIn</Link></h5>
        </div>
    );
};

export default Register;