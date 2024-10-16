// const UserDetail = () => {
//     return (
//         <div>
//                <div>
//             <div className="py-5 flex justify-between items-center">
//                 {/* text  */}
//                 <h1 className=" text-xl text-pink-300 font-bold">All User</h1>
//             </div>

//             {/* table  */}
//             <div className="w-full overflow-x-auto">
//                 <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400" >
//                     <tbody>
//                         <tr>
//                             <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara">S.No.</th>
//                             <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">Location Name</th>
//                             <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">Action</th>
//                             <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">Action</th>
//                         </tr>
//                         <tr className="text-pink-300">
//                             <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 ">
//                                 1.
//                             </td>
//                             <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                                 {'name'}
//                             </td>
//                             <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-green-500 cursor-pointer ">
//                                 Edit
//                             </td>
//                             <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-red-500 cursor-pointer ">
//                                 Delete
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//         </div>
//     );
// }

// export default UserDetail;

const UserDetail = () => {
    return (
        <div className="p-8 bg-white shadow-lg rounded-xl">
            <div className="py-6 flex justify-between items-center border-b border-gray-200">
                {/* Header Text */}
                <h1 className="text-3xl text-blue-600 font-bold tracking-wide">User Management</h1>
                {/* Add New User Button */}
                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
                    + Add User
                </button>
            </div>

            {/* User Table */}
            <div className="w-full mt-8 overflow-x-auto">
                <table className="w-full text-left border border-collapse sm:border-separate border-gray-200">
                    <thead className="bg-blue-50 text-blue-700">
                        <tr>
                            <th className="h-14 px-6 text-md font-semibold border-b border-gray-300">S.No.</th>
                            <th className="h-14 px-6 text-md font-semibold border-b border-gray-300">User Name</th>
                            <th className="h-14 px-6 text-md font-semibold border-b border-gray-300">Edit</th>
                            <th className="h-14 px-6 text-md font-semibold border-b border-gray-300">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Example Row */}
                        <tr className="text-gray-700 bg-white hover:bg-gray-50 transition duration-300">
                            <td className="h-12 px-6 text-md border-t border-gray-200">1.</td>
                            <td className="h-12 px-6 text-md border-t border-gray-200">John Doe</td>
                            <td className="h-12 px-6 text-md border-t border-gray-200 text-green-600 hover:text-green-800 cursor-pointer">Edit</td>
                            <td className="h-12 px-6 text-md border-t border-gray-200 text-red-600 hover:text-red-800 cursor-pointer">Delete</td>
                        </tr>
                        {/* Add more rows dynamically */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserDetail;
