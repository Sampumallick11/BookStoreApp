import React from 'react'

function Cards({ item }) {
  return (
    <div className="p-3">

      {/* Card */}
      <div className="card bg-base-100 shadow-xl rounded-2xl h-[500px] hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white">

        {/* Image */}
        <figure className="h-[320px] overflow-hidden">

          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
          />

        </figure>

        {/* Body */}
        <div className="card-body">

          <h2 className="card-title justify-between">

            {item.title}

            <div className="badge badge-secondary">
              FREE
            </div>

          </h2>

          <p className="text-gray-500">
            {item.name}
          </p>

          <div className="card-actions justify-between items-center mt-4">

            <span className="font-bold text-lg">
              ₹ {item.price}
            </span>

            <button className="btn btn-outline btn-sm rounded-full">
              Buy Now
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Cards