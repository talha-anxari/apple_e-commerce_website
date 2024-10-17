// import { useContext } from "react";
// import myContext from "../../context/myContext";

// const UserDetail = () => {
//     const context = useContext(myContext);
//     const { getAllUser } = context;
//     return (
//         <div>
//             <div>
//                 <div className="py-5 flex justify-between items-center">
//                     {/* text  */}
//                     <h1 className=" text-xl text-pink-300 font-bold">All User</h1>
//                 </div>

//                 {/* table  */}
//                 <div className="w-full overflow-x-auto">
//                     <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400" >
//                         <tbody>
//                             <tr>
//                                 <th scope="col"
//                                     className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara">
//                                     S.No.
//                                 </th>

//                                 <th scope="col"
//                                     className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara">
//                                     Name
//                                 </th>

//                                 <th scope="col"
//                                     className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara">
//                                     Email
//                                 </th>

//                                 <th scope="col"
//                                     className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara">
//                                     Uid
//                                 </th>

// <th scope="col"
//                                     className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara">
//                                    Role
//                                 </th>

//                                 <th scope="col"
//                                     className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara">
//                                     Date
//                                 </th>
                               
//                             </tr>
//                             {getAllUser.map((item, index)=> {
//                                 return (
//                                    <tr key={index} className="text-pink-300">
//                                 <td 
//                                 className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 ">
//                                     {index + 1}
//                                 </td>

//                                 <td 
//                                 className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                                     {item.name}
//                                 </td>

//                                 <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 cursor-pointer ">
//                                     {item.email}
//                                 </td>

//                                 <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 cursor-pointer ">
//                                     {item.uid}
//                                 </td>

// <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 cursor-pointer ">
//                                     {item.role}
//                                 </td>

//                                 <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 cursor-pointer ">
//                                     {item.date}
//                                 </td>
//                             </tr> 
//                                 )
//                             })}
                            
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default UserDetail;

import React, { useContext } from 'react';
import myContext from '../../context/myContext';

const UserDetail = () => {
  const { getAllUser } = useContext(myContext);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden px-8">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-3xl font-extrabold text-purple-600 mb-6 text-center">All Users</h2>
      </div>
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-purple-100 text-left text-xs font-semibold text-purple-700 uppercase tracking-wider">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-purple-700 uppercase tracking-wider">S.No.</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-purple-700 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-purple-700 uppercase tracking-wider">Email</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-purple-700 uppercase tracking-wider">Uid</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-purple-700 uppercase tracking-wider">Role</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-purple-700 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {getAllUser.map((item, index) => (
              <tr key={item.uid} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.uid}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.role}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDetail;

