import React from 'react';

const ShopOurInsta = () => {
  const images = [
    "https://images5.alphacoders.com/136/thumb-1920-1362717.png",  // replace with actual image URLs
    "https://picfiles.alphacoders.com/613/613508.jpg",
    "https://images7.alphacoders.com/114/thumb-1920-1143022.jpg",
    "https://images6.alphacoders.com/108/thumb-1920-1086060.jpg",
    "https://images6.alphacoders.com/136/thumb-1920-1362716.png",
  ];

  return (
    <div className="bg-white py-10 px-4 sm:px-8 md:px-10 lg:px-16 xl:px-32">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-center text-2xl font-semibold mb-8">Shop Our Insta</h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img src={image} alt={`Instagram Image ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopOurInsta;
