import React, { useState } from "react";

const RegisterPage = () => {
  const [isSignIn, setIsSignIn] = useState(false); // Состояние для переключения между регистрацией и входом

  return (
    <div className="h-screen w-screen flex font-sans">
      {/* Левая часть */}
      <div className="w-1/2 bg-gray-200 flex items-center justify-center">
        <div className="w-3/4 h-3/4 bg-gray-300 flex items-center justify-center rounded-lg">
          <span className="text-gray-500">Image Placeholder</span>
        </div>
      </div>

      {/* Правая часть */}
      <div className="w-1/2 bg-white flex flex-col items-center justify-center px-10 relative">
        {/* Логотип */}
        <div className="fixed top-5 right-5 text-black text-3xl font-bold z-10">
          LOGO
        </div>

        <div className="w-full max-w-md">
          {isSignIn ? (
            <>
              {/* Форма входа */}
              <h1 className="text-xl font-bold text-center mb-6">Sign In</h1>
              <form className="space-y-4">
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
                  className="w-full bg-gray-300 text-black p-3 rounded-full hover:bg-gray-400"
                >
                  Sign In
                </button>
              </form>
              <div className="text-center mt-4">
                <button className="w-full bg-gray-300 text-black p-3 rounded-full hover:bg-gray-400 mt-4">
                  Sign In with Google
                </button>
                <p className="mt-4">
                  Don't have an account?{" "}
                  <span
                    className="text-blue-500 underline cursor-pointer"
                    onClick={() => setIsSignIn(false)}
                  >
                    Sign Up
                  </span>
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Форма регистрации */}
              <h1 className="text-xl font-bold text-center mb-6">
                Welcome to Your Floral Haven!
              </h1>
              <form className="space-y-4">
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
                  type="tel"
                  placeholder="Phone Number"
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
                  Sign Up
                </button>
              </form>
              <p className="text-center mt-4">
                Already have an account?{" "}
                <span
                  className="text-black underline cursor-pointer"
                  onClick={() => setIsSignIn(true)}
                >
                  Sign In
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
