import React from 'react';
import { Link } from 'react-router-dom'; 

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mt-4">Oops! Page Not Found</p>
        <p className="text-gray-500 mt-2">Sorry, the page you’re looking for doesn’t exist.</p>
        <Link to="/" className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;