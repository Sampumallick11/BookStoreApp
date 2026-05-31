import React from 'react'
import bannner from "../banner.jpg"
function Banner() {
  return (
  <>
<div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 dark:bg-slate-900 dark:text-white">
    <div className="w-1/2 md:w-1/2 mt-12 md:mt-32">
    <div className="space-y-12">
            <h1 className="text-4xl font-bold">
    Hello!! Welcome to Our Bookstore and learn something <span className="text-pink-500">new everyday!!!</span>
        </h1>
    
<p className="text-xl font-medium text-gray-500">
    Explore our extensive collection of books, from timeless classics to contemporary bestsellers. Whether you're a passionate reader or just looking for your next great read, our bookstore has something for everyone. Dive into the world of literature and discover stories that will captivate your imagination and enrich your mind.
</p>
 {/* Email Input */}
  <label className="flex items-center gap-2 border rounded-md px-3 py-2 w-80">

  <svg
    className="h-5 w-5 opacity-70"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>

    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>

  <input
    type="email"
    className="outline-none w-full bg-transparent"
    placeholder="Enter your Email"
  />

</label>

  
  
</div> 
 {/* Button */}
  <button className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-700 duration-300 mt-6">
  Get Started
</button>
</div>
    <div className=" order-1 w-1/2 md:w-1/2">
    <img src = {bannner} className="w-92 h-92 object-cover"></img>
    </div>
</div>

  </>

  )
}

export default Banner