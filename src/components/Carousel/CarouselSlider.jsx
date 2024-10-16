import React, { useState, useEffect } from "react";

const CarouselSlider = () => {
  const slides = [
    {
      name: "iPhone 16 Pro",
      para: "Hello, Apple Intelligence",
      img: "https://www.apple.com/v/home/bs/images/heroes/iphone-16-pro/hero_iphone16pro_avail__fnf0f9x70jiy_medium.jpg",
    },
    {
      name: "AirPods Pro 2",
      para: "AirPods Pro 2 will soon feature a scientifically validated Hearing Test and a clinical-grade Hearing Aid capability",
      img: "https://cdn.wccftech.com/wp-content/uploads/2020/06/airpods-pro-deal-740x488.png",
    },
    {
      name: "Watch Series 10",
      para: "Thinstant classic.",
      img: "https://www.apple.com/v/home/bs/images/heroes/apple-watch-series-10/hero_apple_watch_series_10_avail_lte__esu66gaw6dci_medium.jpg",
    },
    {
      name: "The Future Hits Home.",
      para: "Simply connect your favorite devices and transform your house into a remarkably smart, convenient, and entertaining home.",
      img: "https://www.apple.com/v/tv-home/n/images/overview/hero__dbphk49ymi2q_large.jpg",
    },
    {
      name: "MacBook Pro",
      para: "Mind-blowing. Head-turning.",
      img: "https://www.apple.com/v/macbook-pro/ak/images/overview/welcome/welcome_hero_endframe__66ipqm3o5gyu_large.jpg",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  const handleBulletClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="relative overflow-hidden  w-full h-[80vh] py-10 px-4 sm:px-8 md:px-10 lg:px-16 xl:px-32">
  <div className="relative h-full">
    {slides.map((slide, index) => (
      <div
        key={index}
        className={`absolute left-0 rounded-2xl top-0 w-full h-full transition-all duration-500 ease-in-out ${
          activeSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
        style={{
          backgroundImage: `url(${slide.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl"></div>

        <div className="flex flex-col ml-4 md:ml-10 lg:ml-16 xl:ml-32 items-start justify-center h-full z-50 text-white">
          <h2 className="text-5xl font-bold tracking-widest text-white z-50">
            {slide.name}
          </h2>
          <p className="text-sm mt-2 z-50 text-white">
            {slide.para}
          </p>
          <button className="px-12 py-3 mt-5 rounded-3xl z-50 bg-white text-gray-900 uppercase">
            Shop Collection
          </button>
        </div>
      </div>
    ))}
  </div>

  {/* Bullets for navigation */}
  <div className="absolute bottom-12 z-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
    {slides.map((_, index) => (
      <button
        key={index}
        className={`h-2 w-2 rounded-full ${
          activeSlide === index ? "bg-white" : "bg-gray-400"
        }`}
        onClick={() => handleBulletClick(index)}
      />
    ))}
  </div>
</div>

  );
};

export default CarouselSlider;
