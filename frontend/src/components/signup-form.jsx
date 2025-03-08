/* eslint-disable react/prop-types */
import { Computer, Eye, EyeClosedIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

const signupSchema = z.object({
  fullname: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
  organisation: z.string().min(1),
});

export function SignupForm({ className, ...props }) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  function handleFormSubmit(data) {
    console.log(data);
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
            <h1 className="text-xl font-bold">HackaMan</h1>
            <div className="text-center text-sm">
              Already a User?{" "}
              <Link to="/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="fullname">Fullname</Label>
              <Input
                id="fullname"
                type="fullname"
                placeholder="john_doe"
                {...register("fullname")}
              />
              {errors.username && (
                <div className="text-red-500 mb-0.5 -mt-1">
                  {errors.username.message}
                </div>
              )}
            </div>
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
            <div className="grid gap-3">
              <Label htmlFor="organisation">
                Select organisation/University{" "}
              </Label>
              <Input
                id="org"
                placeholder="Google / IITB"
                type="text"
                {...register("organisation")}
              />{" "}
              {errors.organisation && (
                <div className="text-red-500 mb-0.5 -mt-1">
                  {errors.organisation.message}
                </div>
              )}
            </div>
            <Button type="submit" className="w-full">
              Signup
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
