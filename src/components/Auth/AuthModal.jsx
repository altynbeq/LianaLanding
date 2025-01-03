import React, { useState } from "react";
import Modal from "./Modal";
import { auth, googleProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { FaRegWindowClose } from "react-icons/fa";

const AuthModal = ({ isModalOpen, onClose }) => {
  const [isSignIn, setIsSignIn] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("User Info:", user);
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
    }
  };

  return (
      <div className="h-screen w-screen flex items-center justify-center bg-gray-100 font-sans">
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-3/4 h-3/4 flex rounded-lg overflow-hidden">
            <div className="relative flex w-full h-full">
              {/* Close Icon */}
              <button
                onClick={onClose}
                className="absolute top-4 right-6 text-black font-bold text-xl"
                aria-label="Close"
              >
                <FaRegWindowClose />
              </button>
  
              {/* Left Section */}
              <div className="w-1/2 bg-gray-200 flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-gray-300 flex items-center justify-center rounded-lg">
                  <span className="text-gray-500">Image Placeholder</span>
                </div>
              </div>
  
              {/* Right Section */}
              <div className="w-1/2 flex items-center justify-center">
                <div className="w-3/4">
                  <h1 className="text-xl font-bold text-center mb-6">
                    {isSignIn ? "Sign In" : "Sign Up"}
                  </h1>
                  <form className="space-y-4">
                    {isSignIn ? (
                      <>
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        <input
                          type="password"
                          placeholder="Password"
                          className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        <button
                          type="submit"
                          className="w-full bg-gray-400 text-white p-3 rounded-full hover:bg-gray-500"
                        >
                          Sign In
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="flex space-x-4">
                          <input
                            type="text"
                            placeholder="First Name"
                            className="w-1/2 p-3 border border-gray-300 rounded-lg"
                          />
                          <input
                            type="text"
                            placeholder="Last Name"
                            className="w-1/2 p-3 border border-gray-300 rounded-lg"
                          />
                        </div>
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        <input
                          type="password"
                          placeholder="Password"
                          className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        <input
                          type="number"
                          placeholder="Phone Number"
                          className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        <button
                          type="submit"
                          className="w-full bg-gray-400 text-white p-3 rounded-full hover:bg-gray-500"
                        >
                          Sign Up
                        </button>
                      </>
                    )}
                  </form>
  
                  {/* Social Sign-In Buttons */}
                  <div className="mt-6">
                    <button
                      className="w-full bg-white text-black p-3 rounded-full hover:bg-gray-200 mb-4 flex items-center justify-center border border-gray-300"
                      onClick={handleGoogleSignIn}
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
                        alt="Google Logo"
                        className="w-5 h-5 mr-2"
                      />
                      Sign in with Google
                    </button>
                    <button
                      className="w-full bg-black text-white p-3 rounded-full hover:bg-gray-800 flex items-center justify-center"
                      onClick={() => alert("Sign in with Apple is not supported")}
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                        alt="Apple Logo"
                        className="w-5 h-5 mr-2"
                      />
                      Sign in with Apple
                    </button>
                  </div>
  
                  {/* Toggle Between Sign In/Sign Up */}
                  <p className="text-center mt-4">
                    {isSignIn
                      ? "Don't have an account?"
                      : "Already have an account?"}{" "}
                    <span
                      className="text-blue-500 underline cursor-pointer"
                      onClick={() => setIsSignIn(!isSignIn)}
                    >
                      {isSignIn ? "Sign Up" : "Sign In"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AuthModal;
