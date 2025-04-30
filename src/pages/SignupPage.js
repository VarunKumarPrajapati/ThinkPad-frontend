import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

import { Input, Button } from "../components/common";
import SideImage from "../assets/images/thinkpad-bg.webp";

import { signUpDataValidation } from "../utils/userValidationSchema";

import { useSignUpMutation } from "../store";

export default function SignupPage() {
  const navigate = useNavigate();
  const [signUp, { isLoading, isError, isSuccess, error }] =
    useSignUpMutation();
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const [validationError, setValidationError] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { validData, ...error } = await signUpDataValidation(data);
    if (!validData) return setValidationError({ ...error });
    signUp(validData);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Account created successfully");
      navigate("/login");
    }

    if (isError) toast.error(error?.data?.message);
  }, [isSuccess, isError, navigate, error]);

  return (
    <main className="w-screen h-screen !font-poppins">
      <div className="flex flex-col w-full h-full md:flex-row gap-x-24 gap-y-6">
        <div>
          <img
            src={SideImage}
            alt="bg"
            className="object-cover w-full h-[200px] md:h-full md:w-11/12"
          />
        </div>

        <div className="flex flex-1 max-md:pl-4">
          <div className="flex flex-col items-start md:justify-center">
            <h1 className="mb-3 text-4xl font-bold">Sign Up</h1>
            <h2 className="mb-4 text-xl">
              Already have account?{" "}
              <Link
                to="/login"
                className="text-blue-600 underline outline-none visited:text-purple-700"
              >
                Login
              </Link>
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center justify-center w-10/12 mt-2 text-base md:w-9/12"
            >
              <Input
                onChange={handleChange}
                name="username"
                label="Username"
                placeholder="Enter Username"
                value={data.username}
                autoComplete="name"
                error={validationError.username}
              />
              <Input
                onChange={handleChange}
                name="email"
                autoComplete="email"
                label="Email"
                placeholder="Enter Email"
                value={data.email}
                error={validationError.email}
              />
              <Input
                showToggle
                onChange={handleChange}
                name="password"
                label="Password"
                type="password"
                placeholder="Enter Password"
                value={data.password}
                error={validationError.password}
              />
              <Button loading={isLoading} className="w-full mt-2">
                Create Account
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
