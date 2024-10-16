import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

import React from "react";
import Slider from "react-slick";

const products = [
    {
      name: "Mac",
      category: 'macBook',
      items: 6,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-50-compare-models-202310?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1697909996238",
    },
    {
      name: "iPhone",
      category: 'iphone',
      items: 12,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone16prohero-202409?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1725567335931",
    },
    {
      name: "iPad",
      category: 'ipad',
      items: 3,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-50-compare-202405?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1713389745476",
    },
    {
      name: "Apple Watch",
      category: "appleWatch",
      items: 9,
      img: "https://img.freepik.com/premium-vector/smart-electronic-apple-watches-set_53562-7401.jpg?w=996",
    },
    {
        name: "Apple Vision Pro",
        category: "appleVisionPro",
        items: 6,
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/vision-pro-card-66-vision-pro-202401?wid=1172&hei=588&fmt=p-jpg&qlt=95&.v=1702510799485",
      },
      {
        name: "AirPods",
        category: "airPods",
        items: 12,
        img: "https://www.apple.com/v/airpods/x/images/overview/pro_endframe__e2wscfy18pme_large.jpg",
      },
      {
        name: "AirTag",
        category: "airTag",
        items: 3,
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-single-select-202104?wid=890&hei=890&fmt=jpeg&qlt=95&.v=1617761671000",
      },
      {
        name: "Apple TV 4K",
        category: "appleTv4k",
        items: 9,
        img: "https://crdms.images.consumerreports.org/f_auto,w_598/prod/products/cr/models/393432-streamingmediaplayers-apple-appletv4k32gb.jpg",
      },
      {
        name: "HomePod",
        category: "homePod",
        items: 6,
        img: "https://www.apple.com/v/homepod/p/images/overview/hero__ernd10zm1dsi_large.jpg",
      },
      {
        name: "Accessories",
        category: "accessories",
        items: 12,
        img: "https://img.freepik.com/premium-photo/tech-gadgets-devices-arranged-organized-manner-generative-ai_546192-1947.jpg",
      },
      
    // Add more categories as needed
  ];

export default function Responsive() {
  const navigate = useNavigate(); // Initialize navigate function
  let settings = {
    arrow: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // const handleCategoryClick = (categoryName) => {
  //   navigate(`/CategoriesPage/${categoryName.toLowerCase()}`); // Navigate to the category page
  // };

  return (

    
      <div className="slider-container py-10 px-4 sm:px-8 md:px-10 lg:px-16 xl:px-32">
        <h1 className="font-bold text-3xl text-center py-6">Our Categories</h1>
        <div className=" m-auto">
        <Slider {...settings}>
        {products.map((ele, index) => {
          return (
            <div key={index} className="text-center cursor-pointer"
            >
              <div onClick={() => navigate(`/category/${ele.name}`)} className="mx-4">
              <div>
                <img src={ele.img} alt={ele.name} className="w-full h-[150px] rounded-3xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mt-4">{ele.name}</h2>
                <p className="text-gray-400 ">({ele.items} Items)</p>
              </div>
              </div>
            </div>
          )
        })}
        </Slider>
        </div>
      </div>
  );
}
