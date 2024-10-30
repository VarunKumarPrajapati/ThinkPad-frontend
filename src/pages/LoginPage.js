import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Input from "../components/common/Input";
import Button from "../components/common/Button";

import { loginDataValidation } from "../utils/userValidationSchema";

function LoginPage() {
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { validData, error } = await loginDataValidation(data);
    if (error)
      return toast.error(error, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

    console.log(validData);
  };

  return (
    <main className="flex items-center justify-center w-screen h-screen !font-poppins bg-gray-200">
      <ToastContainer />
      <div className="flex flex-col justify-start w-full h-full text-black bg-white shadow-lg md:flex-row gap-x-24 gap-y-6">
        <div>
          <img
            src="/img/thinkpad-bg.webp"
            alt="bg"
            className="object-cover w-full h-[250px] md:h-full md:w-11/12"
          />
        </div>

        <div className="flex flex-col items-start justify-center gap-y-2 max-md:pl-4">
          <h1 className="mb-3 text-3xl">Welcome Back !!!</h1>
          <h1 className="text-3xl font-bold ">Login</h1>
          <h2 className="mb-4 text-xl">
            Don't have account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 underline outline-none "
            >
              Create one !!!
            </Link>
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center w-9/12 mt-2 text-lg md:text-base gap-y-3 "
          >
            <Input
              onChange={handleChange}
              name="email"
              className="px-3 py-2 bg-gray-200 rounded-md"
              placeholder="Email"
            />
            <Input
              onChange={handleChange}
              name="password"
              className="px-3 py-2 bg-gray-200 rounded-md"
              placeholder="Password"
            />
            <Button className="w-full mt-3">Login</Button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;