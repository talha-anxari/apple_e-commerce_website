import React, { useContext, useState } from "react";
import MyContext from "../../context/myContext"; // Ensure correct import path
import toast from "react-hot-toast";
import { Link,  useNavigate } from "react-router-dom";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import Loader from "../../components/Loader/Loader";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  // Correct way to access loading and setLoading
  const { loading, setLoading } = useContext(MyContext);

  const navigate = useNavigate();

  const [userSignUp, setUserSignUp] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const userSignUpFunction = async (e) => {
    e.preventDefault();
    if (
      userSignUp.name === "" ||
      userSignUp.email === "" ||
      userSignUp.password === ""
    ) {
      return toast.error("Please fill all the fields");
    }

    setLoading(true);

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        userSignUp.email,
        userSignUp.password
      );

      // create user object
      const userInfo = {
        name: userSignUp.name,
        email: user.user.email, // user.user.email
        uid: user.user.uid, // user.user.uid
        role: userSignUp.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        }),
      };

      // create user Reference
      const userReference = collection(fireDB, "user");

      // Add user Details
      await addDoc(userReference, userInfo);

      // then input field empty
      setUserSignUp({
        name: "",
        email: "",
        password: "",
      });
      setLoading(false);
      // then navigate login page
      toast.success('Sign Up Successfully')
      setLoading(false);
      // then navigate login page
      navigate('/signIn')
    } catch (error) {
      console.log(error);
      setLoading(false);
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
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <form onSubmit={userSignUpFunction} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={userSignUp.name}
            onChange={(e) =>
              setUserSignUp({ ...userSignUp, name: e.target.value })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={userSignUp.email}
            onChange={(e) =>
              setUserSignUp({ ...userSignUp, email: e.target.value })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={userSignUp.password}
            onChange={(e) =>
              setUserSignUp({ ...userSignUp, password: e.target.value })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            required
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to={"/signIn"} className="text-blue-500 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
