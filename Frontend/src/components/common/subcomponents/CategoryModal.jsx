import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Food', link: '/Productslist/food' },
  { name: 'Electronics', link: '/Productslist/electronics' },
  { name: 'Clothing', link: '/Productslist/clothing' },
  { name: 'Books', link: '/Productslist/books' },
  { name: 'Sports', link: '/Productslist/sports' },
 
  { name: 'Home & Kitchen', link: '/Productslist/home-kitchen' },
  { name: 'Toys', link: '/Productslist/toys' },

  { name: 'Health', link: '/Productslist/health' },
];

const CategoryModal = ({ isOpen, onClose }) => {
  return (
    <div className={`p-4 z-40 ${isOpen ? 'block' : 'hidden'}`}>
      <h2 className='text-xl font-semibold mb-4'>Categories</h2>
      <ul className='flex flex-col space-y-2'>
        {categories.map((category, index) => (
          <li key={index}>
            <Link 
              to={category.link}
              className='block p-2 bg-gray-100 rounded-lg hover:bg-red-200 transition duration-200'
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryModal;
