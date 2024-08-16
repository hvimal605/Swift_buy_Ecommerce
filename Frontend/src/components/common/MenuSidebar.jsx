import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { MdLogin, MdHome, MdOutlinePermContactCalendar } from 'react-icons/md';
import { RiLoginCircleLine, RiArrowDropDownLine } from 'react-icons/ri';
import { BiSolidBookContent, BiCategory } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import logo from '../../assets/Images/logo.png';
import Search from './subcomponents/Search';
import CategoryModal from './subcomponents/CategoryModal';
import { LuImagePlus } from "react-icons/lu";
import ImageUpload from '../common/core/ImageUpload'; // Import the ImageUpload component
import { useSelector } from 'react-redux'; // Import useSelector
import ProfileDropdown from './core/ProfileDropdown'; // Import ProfileDropdown

const MenuSidebar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [showImageUpload, setShowImageUpload] = useState(false); // State for image upload visibility
    const { token } = useSelector((state) => state.auth); // Get token from Redux state

    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleCategoryOpen = () => {
        setIsCategoryOpen(!isCategoryOpen);
    };

    return (
        <>
            <div className='flex sm:hidden h-[5vh] bg-pink-200 justify-between items-center'>
                <div className='ml-5'>
                    <GiHamburgerMenu className='text-xl' onClick={handleModalOpen} />
                </div>
                <div className='flex justify-center items-center'>
                    <img src={logo} alt="Logo" className='h-8 mr-2 w-auto object-contain' />
                    <Search />
                    <button
                        className="bg-pink-300 ml-1 text-pink-600 border-pink-600 px-4 py-2 rounded"
                        onClick={() => setShowImageUpload(!showImageUpload)}
                    >
                       <LuImagePlus className='text-xl' />
                    </button>
                </div>
            </div>

            {/* Sidebar */}
            <div
                className={`bg-pink-200 sm:hidden fixed top-0 h-full w-[85vw] z-50 transition-all duration-300 ${isModalOpen ? 'left-0' : 'left-[-100%]'}`}
            >
                <div className='flex justify-between'>
                    <div className='w-[90%] items-center justify-center flex mt-16 text-xl'>
                        <div className='flex flex-col items-center gap-6 w-full'> {/* Center items horizontally */}
                            {!token && (
                                <>
                                    <Link to='/signin'>
                                        <div className='flex justify-center items-center gap-4'>
                                            <MdLogin />Login
                                        </div>
                                    </Link>
                                    <Link to='/signup'>
                                        <div className='flex justify-center items-center gap-4'>
                                            <RiLoginCircleLine />Signup
                                        </div>
                                    </Link>
                                </>
                            )}
                            {token && (
                                <div className='flex justify-center w-full'>
                                    <ProfileDropdown /> {/* Center ProfileDropdown */}
                                </div>
                            )}
                            <div className='mt-2 h-1 w-full bg-black rounded'></div>
                            <Link to='/'>
                                <div className='flex justify-center items-center mt-5 gap-4'>
                                    <MdHome />Home
                                </div>
                            </Link>
                            <Link to='/about'>
                                <div className='flex justify-center items-center gap-4'>
                                    <BiSolidBookContent />About
                                </div>
                            </Link>
                            <Link to='/contact'>
                                <div className='flex justify-center items-center gap-4'>
                                    <MdOutlinePermContactCalendar />Contact
                                </div>
                            </Link>
                            <div
                                onClick={handleCategoryOpen}
                                className='flex justify-center items-center gap-4 cursor-pointer'
                            >
                                <BiCategory />Category
                                <RiArrowDropDownLine className={`ml-2 duration-200 text-3xl ${isCategoryOpen ? '' : 'rotate-180'}`} />
                            </div>
                        </div>
                    </div>
                    <div className='m-4'>
                        <IoClose className='text-4xl' onClick={handleModalOpen} />
                    </div>
                </div>
                {isCategoryOpen && (
                    <CategoryModal isOpen={isCategoryOpen} onClose={handleCategoryOpen} />
                )}
            </div>

            {/* Conditionally render the ImageUpload component */}
            {showImageUpload && <ImageUpload />}
        </>
    );
};

export default MenuSidebar;
