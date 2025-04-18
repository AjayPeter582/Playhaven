import React, { useState, useEffect } from "react";
import video1 from "../assets/GOT.mp4"
import video2 from "../assets/CHB.mp4"
import video3 from "../assets/FC.mp4"
import { Link } from "react-router-dom";

import moviePoster1 from "../assets/home1.jpg"; // Update with your actual filenames
import moviePoster2 from "../assets/home2.jpg"; // Update with your actual filenames
import moviePoster3 from "../assets/home3.jpg"; // Update with your actual filenames
import moviePoster4 from "../assets/home4.jpg"; // Update with your actual filenames
import moviePoster5 from "../assets/home5.jpg"; // Update with your actual filenames


const videos = [video1, video2, video3];
const moviePosters = [moviePoster1, moviePoster2, moviePoster3, moviePoster4, moviePoster5];

const MainHomePage = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      {/* Background Video */}
      <video
        key={videos[currentVideoIndex]}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100"
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
      </video>

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold animate-fadeIn">
          Unlimited Entertainment, Anytime, Anywhere
        </h1>
        <p className="mt-4 text-lg md:text-xl animate-slideIn">
          Stream your favorite movies, TV shows, and exclusive content on PlayHaven.
        </p>
        <Link to="/Subscriptions">
        <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-bold text-lg rounded-lg transition-transform duration-200 hover:scale-110 animate-bounce">
          Start Watching
        </button>
        </Link>

        {/* Movie List */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div
              key={index}
              className="w-40 h-56 bg-gray-800 rounded-lg flex items-center justify-center text-xl font-bold text-white shadow-lg transition-transform duration-300 hover:scale-105 animate-fadeIn"
            >
              <img 
                className="hmovie-image" 
                src={moviePosters[index]}
                alt={`Movie ${item}`} 
              />
              <div className="hmovie-title"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainHomePage;
