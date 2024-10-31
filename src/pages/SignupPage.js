import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import Input from "../components/common/Input";
import Button from "../components/common/Button";

import { signUpDataValidation } from "../utils/userValidationSchema";

import { useSignUpMutation } from "../store";

function SignupPage() {
  const navigate = useNavigate();
  const [signUp, { isLoading }] = useSignUpMutation();
  const [data, setData] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { validData, error } = await signUpDataValidation(data);
    if (error) return toast.error(error);

    signUp(validData)
      .unwrap()
      .then(() => {
        toast.success("Account created successfully");
        toast.info("Redirecting...");
        setTimeout(() => navigate("/login"), 3000);
      })
      .catch((err) => toast.error(err.data?.errorMessage));
  };

  return (
    <main className="flex items-center justify-center w-screen h-screen !font-poppins bg-gray-200">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="flex flex-col justify-start w-full h-full text-black bg-white shadow-lg md:flex-row gap-x-24 gap-y-6">
        <div>
          <img
            src="/img/thinkpad-bg.webp"
            alt="bg"
            className="object-cover w-full h-[250px] md:h-full md:w-11/12"
          />
        </div>

        <div className="flex flex-col items-start justify-center gap-y-3 max-md:pl-4">
          <h1 className="mb-3 text-4xl font-bold">Sign Up</h1>
          <h2 className="mb-4 text-xl">
            Already have account?{" "}
            <Link to="/login" className="text-blue-600 outline-none">
              Login
            </Link>
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center w-9/12 mt-2 text-lg md:text-base gap-y-3 "
          >
            <Input
              onChange={handleChange}
              name="username"
              className="px-3 py-2 bg-gray-200 rounded-md"
              placeholder="Username"
            />
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
            <Button loading={isLoading} className="w-full mt-3">
              Create Account
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default SignupPage;
