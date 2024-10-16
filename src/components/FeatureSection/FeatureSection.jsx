// import React from "react";
// import { Link } from "react-router-dom";

// const FeatureSection = () => {
//   return (
//     <section className=" py-10 px-4 sm:px-8 md:px-10 lg:px-16 xl:px-32 h-[500px] md:h-[600px]">
//       {/* Feature Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
//         {[
//           {
//             icon: "🛒",
//             title: "Free Delivery",
//             description: "Consectetur adipis elit lorem ipsum dolor sit amet.",
//           },
//           {
//             icon: "🏆",
//             title: "Quality Guarantee",
//             description: "Dolor sit amet orem ipsu monset ectetur adipi elit.",
//           },
//           {
//             icon: "💼",
//             title: "Daily Offers",
//             description: "Amet consectetur adipi elit lorem ipsum dolor sit.",
//           },
//           {
//             icon: "🔒",
//             title: "100% Secure Payment",
//             description: "Rem Lopsum dolor sit amet, consectetur adipi elit.",
//           },
//         ].map((feature, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md rounded-lg p-6 text-center"
//           >
//             <div className="text-4xl mb-4">{feature.icon}</div>
//             <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
//             <p className="text-sm text-gray-500">{feature.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Promotional Section */}
//       <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg">
//         {/* Video Section */}
//         <div className="flex-1 mb-6 md:mb-0 md:mr-6 relative">
//           <div className="relative">
//             {/* Video Section */}
//             <video
//             controls
//               src="https://www.w3schools.com/html/mov_bbb.mp4"
//               className="rounded-lg shadow-lg w-full"
//             >
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>

//         {/* Text Section */}
//         <div className="flex-1 text-center md:text-left p-6">
//           <h2 className="text-2xl md:text-4xl font-semibold mb-4">
//             Best Digital Store BasicStore
//           </h2>
//           <p className="text-gray-600 mb-4">
//             Risus augue curabitur diam senectus congue velit et. Sed vitae metus
//             nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio
//             eros at. Et libero vulputate amet duis erat volutpat vitae eget.
//           </p>
//           <p className="text-gray-600 mb-6">
//             Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et
//             libero vulputate amet duis erat volutpat vitae eget. Quam libero
//             etiam et in ac at quis.
//           </p>
//           <Link
//             to={"/shop"}
//             className="inline-block px-6 py-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors"
//           >
//             Go To Shop
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeatureSection;

import React from "react";

const FeatureSection = () => {
  return (
    <section className="py-10 px-4 sm:px-8 md:px-10 lg:px-16 xl:px-32">
      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {[
          {
            icon: "🛒",
            title: "Free Delivery",
            description: "Consectetur adipis elit lorem ipsum dolor sit amet.",
          },
          {
            icon: "🏆",
            title: "Quality Guarantee",
            description: "Dolor sit amet orem ipsu monset ectetur adipi elit.",
          },
          {
            icon: "💼",
            title: "Daily Offers",
            description: "Amet consectetur adipi elit lorem ipsum dolor sit.",
          },
          {
            icon: "🔒",
            title: "100% Secure Payment",
            description: "Rem Lopsum dolor sit amet, consectetur adipi elit.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Promotional Section */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-1 mb-6 md:mb-0 md:mr-6">
          <img
            src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=1694&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Digital Store"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            Best Digital Store AppleStore.
          </h2>
          <p className="text-gray-600 mb-4">
            Risus augue curabitur diam senectus congue velit et. Sed vitae metus
            nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio
            eros at. Et libero vulputate amet duis erat volutpat vitae eget.
          </p>
          <p className="text-gray-600 mb-6">
            Nulla adipiscing pharetra pellentesque maecenas odio eros at. Quam
            libero etiam et in ac at quis.
          </p>
          <a
            href="#shop"
            className="px-6 py-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors"
          >
            Go To Shop
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;


// import React from "react";

// const FeatureSection = () => {
//   return (
//     <section className="py-10 px-4 sm:px-8 md:px-10 lg:px-16 xl:px-32">
//       {/* Feature Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
//         {[
//           {
//             icon: "🛒",
//             title: "Free Delivery",
//             description: "Consectetur adipis elit lorem ipsum dolor sit amet.",
//           },
//           {
//             icon: "🏆",
//             title: "Quality Guarantee",
//             description: "Dolor sit amet orem ipsu monset ectetur adipi elit.",
//           },
//           {
//             icon: "💼",
//             title: "Daily Offers",
//             description: "Amet consectetur adipi elit lorem ipsum dolor sit.",
//           },
//           {
//             icon: "🔒",
//             title: "100% Secure Payment",
//             description: "Rem Lopsum dolor sit amet, consectetur adipi elit.",
//           },
//         ].map((feature, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md rounded-lg p-6 text-center"
//           >
//             <div className="text-4xl mb-4">{feature.icon}</div>
//             <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
//             <p className="text-sm text-gray-500">{feature.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Promotional Section with Video */}
//       <div className="flex flex-col md:flex-row items-center">
//         <div className="flex-1 mb-6 md:mb-0 md:mr-6 relative">
//           {/* Replace image with video */}
//           <video
//             controls
//             src="https://www.w3schools.com/html/mov_bbb.mp4"
//             className="rounded-lg shadow-lg w-full"
//           >
//             Your browser does not support the video tag.
//           </video>
//         </div>
//         <div className="flex-1 text-center md:text-left">
//           <h2 className="text-2xl md:text-4xl font-semibold mb-4">
//             Best Digital Store BasicStore
//           </h2>
//           <p className="text-gray-600 mb-4">
//             Risus augue curabitur diam senectus congue velit et. Sed vitae metus
//             nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio
//             eros at. Et libero vulputate amet duis erat volutpat vitae eget.
//           </p>
//           <p className="text-gray-600 mb-6">
//             Nulla adipiscing pharetra pellentesque maecenas odio eros at. Quam
//             libero etiam et in ac at quis.
//           </p>
//           <a
//             href="#shop"
//             className="px-6 py-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors"
//           >
//             Go To Shop
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeatureSection;

