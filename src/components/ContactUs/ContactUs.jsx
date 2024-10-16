// import React from "react";

// const ContactUs = () => {
//   return (
//     <>
//     <div className="flex flex-col md:flex-row justify-between items-start py-4 px-4 sm:px-8 md:px-10 lg:px-16 xl:px-32">
//       {/* Contact Info Section */}
//       <div className="w-full md:w-1/2 space-y-6">
//   <h2 className="text-3xl font-bold text-gray-900">Contact Info</h2>
//   <p className="text-gray-600">
//     We are always here to assist you. Get in touch with us through any of the below contact details.
//   </p>

//   <div className="space-y-4">
//     <div>
//       <h3 className="text-lg font-semibold text-gray-800">Office</h3>
//       <p className="text-gray-600">730 Glenstone Ave 65802, Springfield, US</p>
//       <p className="text-gray-600">+123 222 333 44</p>
//       <p className="text-gray-600">office@yourinfo.com</p>
//     </div>

//     <div>
//       <h3 className="text-lg font-semibold text-gray-800">Management</h3>
//       <p className="text-gray-600">730 Glenstone Ave 65802, Springfield, US</p>
//       <p className="text-gray-600">+123 666 777 88</p>
//       <p className="text-gray-600">management@yourinfo.com</p>
//     </div>

//     <div>
//       <h3 className="text-lg font-semibold text-gray-800">Support</h3>
//       <p className="text-gray-600">support@yourinfo.com</p>
//       <p className="text-gray-600">+123 999 888 77</p>
//     </div>

//     <div>
//       <h3 className="text-lg font-semibold text-gray-800">Working Hours</h3>
//       <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
//       <p className="text-gray-600">Sat - Sun: Closed</p>
//     </div>
//   </div>
// </div>


//       {/* Form Section */}
//       <div className="w-full md:w-1/2 space-y-4">
//         <h2 className="text-3xl font-bold">Any Questions?</h2>
//         <p>Use the form below to get in touch with us.</p>
        
//         <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input type="text" placeholder="Your full name *" className="p-3 border border-gray-300 rounded-md"/>
//           <input type="email" placeholder="Write your email here *" className="p-3 border border-gray-300 rounded-md"/>
//           <input type="text" placeholder="Phone number" className="md:col-span-2 p-3 border border-gray-300 rounded-md"/>
//           <input type="text" placeholder="Write your subject here" className="md:col-span-2 p-3 border border-gray-300 rounded-md"/>
//           <textarea placeholder="Write your message here *" className="md:col-span-2 p-3 border border-gray-300 rounded-md h-32"></textarea>
//           <button 
//   className="w-24 h-10 text-sm bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition duration-300">
//   Submit
// </button>


//         </form>
//       </div>
//     </div>
//     <div className="flex flex-col md:flex-row items-center bg-gray-100 p-8 rounded-lg shadow-md">
//       <div className="w-full md:w-1/2 mb-6 md:mb-0">
//         <img 
//           src="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437107.jpg?t=st=1728199605~exp=1728203205~hmac=11302796aae360c764b56840ca329dac378b10bb76c60e70920a093f97440f5e&w=996" 
//           alt="iPhone" 
//           className="w-full h-auto rounded-lg shadow-lg"
//         />
//       </div>
//       <div className="w-full md:w-1/2 md:pl-8">
//         <h2 className="text-2xl font-bold mb-4">Our Stores</h2>
//         <p className="text-gray-600 mb-4">You can also directly buy products from our stores.</p>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <h3 className="font-semibold mb-2">USA</h3>
//             <p>730 Glenstone Ave 65802, US</p>
//             <p>+123 456 777 88</p>
//             <p>info@yourinfo.com</p>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-2">France</h3>
//             <p>13 Rue Montmartre 75001, Paris, France</p>
//             <p>+123 222 333 44</p>
//             <p>info@yourinfo.com</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </>
//   );
// };

// export default ContactUs;



import React from 'react';

const ContactUs = () => {
  return (
    <div className="pt-8 py-4 px-4 sm:px-8 md:px-10 lg:px-16 xl:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
          <p className="mb-4">Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.</p>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Office</h3>
              <p>730 Glenstone Ave 65802, Springfield, US</p>
              <p>+123 222 333 44</p>
              <p>info@yourinfo.com</p>
            </div>
            <div>
              <h3 className="font-semibold">Management</h3>
              <p>730 Glenstone Ave 65802, Springfield, US</p>
              <p>+123 666 777 88</p>
              <p>info@yourinfo.com</p>
            </div>
          </div>
        </div>

        {/* Any Questions? Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Any Questions?</h2>
          <p className="mb-4">Use the form below to get in touch with us.</p>
          
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Your full name *" className="w-full p-2 border rounded" />
              <input type="email" placeholder="Write your email here *" className="w-full p-2 border rounded" />
            </div>
            <input type="tel" placeholder="Phone number" className="w-full p-2 border rounded" />
            <input type="text" placeholder="Write your subject here" className="w-full p-2 border rounded" />
            <textarea placeholder="Write your message here *" className="w-full p-2 border rounded h-32"></textarea>
            <button type="submit" className="bg-black text-white px-6 py-2 rounded-full">Submit</button>
          </form>
        </div>
      </div>

      {/* Our Stores Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img src="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437107.jpg?t=st=1728199605~exp=1728203205~hmac=11302796aae360c764b56840ca329dac378b10bb76c60e70920a093f97440f5e&w=996" alt="iPhone" className="w-full rounded-lg shadow-lg" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Stores</h2>
          <p className="mb-4">You can also directly buy products from our stores.</p>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">USA</h3>
              <p>730 Glenstone Ave 65802, US</p>
              <p>+123 666 777 88</p>
              <p>info@yourinfo.com</p>
            </div>
            <div>
              <h3 className="font-semibold">France</h3>
              <p>13 Rue Montmartre 75001, Paris, France</p>
              <p>+123 222 333 44</p>
              <p>info@yourinfo.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;