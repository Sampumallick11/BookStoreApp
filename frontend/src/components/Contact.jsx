import React from "react";
import { Link } from "react-router-dom";

function Contact() {

  return (
    <>

      <div className="min-h-screen flex items-center justify-center bg-slate-100">

        <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-white relative">

          {/* Close Button */}

          <Link
            to="/"
            className="absolute top-2 right-4 text-2xl cursor-pointer"
          >
            ✕
          </Link>

          <h1 className="text-3xl font-bold mb-6">
            Contact Us
          </h1>

          <form>

            {/* Name */}

            <div className="mb-4">

              <label className="block mb-2 text-sm font-medium">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-400"
              />

            </div>

            {/* Email */}

            <div className="mb-4">

              <label className="block mb-2 text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-400"
              />

            </div>

            {/* Message */}

            <div className="mb-4">

              <label className="block mb-2 text-sm font-medium">
                Message
              </label>

              <textarea
                rows="4"
                placeholder="Type your message"
                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-400"
              ></textarea>

            </div>

            {/* Button */}

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-200"
            >
              Submit
            </button>

          </form>

        </div>

      </div>

    </>
  );
}

export default Contact;