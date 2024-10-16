import React from 'react';

const PromotionalCard = ({ title, subtitle, buttonText, imageSrc, altText, darkTheme }) => (
  <div className={`relative overflow-hidden rounded-lg ${darkTheme ? 'bg-gray-900' : 'bg-gray-100'} h-64 md:h-80`}>
    <img src={imageSrc} alt={altText} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative z-10 h-full flex flex-col justify-center p-6">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">{title}</h2>
      <p className="text-gray-200 text-sm md:text-base mb-4">{subtitle}</p>
      <button className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors w-max">
        {buttonText}
      </button>
    </div>
  </div>
);

const OurCollection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PromotionalCard
          title="20% Off On Laptops"
          subtitle="Products On Sale For Limited Time Only."
          buttonText="SHOP IT NOW"
          imageSrc="https://images.pexels.com/photos/12954746/pexels-photo-12954746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          altText="Laptop sale"
          darkTheme={true}
        />
        <PromotionalCard
          title="Apple Collections"
          subtitle="Get Your Best Apple Products."
          buttonText="SHOP COLLECTION"
          imageSrc="https://img.freepik.com/premium-photo/modern-desk-setup-with-apple-products-accessories_309199-14069.jpg?w=1380"
          altText="Apple products"
          darkTheme={false}
        />
      </div>
    </div>
  );
};

export default OurCollection;