import React from 'react';
import { useForm } from 'react-hook-form';
import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { states } from '../../data/state';
import laptopimg from '../assets/Images/laptop-typing.jpg';
import Footer from '../components/common/Footer';

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        reset()
    };

    return (
        <>
        <div className="max-w-4xl mx-auto p-6 md:flex gap-10 border-2  mt-5 rounded-lg  shadow-lg ">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-[60%]" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-span-1">
                    <label className="block mb-1 font-medium" htmlFor="first-name">First Name <span className='text-red-500'>*</span></label>
                    <input className="w-full p-2 border border-gray-300 rounded" id="first-name" type="text" {...register('firstName', { required: true })} />
                </div>
                <div className="col-span-1">
                    <label className="block mb-1 font-medium" htmlFor="last-name">Last Name <span className='text-red-500'>*</span></label>
                    <input className="w-full p-2 border border-gray-300 rounded" id="last-name" type="text" {...register('lastName', { required: true })} />
                </div>
                <div className="col-span-1 md:col-span-2">
                    <label className="block mb-1 font-medium" htmlFor="email">Email Address <span className='text-red-500'>*</span></label>
                    <input className="w-full p-2 border border-gray-300 rounded" id="email" type="email" {...register('email', { required: true })} />
                </div>
                <div className="col-span-1 md:col-span-2">
                    <label className="block mb-1 font-medium" htmlFor="phone">Phone Number (Optional)</label>
                    <input className="w-full p-2 border border-gray-300 rounded" id="phone" type="tel" {...register('phone')} />
                </div>
                <div className="col-span-1 md:col-span-2">
                    <label className="block mb-1 font-medium" htmlFor="country">State<span className='text-red-500'>*</span></label>
                    <select className="w-full p-2 border border-gray-300 rounded mt-4" id="country" {...register('state', { required: true })}>
                        {
                            states.map((ele, id) => (
                                <option key={id} value={ele.name}>
                                    {ele.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-span-1 md:col-span-2">
                    <label className="block mb-1 font-medium" htmlFor="subject">Subject (Optional)</label>
                    <input className="w-full p-2 border border-gray-300 rounded" id="subject" type="text" {...register('subject')} />
                </div>
                <div className="col-span-1 md:col-span-2">
                    <label className="block mb-1 font-medium" htmlFor="message">Message</label>
                    <textarea className="w-full p-2 border border-gray-300 rounded" id="message" rows="4" placeholder="Note about your order, e.g., special note for delivery" {...register('message')}></textarea>
                </div>
                <div className="col-span-1 md:col-span-2 flex items-center">
                    <input type="checkbox" id="subscribe" className="mr-2" {...register('subscribe')} />
                    <label htmlFor="subscribe">I want to receive news and updates once in a while. By submitting, I agree to the <a href="#" className="text-blue-500">Terms & Conditions</a></label>
                </div>
                <div className="col-span-1 md:col-span-2">
                    <button type="submit" className="bg-pink-500 text-white p-2 rounded">Send Message</button>
                </div>
            </form>
            <div className="mt-8 md:w-[50%]">
                <div className="bg-pink-100 p-6 rounded ">
                    <div>
                        <h3 className="font-semibold">Lucknow (Head Quater)</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                        <p>+91234567890</p>
                        <a href="mailto:hello@swiftbuy.com" className="text-orange-500">hello@swift buy.com</a>
                    </div>
                    <div className='mt-6'>
                        <h3 className="font-semibold">Aligarh (Branch)</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>+91348494t5995</p>
                        <a href="mailto:contact@switbuy" className="text-orange-500">contact@swift buy.com</a>
                    </div>
                    <div className="mt-6 flex space-x-4">
                        <FaInstagram className='p-2 bg-white text-4xl rounded-full hover:scale-110 duration-200 hover:bg-yellow-100' />
                        <FaFacebookSquare className='p-2 bg-white text-4xl rounded-full hover:scale-110 duration-200 hover:bg-yellow-100' />
                        <FiYoutube className='p-2 bg-white text-4xl rounded-full hover:scale-110 duration-200 hover:bg-yellow-100' />
                        <FaTwitter className='p-2 bg-white text-4xl rounded-full hover:scale-110 duration-200 hover:bg-yellow-100' />
                    </div>
                </div>
                <div className="mt-4">
                    <img src={laptopimg} alt="" className='rounded' />
                </div>
            </div>
           
        </div>
         <Footer/>
         </>
    );
};

export default Contact;
