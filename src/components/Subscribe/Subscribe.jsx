import React from 'react';

const Subscribe = () => {
  return (
    <div className="flex justify-center items-center px-4 sm:px-8 md:px-10 lg:px-16 xl:px-32 mt-10">
      <div className="w-full text-center h-44 md:h-52 flex items-center justify-center flex-col  text-white bg-black rounded-md" 
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=1694&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, backgroundPosition: 'center bottom' // Replace with your actual image URL
      }}>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Subscribe Us Now</h2>
        <p className="text-sm md:text-base mb-6">Get Latest News, Updates And Deals Directly Mailed To Your Inbox.</p>
        
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Your email address here"
            className="py-2 px-4 w-full max-w-lg rounded-l-md text-black outline-none"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-r-md">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
