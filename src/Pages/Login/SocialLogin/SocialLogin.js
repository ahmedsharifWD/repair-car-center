import React from 'react';
import google from '../../../images/google.png'
import facebook from '../../../images/facebook.png'
import github from '../../../images/github.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement = <div>
            <p>Error: {error.message}</p>
        </div>
    }

    if (user) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='progress w-50 bg-primary' style={{ height: "1px" }}></div>
                <p className='mt-2 mx-2'>Or</p>
                <div className='progress w-50 bg-primary' style={{ height: "1px" }}></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-dark w-100 d-block mx-auto my-3'>
                    <img style={{ width: '30px' }} className='mx-2' src={google} alt="" />
                    <span>Google Sign In</span>
                </button>

                <button className='btn btn-dark w-100 d-block mx-auto my-3'>
                    <img style={{ width: '30px' }} className='mx-2' src={facebook} alt="" />
                    <span>Facebook Sign In</span>
                </button>
                <button className='btn btn-dark w-100 d-block mx-auto my-3'>
                    <img style={{ width: '30px' }} className='mx-2' src={github} alt="" />
                    <span>GitHub Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;