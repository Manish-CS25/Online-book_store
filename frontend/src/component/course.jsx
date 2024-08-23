import React from "react";
import { useState, useEffect } from "react";
import list from "../assets/list.json"
import Cards from "./Cards";
import { Link } from "react-router-dom";

function course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center ">
          <h1 className="text-2xl md:text-4xl">
            Welcome! Start Your Educational Journey{" "}
            <span className="text-pink-500">Here!:)</span> Premium Books
          </h1>
          <p className="mt-12">
            We’re delighted to have you explore our collection of books, where
            every title opens a new world of stories and knowledge. Whether
            you're searching for the latest bestsellers, timeless classics, or
            hidden gems, our curated selection has something for every reader.
            Dive into our shelves, and let your next great read find you. Happy
            browsing!
          </p>
          <Link to="/">
            <button className="mt-8 bg-pink-500 text-white px-4 py-2 rounded-md hover:text-black">
              Free Books
            </button>
          </Link>
 
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
              list.map((item) => (
                <Cards item={item} key={item.id} />
              ))
            }

          </div>
        </div>
      </div>
    </>
  );
}

export default course;
