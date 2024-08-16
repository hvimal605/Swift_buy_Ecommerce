import React from 'react';
import { FooterLink2 } from '../../../data/FooterLinks';
import appStore from '../../assets/Images/logo.png'; 
// import googlePlay from './path_to_google_play_image'; // replace with the correct path to the Google Play image
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0 md:w-1/5">
            <h2 className="text-2xl font-bold text-white mb-4">Swift Guy</h2>
           
            <p className="mb-4">Address: lo</p>
            <p className="mb-4">Call Us: +915968860689</p>
            <p className="mb-4">Email: email@swiftguy.com</p>
            <p className="mb-4">Hours: 10:00 - 18:00, Mon-Sat</p>
          </div>
          {FooterLink2.map((section, index) => (
            <div key={index} className="mb-8 md:mb-0 md:w-1/5">
              <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <a href={link.link} className="hover:underline hover:text-gray-100 transition-colors">{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="md:w-1/5">
            <h2 className="text-xl font-bold text-white mb-4">Install App</h2>
            <div className="flex space-x-4 mb-4">
              <img src={appStore} alt="App Store" className="w-32 cursor-pointer hover:opacity-80 transition-opacity" />
              
            </div>
            <p className="mt-4">Secured Payment Gateways</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <div className="mb-4 md:mb-0">
            <p>© CoppRight Analytical Developers 2024, </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-4 md:mb-0 text-center">
            <div>
              <p className="font-bold">2000-2024</p>
              <p>Working 8:00 - 22:00</p>
            </div>
            <div>
              <p className="font-bold">+512637</p>
              <p>24/7 Support Center</p>
            </div>
          </div>
          <div className="text-center">
            <p>Follow Us:</p>
            <div className="flex justify-center space-x-4 mt-2">
              {/* Add your social media icons here */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaFacebook /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaYoutube /></a>
            </div>
            <p className="mt-4 text-sm text-gray-400">Up to 15% discount on your first subscribe</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
