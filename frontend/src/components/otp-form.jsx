import { useEffect, useState } from "react";
import { InputOTPPattern } from "./authorization/InputOtpPattern";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { HandleError, HandleSuccess } from "@/lib/toasts";
import { ToastContainer } from "react-toastify";
import axios from "axios";

export default function OTPForm() {
  const [email, setEmail] = useState(null);
  const [otp, setOtp] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    setEmail(sessionStorage.getItem("email"));
  }, []);

  function handleFormSubmit(e) {
    try {
      e.preventDefault();

      if (
        String(Number(otp)) === "NaN" ||
        !otp ||
        otp < 100000 ||
        otp > 999999
      ) {
        HandleError("Please enter OTP correctly");
        return;
      }

      if (!email) {
        navigate("/signup");
        return;
      }

      const data = { otp, email };

      axios
        .post("/auth/verifyotp", data)
        .then((res) => {
          const data = res.data;
          if (data.success) {
            localStorage.setItem("token", data.data.token);
            localStorage.setItem("name", data.data.name);
            HandleSuccess(data.message);
            setTimeout(() => {
              navigate("/");
            }, 2000);
          } else {
            console.log(res);
            HandleError("Unknown Error, Please check log in console");
          }
        })
        .catch((err) => {
          console.error("Error fetching data: ", err);
          HandleError(err.response.data.message);
        });
    } catch (err) {
      console.error("Error submitting form: ", err);
      HandleError(err.message);
    }
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="p-4 flex flex-col gap-3.5 items-center w-xl"
    >
      <h2 className="font-medium text-2xl">Verify Your Otp</h2>
      <p className="tracking-wider font-medium">
        Please check your <strong>{email}</strong> for OTP
      </p>
      <InputOTPPattern value={otp} setValue={setOtp} />
      <Button className="w-32 m-2 cursor-pointer">Verify</Button>
      <ToastContainer />
    </form>
  );
}
