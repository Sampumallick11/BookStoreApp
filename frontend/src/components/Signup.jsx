import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";

function Signup() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-slate-100">

        <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] relative">

          {/* Close Button */}

          <Link
            to="/"
            className="absolute top-2 right-2 text-xl"
          >
            ✕
          </Link>

          <h1 className="text-2xl font-bold mb-5">
            Signup
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Name */}

            <div className="mb-4">

              <label>Name</label>

              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-full mt-2 px-3 py-2 border rounded-md outline-none"

                {...register("fullname", {
                  required: true,
                })}
              />

              {errors.fullname && (
                <p className="text-red-500 text-sm mt-1">
                  This field is required
                </p>
              )}

            </div>

            {/* Email */}

            <div className="mb-4">

              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 px-3 py-2 border rounded-md outline-none"

                {...register("email", {
                  required: true,
                })}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  This field is required
                </p>
              )}

            </div>

            {/* Password */}

            <div className="mb-4">

              <label>Password</label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-2 px-3 py-2 border rounded-md outline-none"

                {...register("password", {
                  required: true,
                })}
              />

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  This field is required
                </p>
              )}

            </div>

            {/* Buttons */}

            <div className="flex justify-between items-center mt-6">

              <button
                type="submit"
                className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700"
              >
                Signup
              </button>

              <p>

                Have account?{" "}

                <button
                  type="button"
                  className="text-blue-500 underline"

                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>

              </p>

            </div>

          </form>

        </div>

      </div>

      <Login />

    </>
  );
}

export default Signup;