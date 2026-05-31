import React from 'react'

import list from "../list.json";

import Cards from "./Cards";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Freebook() {

  const filterData = list.filter(
    (data) => data.category === "Free"
  );

  return (

    <div  className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-10 dark:bg-slate-900 dark:text-white">

      <div className="mb-5">

        <h1 className="text-2xl font-bold">
          Free Offered Books
        </h1>

        <p>
          Explore our collection of free books.
        </p>

      </div>

      {/* Slider */}

      <Swiper

        modules={[Navigation, Pagination]}

        navigation

        pagination={{ clickable: true }}

        spaceBetween={20}

        slidesPerView={3}

        breakpoints={{

          0: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },

        }}

      >

        {filterData.map((item) => (

          <SwiperSlide key={item.id}>

            <Cards item={item} />

          </SwiperSlide>

        ))}

      </Swiper>

    </div>
  )
}

export default Freebook