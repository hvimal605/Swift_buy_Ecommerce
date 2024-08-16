import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow-md p-4 w-full md:w-1/4 lg:w-1/5">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover rounded-lg"
        />
        {product.label && (
          <span className={`absolute top-2 left-2 px-2 py-1 bg-${product.labelColor}-500 text-white rounded text-xs`}>
            {product.label}
          </span>
        )}
      </div>
      <div className="mt-2">
        <h3 className="font-semibold text-lg">{product.title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-gray-500 line-through">{product.originalPrice}</span>
          <span className="text-red-500 font-semibold">{product.price}</span>
        </div>
        <div className="mt-2 flex items-center">
          <span className="text-green-500 font-semibold">{product.rating}</span>
          <span className="ml-2 text-xs text-gray-400">({product.reviews} reviews)</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
