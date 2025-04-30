import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Input, Logo, Button } from "../components/common";

import { useForgotPasswordMutation } from "../store";
import { useNavigate } from "react-router-dom";

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [forgotPassword, { isLoading, isError, isSuccess, error }] =
    useForgotPasswordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    forgotPassword({ email: value });
  };

  const handleChange = (e) => {
    setValue(e.target.value.trim());
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Reset password email is sent successfully");
      navigate("/login");
    }

    if (isError) toast.error(error?.data?.message);
  }, [isSuccess, isError, error, navigate]);

  return (
    <div className="w-screen h-screen font-poppins">
      <div className="flex w-full h-full gap-x-14">
        <div className="md:max-w-[364px] px-4 py-12 md:pr-0 md:pl-12">
          <div className="flex justify-start">
            <Logo className="text-4xl" />
          </div>

          <h2 className="mt-8 mb-6 font-serif text-3xl">
            Forgot your password
          </h2>
          <p className="w-11/12 mt-3 mb-10 text-sm font-medium text-[#1c2d38] font-roboto ">
            To reset your password, enter your email below and submit. An email
            will be sent to you with instructions about how to complete the
            process.
          </p>

          <form className="" onSubmit={handleSubmit}>
            <Input
              name="email"
              label="Email Address"
              placeholder="Enter Email"
              onChange={handleChange}
              autoComplete="email"
              value={value}
            />

            <footer>
              <Button
                className="w-full"
                type="submit"
                loading={isLoading}
                disabled={!value.length}
              >
                Reset Password
              </Button>
            </footer>
          </form>
        </div>

        <div className="flex-1">
          <img
            src="https://assets.mongodb-cdn.com/mms/static/images/auth/login_desktop.svg"
            alt="bg"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="block w-full h-16 bg-black lg:hidden"></div>
      </div>
    </div>
  );
}
