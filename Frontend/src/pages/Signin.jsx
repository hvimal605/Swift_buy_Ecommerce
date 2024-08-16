import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services/operations/authApi';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import signinImg from '../assets/Images/signinImg.jpg';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    dispatch(login(data.email, data.password, navigate));
    reset();
  };

  return (
    <div className="flex flex-col md:flex-row h-screen md:h-[90vh]">
      <div className="md:w-1/2">
        <div className="flex items-center justify-center h-full">
          <img src={signinImg} alt="Illustration" className="w-full md:block h-full object-cover" />
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center p-4 md:p-8">
        <div className="w-full md:w-8/12 mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-orange-400">Swift Buy</h1>
          <h2 className="text-xl font-semibold mb-2">Welcome back !!</h2>
          <h2 className="text-4xl font-bold mb-8">Sign in</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email <sup className="text-pink-200">*</sup>
              </label>
              <input
                className="bg-orange-50 focus:outline appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register('email', { required: true })}
              />
            </div>
            <div className="relative mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password <sup className="text-pink-200">*</sup>
                <div className='absolute top-9 right-4 cursor-pointer' onClick={handleShowPassword}>
                  {showPassword ? <FaEye className='text-xl' /> : <FaEyeSlash className='text-xl' />}
                </div>
              </label>
              <input
                className="bg-orange-50 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline focus:shadow-outline"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...register('password', { required: true })}
              />
              <Link to="/forgot-password">
                <p className="text-sm text-right text-blue-500 hover:text-blue-700 cursor-pointer">
                  Forgot Password?
                </p>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs mt-8">
            I don't have an account?<Link to='/signuop' className="text-orange-400 hover:text-blue-700">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
