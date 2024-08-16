import React, { useState, useRef } from "react";
import { Rnd } from "react-rnd";
import { useDropzone } from "react-dropzone";

const CustomizableProduct = () => {
  const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isOptionsOpen, setIsOptionsOpen] = useState(true);
  const productRef = useRef(null);
  const canvasRef = useRef(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      const newImage = {
        src: reader.result,
        position: { x: 0, y: 0 },
        size: { width: 100, height: 100 },
        rotation: 0,
      };
      setImages((prevImages) => [...prevImages, newImage]);
      setSelectedImageIndex(images.length);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const saveDesign = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const productElement = productRef.current;
    canvas.width = productElement.offsetWidth;
    canvas.height = productElement.offsetHeight;

    const productImage = new Image();
    productImage.src = "your_product_image_url"; // Replace with actual product image URL
    productImage.onload = () => {
      ctx.drawImage(productImage, 0, 0, canvas.width, canvas.height);

      images.forEach(({ src, position, size, rotation }) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          ctx.save();
          ctx.translate(position.x + size.width / 2, position.y + size.height / 2);
          ctx.rotate((rotation * Math.PI) / 180);
          ctx.drawImage(
            img,
            -size.width / 2,
            -size.height / 2,
            size.width,
            size.height
          );
          ctx.restore();
        };
      });

      const dataUrl = canvas.toDataURL("image/png");
      sendToBackend(dataUrl);
    };
  };

  const sendToBackend = async (dataUrl) => {
    try {
      const response = await fetch("your_backend_api_endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: dataUrl }),
      });

      if (response.ok) {
        console.log("Image saved successfully!");
      } else {
        console.error("Failed to save the image.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleScaleChange = (event) => {
    if (selectedImageIndex !== null && images[selectedImageIndex]) {
      const newScale = event.target.value;
      const updatedImages = [...images];
      updatedImages[selectedImageIndex].size = {
        width: newScale * 100,
        height: newScale * 100,
      };
      setImages(updatedImages);
    }
  };

  const handleRotateChange = (event) => {
    if (selectedImageIndex !== null && images[selectedImageIndex]) {
      const newRotation = event.target.value;
      const updatedImages = [...images];
      updatedImages[selectedImageIndex].rotation = newRotation;
      setImages(updatedImages);
    }
  };

  const removeImage = (indexToRemove) => {
    const updatedImages = images.filter((_, index) => index !== indexToRemove);
    setImages(updatedImages);
    setSelectedImageIndex(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6">Customize Your Product</h1>
      <div
        ref={productRef}
        className="relative bg-white border rounded-lg shadow-lg p-4"
      >
        <div
          className="relative bg-gray-500 w-64 h-64 flex items-center justify-center m-4"
          style={{
            backgroundImage: `url('https://5.imimg.com/data5/IN/EK/BA/SELLER-30607000/plain-white-t-shirts.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {images.map((image, index) => (
            <Rnd
              key={index}
              bounds="parent"
              size={image.size}
              position={image.position}
              onDragStop={(e, d) => {
                const updatedImages = [...images];
                updatedImages[index].position = { x: d.x, y: d.y };
                setImages(updatedImages);
              }}
              onResizeStop={(e, direction, ref, delta, position) => {
                const updatedImages = [...images];
                updatedImages[index].size = {
                  width: parseFloat(ref.style.width),
                  height: parseFloat(ref.style.height),
                };
                updatedImages[index].position = position;
                setImages(updatedImages);
              }}
              onClick={() => setSelectedImageIndex(index)}
              lockAspectRatio={true}
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt="Custom Design"
                  className="w-full h-full object-contain"
                  style={{ transform: `rotate(${image.rotation}deg)` }}
                />
                <button
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                  onClick={() => removeImage(index)}
                >
                  &times;
                </button>
              </div>
            </Rnd>
          ))}
        </div>
      </div>

      {selectedImageIndex !== null && images[selectedImageIndex] && (
        <div className="mt-4 w-64">
          <button
            onClick={() => setIsOptionsOpen(!isOptionsOpen)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition w-full"
          >
            {isOptionsOpen ? "Hide Options" : "Show Options"}
          </button>

          {isOptionsOpen && (
            <div className="bg-white border rounded-lg shadow-lg p-4 mt-2">
              <div className="mb-4">
                <label className="block text-gray-700">Scale:</label>
                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.01"
                  value={images[selectedImageIndex].size.width / 100}
                  onChange={handleScaleChange}
                  className="w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Rotate:</label>
                <input
                  type="range"
                  min="0"
                  max="360"
                  step="1"
                  value={images[selectedImageIndex].rotation}
                  onChange={handleRotateChange}
                  className="w-full"
                />
              </div>
              <button
                onClick={() => removeImage(selectedImageIndex)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-600 transition w-full"
              >
                Remove Image
              </button>
            </div>
          )}
        </div>
      )}

      <div {...getRootProps()} className="mt-4">
        <input {...getInputProps()} />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition">
          Upload Your Design
        </button>
      </div>

      <button
        onClick={saveDesign}
        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg mt-4 hover:bg-green-600 transition"
      >
        Save Design
      </button>

      <canvas ref={canvasRef} className="hidden"></canvas>
    </div>
  );
};

export default CustomizableProduct;
