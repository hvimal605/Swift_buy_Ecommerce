import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import signup from '../assets/Images/signup.jpg';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSignupData } from '../slices/authSlice';

import { sendOtp } from "../services/operations/authApi"
import { Link } from 'react-router-dom';



const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    const { firstName, lastName, email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      // You might want to use toast for error messages here
      console.error("Passwords Do Not Match");
      return;
    }

    const signupData = {
      firstName,
      lastName,
      email,
      password,
     confirmPassword
      
    };

    // Setting signup data to state
    dispatch(setSignupData(signupData));
    // Send OTP to user for verification
    dispatch(sendOtp(email, navigate));

    // Reset form
    reset();
  };

  return (
    <div className="flex flex-col md:flex-row h-screen md:h-[90vh]">
      <div className="md:w-1/2">
        <div className="flex items-center justify-center h-full">
          <img src={signup} alt="Illustration" className="w-full md:block h-full object-cover" />
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center p-4 md:p-8">
        <div className="w-full md:w-8/12 mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-orange-400">Swift Buy</h1>
          <h2 className="text-4xl font-bold mb-8">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
            <div className="flex gap-x-4">
              <label className="w-full">
                <p className="mb-1 text-sm leading-tight text-gray-700">
                  First Name <sup className="text-pink-200">*</sup>
                </p>
                <input
                  className="w-full rounded bg-orange-50 border px-3 py-2 text-gray-700"
                  type="text"
                  placeholder="Enter first name"
                  {...register('firstName', { required: true })}
                />
              </label>
              <label className="w-full">
                <p className="mb-1 text-sm leading-tight text-gray-700">
                  Last Name <sup className="text-pink-200">*</sup>
                </p>
                <input
                  className="w-full rounded bg-orange-50 border px-3 py-2 text-gray-700"
                  type="text"
                  placeholder="Enter last name"
                  {...register('lastName', { required: true })}
                />
              </label>
            </div>
            <label className="w-full">
              <p className="mb-1 text-sm leading-tight text-gray-700">
                Email Address <sup className="text-pink-200">*</sup>
              </p>
              <input
                className="w-full rounded bg-orange-50 border px-3 py-2 text-gray-700"
                type="email"
                placeholder="Enter email address"
                {...register('email', { required: true })}
              />
            </label>
            <div className="flex gap-x-4">
              <label className="relative w-full">
                <p className="mb-1 text-sm leading-tight text-gray-700">
                  Create Password <sup className="text-pink-200">*</sup>
                </p>
                <input
                  className="w-full rounded bg-orange-50 border px-3 py-2 pr-10 text-gray-700"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  {...register('password', { required: true })}
                />
                <span
                  onClick={handleShowPassword}
                  className="absolute right-3 top-9 cursor-pointer"
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-xl" />
                  ) : (
                    <FaEye className="text-xl" />
                  )}
                </span>
              </label>
              <label className="relative w-full">
                <p className="mb-1 text-sm leading-tight text-gray-700">
                  Confirm Password <sup className="text-pink-200">*</sup>
                </p>
                <input
                  className="w-full rounded bg-orange-50 border px-3 py-2 pr-10 text-gray-700"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  {...register('confirmPassword', { required: true })}
                />
                <span
                  onClick={handleShowPassword}
                  className="absolute right-3 top-9 cursor-pointer"
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-xl" />
                  ) : (
                    <FaEye className="text-xl" />
                  )}
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-3xl"
            >
              Create Account
            </button>
          </form>
          <p className="text-center text-gray-500 text-xs mt-8">
            Already have an account? <Link to='/login' className="text-orange-400 hover:text-blue-700">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
