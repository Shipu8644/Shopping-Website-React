import React from 'react';
import { useForm } from "react-hook-form";
import './Login.css'
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    // console.log(watch("example"));
    return (
        <div>
            <h1 className="logheader">Login</h1>
            <span><i className="fas fa-sign-in-alt"></i></span>
            <div >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Enter your email" className='input-form'  {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input placeholder="Enter your password " className='input-form' {...register("password", { required: true })} />
                    {errors.password && <span className="error">This field is required</span>}

                    <button type='submit'>Login</button>

                    <div className='logo'>
                        <span><i className="fab fa-google"></i></span>
                        <span><i className="fab fa-github"></i></span>
                        <span><i className="fab fa-facebook-square"></i></span>
                    </div>



                </form>
            </div>

        </div>
    );
};

export default Login;