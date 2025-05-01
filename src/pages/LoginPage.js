import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Input, Button } from "../components/common";
import SideImage from "../assets/images/thinkpad-bg.webp";

import { loginDataValidation } from "../utils/userValidationSchema";

import { useLoginMutation } from "../store";

export default function LoginPage() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [validationError, setValidationError] = useState({
    email: "",
    password: "",
  });
  const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { validData, ...error } = await loginDataValidation(data);
    if (!validData) return setValidationError(() => ({ ...error }));
    login(validData);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully Logged In.");
      navigate("/");
    }

    if (isError) toast.error(error?.data?.message);
  }, [isSuccess, isError, error, navigate]);

  return (
    <main className="w-screen h-screen !font-poppins">
      <div className="flex flex-col w-full h-full md:flex-row gap-x-24 gap-y-6">
        <div>
          <img
            src={SideImage}
            alt="bg"
            className="object-cover w-full h-[200px] md:h-full md:max-w-[480px]"
          />
        </div>

        <div className="flex flex-1 h-full md:items-center">
          <div className="flex flex-col items-start md:justify-center gap-y-2 max-md:pl-4">
            <h1 className="mb-3 text-3xl">Welcome Back !!!</h1>
            <h1 className="text-3xl font-bold ">Login</h1>
            <h2 className="mb-4 text-xl">
              Don't have account?{" "}
              <Link
                to="/signup"
                className="text-blue-600 underline outline-none visited:text-purple-700"
              >
                Create one !!!
              </Link>
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center justify-center w-10/12 mt-2 text-base md:w-9/12 gap-y-2.5"
            >
              <Input
                autoComplete="email"
                label="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                error={validationError.email}
                placeholder="Enter Email"
              />
              <Input
                autoComplete="off"
                label="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                error={validationError.password}
                placeholder="Enter Password"
                showToggle
                type="password"
              />

              <div className="flex justify-end w-full">
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-600 underline outline-none visited:text-purple-700"
                >
                  forgot password ?
                </Link>
              </div>

              <Button
                type="submit"
                loading={isLoading}
                className="w-full"
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
