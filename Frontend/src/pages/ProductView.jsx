import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductView = () => {
  // Extended Product data
  const product = {
    name: 'Cool T-Shirt',
    description: 'A cool t-shirt with a unique design.',
    price: 25.99,
    images: [
      'https://outoforder.in/wp-content/uploads/2020/03/Plain-White-Tshirt-for-Men.jpg',
      'https://assets.ajio.com/medias/sys_master/root/20240706/zkLV/668952631d763220fa0dc4a4/-473Wx593H-463484633-white-MODEL.jpg',
      'https://contents.mediadecathlon.com/p2567818/1bd67d8d7fa0df309cb519b38f2bd353/p2567818.jpg?format=auto&f=768x0',
      'https://5.imimg.com/data5/XX/WR/KW/SELLER-7949691/promotional-t-shirt-white-polyester.jpg',
    ],
    quantity: 1, // Default quantity
    reviews: [
      { rating: 4.5, comment: 'Great product! Highly recommend.' },
      { rating: 4.0, comment: 'Good quality, but size runs a bit small.' },
    ],
    discount: 'Get 10% off on your first purchase. Use code: FIRST10',
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(product.quantity);

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  // Calculate average rating
  const averageRating = (
    product.reviews.reduce((sum, review) => sum + review.rating, 0) /
    product.reviews.length
  ).toFixed(1);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="flex flex-col md:flex-row">
        {/* Image Gallery */}
        <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0">
          <img
            src={selectedImage}
            alt={product.name}
            className="w-full h-72 md:h-96 object-cover rounded-lg"
          />
          <div className="flex mt-4 space-x-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                className={`w-20 h-20 md:w-24 md:h-24 object-cover cursor-pointer rounded-lg ${
                  selectedImage === image ? 'border-4 border-blue-500' : ''
                }`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 pl-0 md:pl-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{product.name}</h2>
          <p className="text-base md:text-lg text-gray-600 mb-4">{product.description}</p>
          <p className="text-lg md:text-xl font-semibold text-gray-900 mb-4">${product.price.toFixed(2)}</p>

          {/* Quantity Selector */}
          <div className="flex items-center mb-4">
            <label htmlFor="quantity" className="mr-2 text-gray-700 text-sm md:text-base">Quantity:</label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-16 md:w-20 border border-gray-300 rounded-lg p-2 text-sm md:text-base"
              min="1"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4">
            <button className="bg-yellow-500 text-black px-4 md:px-6 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
              Add to Cart
            </button>
            <button onClick={handleShare} className="bg-gray-300 text-gray-800 px-4 md:px-6 py-2 rounded-lg hover:bg-gray-400 transition duration-300">
              Share
            </button>
            <Link to={'/product'}>
              <button className="bg-blue-500 text-white px-4 md:px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                Customize
              </button>
            </Link>
          </div>

          {/* Average Rating */}
          <div className="mb-4">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Average Rating</h3>
            <p className="text-gray-600">★★★★☆ ({averageRating}/5)</p>
          </div>

          {/* Discount */}
          <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4">
            <p className="font-semibold">Special Offer!</p>
            <p>{product.discount}</p>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-6">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Customer Reviews</h3>
        {product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <div key={index} className="mb-2">
              <p className="text-gray-600">★★★★☆ ({review.rating}/5) - {review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProductView;
