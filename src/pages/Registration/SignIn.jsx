import { RiArrowLeftCircleFill } from '@remixicon/react';
import { Link, useNavigate } from 'react-router-dom';
import React, { useContext, useState } from "react";
import MyContext from '../../context/myContext';
import toast from 'react-hot-toast';
import { auth, fireDB } from '../../firebase/FirebaseConfig';
import { collection, onSnapshot, query, QuerySnapshot, where } from 'firebase/firestore';
// import { data } from 'autoprefixer';
import Loader from '../../components/Loader/Loader';
import { signInWithEmailAndPassword } from 'firebase/auth';


const SignIn = () => {

  const context = useContext(MyContext)
  const { loading, setLoading } = context;

  // navigate
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({
    email: '',
    password: '',
  })

  // user login function

const handleSignIn = async (e) => {
  e.preventDefault();
  if(userLogin.email === '' || userLogin.password === ""){
    return toast.error('All field are required')
  }
  setLoading(true)
  try {
    const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
    try {
      const q = query(collection(fireDB, "user"), where("uid", "==", users?.user?.uid));

      const data = onSnapshot(q, (QuerySnapshot) => {
        let user;
        QuerySnapshot.forEach((doc) => user = doc.data())
        localStorage.setItem('users', JSON.stringify(user));
        setUserLogin({
          email: '',
          password: '',
        })
        toast.success('Sign In Successfully')
        setLoading(false);
        if(user.role === 'user'){
          navigate('/userDashboard');
        }
        else{
          navigate('/adminDashboard');
        }
      })
      return () => data;
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    
  } catch (error) {
    console.log(error)
    setLoading(false)
    toast.error('Login Failed')
  }
};

return (
  <div className="flex items-center justify-center h-screen">
      {loading && (
        <Loader className="fixed inset-0 flex items-center justify-center z-50" />
      )}
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
      <div className="flex items-center justify-center mb-8">
        <svg
          className="h-8 w-8 text-black mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
        <span className="text-2xl font-bold text-black">AppleStore</span>
      </div>
      <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
      <form onSubmit={handleSignIn} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={userLogin.email}
          onChange={(e) => {setUserLogin({
            ...userLogin,
            email: e.target.value})}}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={userLogin.password}
          onChange={(e) => {setUserLogin({...userLogin,
            password: e.target.value
          })}}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          required
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
        >
          Sign In
        </button>
      </form>{" "}
      <div className="mt-4 text-center">
        {" "}
        <p className="text-sm text-gray-600">
          Don't have an account? {" "}
          <Link to={"/signUp"} className="text-blue-500 hover:underline">
            Sign Up
          </Link>{" "}
        </p>{" "}
      </div>{" "}
      <div className="flex justify-between">
        {" "}
        <Link to={"/"} title="Back To Home Page">
          {" "}
          <RiArrowLeftCircleFill size={"32"} className="my-icon" />{" "}
        </Link>{" "}
      </div>
    </div>
  </div>
);
};

export default SignIn;


// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = (e) => {
//     e.preventDefault();
//     // Handle sign in logic here
//     console.log("Signing in with:", email, password);
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
//         <div className="flex items-center justify-center mb-8">
//           <svg
//             className="h-8 w-8 text-black mr-2"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
//             />
//           </svg>
//           <span className="text-2xl font-bold text-black">AppleStore</span>
//         </div>
//         <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
//         <form onSubmit={handleSignIn} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
//           >
//             Sign In
//           </button>
//         </form>{" "}
//         <div className="mt-4 text-center">
//           {" "}
//           <p className="text-sm text-gray-600">
//             Don't have an account? //{" "}
//             <Link to={"/signUp"} className="text-blue-500 hover:underline">
//               Sign Up
//             </Link>{" "}
//           </p>{" "}
//         </div>{" "}
//         <div className="flex justify-between">
//           {" "}
//           <Link to={"/"} title="Back To Home Page">
//             {" "}
//             <RiArrowLeftCircleFill size={"32"} className="my-icon" />{" "}
//           </Link>{" "}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;
