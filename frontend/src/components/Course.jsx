import React from 'react'
import { Link } from 'react-router-dom';
import book from '../list.json';
import Cards from './Cards';
function Course() {
 return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            We understand that finding the right book can be overwhelming, but we're here to make it easier for you. Our team of book enthusiasts has carefully curated a collection of books that we believe will captivate your imagination and enrich your reading experience.
            we have a wide range of genres, including fiction, non-fiction, mystery, romance, science fiction, and more. Whether you're looking for a thrilling page-turner or a thought-provoking piece of literature, we have something for everyone.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;