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
      toast.error(error.data.message);
      navigate("/login");
    }
  }, [data, isSuccess, isError]);

  return (
    <div className="flex flex-col-reverse items-center w-screen h-screen md:flex-row">
      <div className="h-full w-full md:w-[385px]">
        <form className="mx-4 my-12 md:mr-0 md:ml-12" onSubmit={handleSubmit}>
          <div className="flex justify-start">
            <Logo className="text-4xl" />
          </div>
          <h2 className="mt-8 mb-6 font-serif text-3xl">Reset your password</h2>
          <p className="w-11/12 mt-3 mb-10 text-sm font-medium text-[#1c2d38] font-roboto ">
            To reset your password, enter your email below and submit. An email
            will be sent to you with instructions about how to complete the
            process.
          </p>
          <fieldset>
            <label className="text-sm font-bold">
              New Password
              <div className="mt-1">
                <div>
                  <Input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={data.password}
                    className="md:px-2.5 md:py-2 px-4 py-4 text-sm border border-black rounded-md font-medium md:w-10/12"
                  />
                </div>
              </div>
            </label>

            <label className="text-sm font-bold">
              Confirm Password
              <div className="mt-1">
                <div>
                  <Input
                    name="confirmPassword"
                    onChange={handleChange}
                    value={data.confirmPassword}
                    className="md:px-2.5 md:py-2 px-4 py-4 text-sm border border-black rounded-md font-medium md:w-10/12"
                  />
                </div>
              </div>
            </label>
          </fieldset>
          <footer>
            <Button
              type="submit"
              loading={isLoading}
              disabled={
                !(data.password.length && data.confirmPassword.length && isSame)
              }
              className="w-full md:w-fit px-3 py-2 md:py-1.5 mt-12 md:mt-6 mb-4 text-base md:text-sm font-bold bg-green-700"
            >
              Change Password
            </Button>
          </footer>
        </form>
      </div>
      <div
        className="flex-1 hidden md:block md:w-[200px] md:h-screen"
        style={{
          backgroundImage: `url(
              "https://assets.mongodb-cdn.com/mms/static/images/auth/login_desktop.svg"
            )`,
        }}
      ></div>
      <div className="block w-full h-16 bg-black lg:hidden"></div>
    </div>
  );
}
