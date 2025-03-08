/* eslint-disable react/prop-types */
import { Computer, Eye, EyeClosedIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { HandleError, HandleSuccess } from "@/lib/toasts";
import { useState } from "react";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export function LoginForm({ className, ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  function handleFormSubmit(data) {
    try {
      axios
        .post("/auth/login", data)
        .then((res) => {
          const data = res.data;
          if (data.success) {
            localStorage.setItem("token", data.data.token);
            localStorage.setItem("name", data.data.name);
            HandleSuccess(data.message);
            setInterval(() => {
              navigate("/");
            }, 2000);
          } else {
            console.log(res);
            HandleError("Unknown Error, Please check log in console");
          }
        })
        .catch((err) => {
          HandleError(err.response.data.message);
        });
    } catch (error) {
      console.log("Error is ", error);
      HandleError(error);
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <Computer className="size-6" />
              </div>
              <span className="sr-only">HackaMan</span>
            </a>
            <h1 className="text-xl font-bold">Welcome to HackaMan</h1>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="underline underline-offset-4">
                signup
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register("email")}
              />
              {errors.email && (
                <div className="text-red-500 mb-0.5 -mt-1">
                  {errors.email.message}
                </div>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password">Password</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="password"
                  type={`${showPassword ? "text" : "password"}`}
                  placeholder="....."
                  {...register("password")}
                />
                <button onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeClosedIcon /> : <Eye />}
                </button>
              </div>
              {errors.password && (
                <div className="text-red-500 mb-0.5 -mt-1">
                  {errors.password.message}
                </div>
              )}
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
