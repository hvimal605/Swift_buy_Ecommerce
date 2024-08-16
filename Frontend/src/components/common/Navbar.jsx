import React, { useState } from 'react';
import { MdExpandMore, MdSunny } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';
import MenuSidebar from './MenuSidebar';
import logo1 from '../../assets/Images/logo1.png';
import logo2 from '../../assets/Images/logo.png';
import CategoryModal from './subcomponents/CategoryModal';
import Search from './subcomponents/Search';
import { useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropdown from './core/ProfileDropdown'; // Ensure this is imported if it's used
import ImageUpload from '../common/core/ImageUpload'; // Import the ImageUpload component
import { LuImagePlus } from "react-icons/lu";

const Navbar = () => {
    const { token, user } = useSelector((state) => state.auth);
    const [darkmode, setDarkmode] = React.useState(false);
    const [showImageUpload, setShowImageUpload] = useState(false);
    const location = useLocation();
    const totalItems = 5; // Replace this with actual logic to get cart items count

    const handleDarkMode = () => {
        setDarkmode(!darkmode);
    };

    return (
        <div>
            <div className='hidden h-14 bg-blue-900 w-screen md:flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16'>
                <div className='flex items-center '>
                <img src={logo2} alt="Logo" className='h-12 w-auto object-contain' />

                 
                   
                </div>
                <div className='flex items-center space-x-6'>
                    <div className='relative group'>
                        <div className='flex items-center gap-1 cursor-pointer text-orange-500 font-semibold'>
                            Categories <MdExpandMore />
                        </div>
                        <div className='absolute top-full z-30 left-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <CategoryModal isOpen={true} onClose={() => { }} />
                        </div>
                    </div>
                    <Link 
                        to='/' 
                        className={`hover:text-blue-500 text-orange-500 font-semibold ${location.pathname === '/' ? ' border-2 p-1 rounded-lg border-dashed border-pink-500' : ''}`}
                    >
                        Home
                    </Link>
                    <Link 
                        to='/about' 
                        className={`hover:text-blue-500 text-orange-500 font-semibold  ${location.pathname === '/about' ? 'border-2 p-1 rounded-lg border-dashed border-pink-500' : ''}`}
                    >
                        About Us
                    </Link>
                    <Link 
                        to='/contact' 
                        className={`hover:text-blue-500 text-orange-500 font-semibold  ${location.pathname === '/contact' ? 'border-2 p-1 rounded-lg border-dashed border-pink-500' : ''}`}
                    >
                        Contact Us
                    </Link>
                </div>
                <div className='  '>
                    <Search />
                   
                </div>
                <button
                        className="bg-pink-300 text-pink-600 border-pink-600 px-4 py-2 rounded"
                        onClick={() => setShowImageUpload(!showImageUpload)}
                    >
                       <LuImagePlus className='text-xl' />
                    </button>
                <div className='flex items-center space-x-4'>
                    <div className='hidden items-center gap-x-4 md:flex'>
                        {user && (
                            <Link to="/dashboard/cart" className="relative">
                                <AiOutlineShoppingCart className="text-2xl text-pink-600" />
                                {totalItems > 0 && (
                                    <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-pink-700 text-center text-xs font-bold text-white">
                                        {totalItems}
                                    </span>
                                )}
                            </Link>
                        )}
                        {token === null && (
                            <Link to="/login">
                                <button className="rounded-md border border-pink-800 bg-pink-200 px-4 py-2 text-pink-600 hover:bg-pink-300 transition-colors duration-300">
                                    Log in
                                </button>
                            </Link>
                        )}
                        {token === null && (
                            <Link to="/signup">
                                <button className="rounded-md border border-pink-800 bg-pink-200 px-4 py-2 text-pink-600 hover:bg-pink-300 transition-colors duration-300">
                                    Sign up
                                </button>
                            </Link>
                        )}
                        {token !== null && <ProfileDropdown />}
                    </div>
                    <button
                        className='border p-1 rounded-xl bg-slate-200'
                        onClick={handleDarkMode}
                        aria-label="Toggle Dark Mode"
                    >
                        {darkmode ? (<MdSunny className="text-xl" />) : (<BsFillMoonStarsFill className="text-xl" />)}
                    </button>
                    {/* Add the button to show the image upload component */}
                    
                </div>
            </div>
            {showImageUpload && <ImageUpload />}
            <MenuSidebar />
        </div>
    );
};

export default Navbar;
