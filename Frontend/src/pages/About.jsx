// src/MarketingBanner.js

import React from 'react';
import bg from '../assets/Images/bg.png'
import Footer from '../components/common/Footer';


const About = () => {
  return (
    <div>
      <div className="bg-white mt-5  ">
        <div className="container mx-auto px-4">
          <div className=" border-2 bg-gray-100 rounded-lg shadow-lg p-8 mb-10 flex flex-col  items-center">
            <div className=" relative lg:mb-0 w-[90vw] rounded-lg  bg-green-200 flex md:flex-row flex-col    justify-around ">
              <div className='  mt-10 ml-10   w-72'>
                <h1 className="text-4xl font-bold mb-4">Best experience <span className=' font-normal'>always wins</span></h1>
                <p className="text-gray-800 mb-6 mt-10">
                  #1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, rem.
                </p>
              </div>
              <div className='md:flex'>
                <img src="" 
                alt="loading"
                className='w-72 h-72 object-cover mix-blend-multiply  ' />
                
              </div>
              <div className=' absolute h-96 w-96  right-1 '>
                <img src={bg} alt=""
                 />
              </div>

            </div>
            <div className=" lg:pl-10 mt-10 ">

              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0 md:mr-6">
                  <p className="text-gray-700 font-semibold">OUR PURPOSE IS TO</p>
                  <p className="text-green-500 font-bold">ENRICH AND ENHANCE LIVES THROUGH TECHNOLOGY</p>
                </div>
                <div className="text-center md:text-left mb-4 md:mb-0 md:mr-6">
                  <p className="text-2xl font-bold">$12.5M</p>
                  <p className="text-gray-600">Total Revenue from 2001 - 2023</p>
                </div>
                <div className="text-center md:text-left mb-4 md:mb-0 md:mr-6">
                  <p className="text-2xl font-bold">12K+</p>
                  <p className="text-gray-600">Orders Delivered Successfully Everyday</p>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-2xl font-bold">725+</p>
                  <p className="text-gray-600">Store and Office in U.S and Worldwide</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center  rounded-lg  mt-10">
              <div className="lg:w-1/2 mb-6 lg:mb-0 border-2 p- rounded-xl mr-2 ">
                <img
                  src={'https://img.freepik.com/free-photo/red-delivery-car-deliver-express-shipping-fast-delivery-background-3d-rendering-illustration_56104-1910.jpg?size=626&ext=jpg&ga=GA1.2.1224866527.1721303023&semt=sph'}
                  alt="Info"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="lg:w-1/2 lg:pl-10 p-14 bg-gray-300 rounded-xl border-2">
                <h2 className="text-2xl font-bold mb-4">We connect millions of buyers and sellers around the world, empowering people & creating economic opportunity for all.</h2>
                <p className="text-gray-600 mb-6">
                  Within our markets, millions of people around the world connect, both online and offline, to make, sell and buy unique goods. We also offer a wide range of Seller Services and tools that help creative entrepreneurs start, manage & scale their businesses.
                </p>
                <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline hover:bg-green-700">
                  OUR SHOWREEL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div >
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg border relative ">
              <h3 className="text-xl font-bold mb-8 ">100% AUTHENTIC PRODUCTS</h3>
              <div className=' absolute right-1 md:right-5 top-4 md:h-9 md:w-9 h-4 w-4 border bg-green-500 rounded-full'></div>
              <p className="text-gray-600">Swoo Tech Mart just distribute 100% authorized products & guarantee quality. Nulla porta nulla nec orci vulputate, id rutrum sapien varius.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg relative border">
              <h3 className="text-xl font-bold mb-2">FAST DELIVERY</h3>
              <div className=' absolute right-1 md:right-5 top-4 md:h-9 md:w-9 h-4 w-4 border bg-green-500 rounded-full'></div>
              <p className="text-gray-600">Fast shipping with a lots of option to delivery. 100% guarantee that your goods always on time and perserve quality.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg  relative border">
              <h3 className="text-xl font-bold mb-2">AFFORDABLE PRICE</h3>
              <div className=' absolute right-1 md:right-5 top-4 md:h-9 md:w-9 h-4 w-4 border bg-green-500 rounded-full'></div>
              <p className="text-gray-600">We offer an affordable & competitive price with a lots of special promotions.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
