import OTPForm from "@/components/otp-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OTPFormPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // IF token exist don't let user use this page
    if (localStorage.getItem("token")) {
      navigate("/");
    }
    // IF email doesn't exist in user session then don't let user use this page
    if (!sessionStorage.getItem("email")) {
      navigate("/");
    }
  });
  return (
    <div className="bg-background w-[100vw] h-[100vh] flex items-center justify-center ">
      <div className="max-w-max p-3 outline-1 rounded-3xl">
        <OTPForm />
      </div>
    </div>
  );
}
