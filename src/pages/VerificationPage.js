import { useEffect } from "react";
import { useVerifyEmailMutation } from "../store";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function VerificationPage() {
  const [verifyEmail, { isSuccess }] = useVerifyEmailMutation();
  const navigate = useNavigate();
  useEffect(() => {
    const token = window.location.href.split("?")[1]?.replace("token=", "");
    verifyEmail(token);
  }, [verifyEmail]);

  let message = "Verifying your email...";
  if (isSuccess) {
    message = "Your Email is Verified Successfully";
  } else {
    message = "Your Link is expired or invalid";
  }

  if (isSuccess) {
    setTimeout(() => {
      navigate("/login");
      toast.success("Email verified Successfully");
    }, 2000);
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="w-10/12 px-3 py-4 border-4 border-black rounded-xl">
        <h1 className="text-2xl font-bold">Email Verification</h1>
        <div>{message}</div>
        {isSuccess && <div>Redirecting...</div>}
      </div>
    </div>
  );
}
