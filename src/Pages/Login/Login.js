import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className='h-[800px] flex justify-center items-center border  shadow'>
            <div className='w-96 p-7'>
                <h1 className=' text-center text-xl'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input {...register("email")} type="email" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input {...register("password")} type="Password" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Forgot Password ?</span>
                        </label>
                    </div>

                    <input type="submit" value={'LOGIN'} className=" btn btn-accent w-full" />
                </form>
                <p>New to Doctors Portal?  <Link className='text-secondary' to={'/signup'}>Create new account</Link></p>
                <div className="divider">OR</div>
                <button className='w-full btn btn-outline'>CONTINUE WITH GOOGLE</button>
            </div>

        </div>
    );
};

export default Login;