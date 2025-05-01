import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { Logo, Button, Input } from "../components/common";

import { useResetPasswordMutation } from "../store";

export default function ResetPasswordPage() {
  const [resetPassword, { isLoading, isSuccess, isError, error }] =
    useResetPasswordMutation();
  const [data, setData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [isSame, setSame] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlFragments = window.location.href.split("/");
    const token = urlFragments[urlFragments.length - 1];

    if (data.password.length < 3)
      return toast.error("Password should be more then 3 characters");
    resetPassword({ ...data, token });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    setSame(data.password.length > 0 && data.password === data.confirmPassword);

    if (isSuccess) {
      toast.success("Password is reset successfully");
      navigate("/login");
    }

    if (isError) {
      toast.error(error?.data?.message);
      navigate("/login");
    }
  }, [data, isSuccess, isError, error, navigate]);

  return (
    <div className="w-screen h-screen font-poppins">
      <div className="flex flex-col-reverse items-center justify-center w-full h-full md:flex-row ">
        <div className="md:max-w-[385px] h-full px-4 py-12 md:pr-10 md:pl-12">
          <div className="flex justify-start">
            <Logo className="text-4xl" />
          </div>
          <h2 className="mt-8 mb-6 font-serif text-3xl">Reset your password</h2>
          <p className="w-11/12 mt-3 mb-10 text-sm font-medium text-[#1c2d38] font-roboto ">
            To reset your password, enter your email below and submit. An email
            will be sent to you with instructions about how to complete the
            process.
          </p>
          <form onSubmit={handleSubmit}>
            <fieldset className="flex flex-col gap-y-2.5">
              <Input
                label="Password"
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={handleChange}
                value={data.password}
                autoComplete="off"
              />

              <Input
                label="Confirm Password"
                name="confirmPassword"
                placeholder="Enter Confirm Password"
                onChange={handleChange}
                value={data.confirmPassword}
                autoComplete="off"
              />
            </fieldset>
            <footer className="flex justify-end mt-2.5">
              <Button
                type="submit"
                loading={isLoading}
                disabled={
                  !(
                    data.password.length &&
                    data.confirmPassword.length &&
                    isSame
                  )
                }
                className="md:w-7/12"
              >
                Change Password
              </Button>
            </footer>
          </form>
        </div>

        <div className="flex-1 hidden md:block md:w-[200px] md:h-screen">
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
