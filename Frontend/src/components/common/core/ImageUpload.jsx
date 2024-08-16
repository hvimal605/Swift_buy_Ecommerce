import React, { useState, useRef, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUpload = ({ onClose }) => {
  const [image, setImage] = useState(null);
  const modalRef = useRef(null); // Ref for the modal container

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose(); // Close the modal if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-20 z-50 right-5 bg-white shadow-lg p-4 rounded" ref={modalRef}>
      <div {...getRootProps()} className="border-2 border-dashed border-gray-300 p-4 text-center cursor-pointer">
        <input {...getInputProps()} />
        {image ? (
          <img src={image} alt="Preview" className="w-full h-auto" />
        ) : (
          <p>Drag & drop an image here, or click to select one</p>
        )}
      </div>
      <button
        className="mt-4 bg-pink-500 text-white px-4 py-2 rounded"
        onClick={() => console.log('Upload Image')}
      >
        Upload Image
      </button>
    </div>
  );
};

export default ImageUpload;
