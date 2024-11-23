import React, { useEffect, useRef, useState, useCallback } from "react";
import { FaHome, FaFilm, FaUserTie, FaDollarSign, FaCalendarAlt, FaCameraRetro } from "react-icons/fa";
import Link from "next/link";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import Image from "next/image";
import { motion } from "framer-motion";
import { animated, useSpring } from "@react-spring/web";

const MovieIMDB = () => {
  const taglineRef = useRef<HTMLDivElement>(null);

  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { TextPlugin } = await import("gsap/TextPlugin");
      gsap.registerPlugin(TextPlugin);

      const taglineText = "Predicting IMDb Ratings, One Movie at a Time.";
      if (taglineRef.current) {
        gsap.to(taglineRef.current, {
          text: taglineText,
          duration: 2.5,
          delay: 0.5,
          ease: "power2.inOut",
        });
      }
    };

    loadGSAP();
  }, []);

  const springProps = useSpring({
    scale: 1,
    rotateY: 0,
    config: { mass: 1, tension: 280, friction: 60 },
  });

  return (
    <div className="w-full bg-gradient-to-b from-gray-900 to-black text-gray-200 relative">
      {/* Sidebar */}
      <div className="absolute top-0 left-0 h-full w-16 md:w-20 bg-gradient-to-b from-blue-500 to-blue-800 flex items-center justify-center">
        <Link href="/">
          <div className="flex flex-col items-center cursor-pointer group">
            <FaHome className="text-white text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300" />
            <p className="text-white text-sm md:text-base mt-2 group-hover:font-semibold">
              Home
            </p>
          </div>
        </Link>
      </div>

      {/* Particle Background with Title */}
      <div className="relative w-full h-[600px] bg-cover bg-center">
        {/* Background GIF */}
        <Image
          src="/assets/imdb-bg.gif"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full opacity-70"
        />
        {/* Particles */}
        <Particles
          className="absolute inset-0 w-full h-full"
          id="tsparticles"
          init={particlesInit}
          options={{
            fpsLimit: 60,
            fullScreen: false,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            particles: {
              color: { value: "#ffffff" },
              links: { color: "#ffffff", distance: 120, enable: true, opacity: 0.5, width: 1 },
              collisions: { enable: true },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 2,
                straight: false,
              },
              number: { density: { enable: true, area: 1000 }, value: 90 },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 5 } },
            },
            detectRetina: true,
          }}
        />
        {/* Title and Tagline */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-6xl font-extrabold text-white font-modica">
            IMDb Movie Rating Prediction
          </h1>
          <div
            ref={taglineRef}
            className="mt-6 text-2xl md:text-3xl font-extrabold text-yellow-400 text-center"
          ></div>
        </div>
      </div>

{/* Main Content */}
<div className="ml-16 md:ml-20 lg:ml-24 p-4 sm:p-6">
  {/* Introduction Section */}
  <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 text-center sm:text-left">
      Introduction
    </h2>
    <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center sm:text-left">
      This project leverages statistical modeling to predict IMDb ratings for upcoming blockbuster movies. By analyzing data from over 2,000 movies, the model identifies key factors influencing audience ratings and provides insights into future audience preferences.
    </p>
  </div>

  {/* Key Highlights Section */}
  <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 text-center sm:text-left">
      Key Highlights
    </h2>
    <ul className="list-disc list-inside text-base sm:text-lg md:text-xl text-gray-300 space-y-4">
      <li>
        <strong>🎯 Purpose:</strong> To predict IMDb ratings for 12 major blockbusters releasing in November 2023.
      </li>
      <li>
        <strong>🔍 Technology:</strong> <a href="https://www.r-project.org/" className="text-blue-400 hover:underline">R</a> for statistical modeling, <a href="https://ggplot2.tidyverse.org/" className="text-blue-400 hover:underline">ggplot2</a> for visualization, and advanced regression techniques for predictive accuracy.
      </li>
      <li>
        <strong>📊 Results:</strong> Achieved low Mean Squared Error (MSE) for IMDb predictions, with robust cross-validation metrics.
      </li>
      <li>
        <strong>💡 Challenges:</strong> Tackled issues like heteroskedasticity, multicollinearity, and skewed predictors while optimizing model complexity.
      </li>
    </ul>
  </div>

  {/* Dataset Section */}
  <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 text-center sm:text-left">
      Dataset
    </h2>
    <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 text-center sm:text-left">
      The dataset consists of key features from over 2,000 movies, including:
    </p>
    <ul className="list-disc list-inside text-base sm:text-lg md:text-xl text-gray-300 space-y-4">
      <li>IMDb ratings as the target variable.</li>
      <li>Film characteristics: budget, duration, release date, etc.</li>
      <li>Cast details: lead actors and IMDb star meter rankings.</li>
      <li>Production details: director, distributor, cinematographer, etc.</li>
      <li>Dummy variables for genres and maturity ratings.</li>
    </ul>
  </div>

{/* Modeling Approach Section */}
<div className="container mx-auto py-12 px-4 sm:px-6">
  <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 text-center sm:text-left">
    Modeling Approach
  </h2>

  <div className="relative flex flex-col space-y-12">
    {/* Preprocessing Pipeline */}
    <div className="flex flex-col md:flex-row items-start mb-12 md:mb-20">
      <div className="bg-blue-500 text-white text-lg sm:text-xl font-bold px-6 py-3 rounded-md shadow-lg text-center flex-shrink-0 w-full md:w-60 mb-6 md:mb-0">
        Preprocessing Pipeline
      </div>
      <div className="h-1 md:h-auto md:w-1 bg-gray-500 mx-0 md:mx-8"></div>
      <div className="text-base sm:text-lg md:text-xl text-gray-300 flex-1">
        <p className="mb-4">
          Before training the model, data was preprocessed to ensure consistency:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Data Cleaning:</strong> Removed invalid entries and missing values.</li>
          <li><strong>Feature Engineering:</strong> Dummified categorical variables (genres, ratings).</li>
          <li><strong>Normalization:</strong> Applied Min-Max scaling for numeric predictors.</li>
          <li><strong>Outlier Handling:</strong> Detected and handled extreme values using Z-scores.</li>
        </ul>
      </div>
    </div>

    {/* Model Architecture */}
    <div className="flex flex-col md:flex-row items-start mb-12 md:mb-20">
      <div className="bg-green-500 text-white font-bold text-lg sm:text-xl px-6 py-3 rounded-md shadow-lg text-center flex-shrink-0 w-full md:w-60 mb-6 md:mb-0">
        Model Architecture
      </div>
      <div className="h-1 md:h-auto md:w-1 bg-gray-500 mx-0 md:mx-8"></div>
      <div className="text-base sm:text-lg md:text-xl text-gray-300 flex-1">
        <p className="mb-4">
          A robust linear regression model formed the backbone of this project, enhanced with:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Polynomial Regression:</strong> Captured non-linear relationships in predictors.</li>
          <li><strong>Splines:</strong> Improved fit for variables like budget and star rankings.</li>
          <li><strong>Interaction Terms:</strong> Explored dependencies between genres and budget.</li>
          <li><strong>Validation:</strong> Performed k-fold cross-validation to ensure model robustness.</li>
        </ul>
      </div>
    </div>

    {/* Evaluation Metrics */}
    <div className="flex flex-col md:flex-row items-start mb-12 md:mb-20">
      <div className="bg-red-500 text-white text-lg sm:text-xl font-bold px-6 py-3 rounded-md shadow-lg text-center flex-shrink-0 w-full md:w-60 mb-6 md:mb-0">
        Evaluation Metrics
      </div>
      <div className="h-1 md:h-auto md:w-1 bg-gray-500 mx-0 md:mx-8"></div>
      <div className="text-base sm:text-lg md:text-xl text-gray-300 flex-1">
        <p className="mb-4">The following metrics were used to evaluate the model:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>R-Squared:</strong> Assessed goodness-of-fit for the training data.</li>
          <li><strong>MSE:</strong> Measured prediction error on validation datasets.</li>
          <li><strong>Residual Analysis:</strong> Checked for non-linearities and heteroskedasticity.</li>
        </ul>
      </div>
    </div>
  </div>
</div>

{/* Visualizations Section */}
<div className="container mx-auto py-12 px-4 sm:px-6">
  <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 text-center sm:text-left">
    Visualizations
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div className="bg-gray-800 flex items-center justify-center h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
      <Image
        src="/assets/correlation-matrix.png"
        alt="Correlation Matrix"
        layout="intrinsic"
        width={800}
        height={600}
        className="rounded-lg"
      />
    </div>
    <div className="bg-gray-800 flex items-center justify-center h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
      <Image
        src="/assets/residual-plot.png"
        alt="Residual Plot"
        layout="intrinsic"
        width={800}
        height={600}
        className="rounded-lg"
      />
    </div>
  </div>
  <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-6 text-center sm:text-left">
    Visualizations include correlation matrices to analyze feature relationships and residual plots to ensure the model adheres to linearity assumptions.
  </p>
</div>


{/* Predictions Section */}
<div className="container mx-auto py-12 px-6">
  <h2 className="text-4xl font-extrabold text-white mb-6">Predictions</h2>
  <p className="text-xl text-gray-300 mb-6">
    Using the finalized model, IMDb ratings for 12 upcoming movies in November 2023 were predicted. Hover over the posters to reveal the IMDb scores!
  </p>

  {/* Movie Cards with Animation */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {[
      {
        title: "Pencils vs Pixels",
        rating: 6.8,
        poster: "https://m.media-amazon.com/images/M/MV5BNDUyODhmOTktNzNhNS00YzZmLTllMzktYTU1MDcxZTQxNDllXkEyXkFqcGdeQXVyMTI1NjI4NjY1._V1_FMjpg_UX1000_.jpg",
      },
      {
        title: "The Dirty South",
        rating: 6.1,
        poster: "https://upload.wikimedia.org/wikipedia/en/c/c2/Dirty_south_2023_poster.jpg",
      },
      {
        title: "The Marvels",
        rating: 6.5,
        poster: "https://m.media-amazon.com/images/M/MV5BM2U2YWU5NWMtOGI2Ni00MGMwLWFkNjItMjgyZWMxNjllNTMzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      },
      {
        title: "The Holdovers",
        rating: 6.5,
        poster: "https://m.media-amazon.com/images/M/MV5BNDc2MzNkMjMtZDY5NC00NmQ0LWI1NjctZjRhNWIzZjc4MGRiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg",
      },
      {
        title: "Next Goal Wins",
        rating: 7.5,
        poster: "https://m.media-amazon.com/images/M/MV5BNDIwNWQwYTktZGQwYS00NzNjLThhNDMtODBlYmI5N2E0NjM0XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
      },
      {
        title: "Thanksgiving",
        rating: 7.1,
        poster: "https://m.media-amazon.com/images/M/MV5BOGZhOGJjZTAtOTJmYS00ZTk2LTgxYWEtNjM3ZmUxMjY2NWFiXkEyXkFqcGdeQXVyNjU2NTI4MjE@._V1_.jpg",
      },
      {
        title: "The Hunger Games: The Ballad of Songbirds and Snakes",
        rating: 5.4,
        poster: "https://m.media-amazon.com/images/M/MV5BOTZmMmY2MzctMjU2Yy00YjJlLTk1NjAtY2U4MmMxOWZkZWY4XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_FMjpg_UX1000_.jpg",
      },
      {
        title: "Trolls Band Together",
        rating: 6.4,
        poster: "https://m.media-amazon.com/images/M/MV5BMTY4MDk2YWUtNWY1My00YjAxLWI4ZGQtMmRhN2FiNDI4NDRjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
      },
      {
        title: "Leo",
        rating: 6.9,
        poster: "https://m.media-amazon.com/images/M/MV5BZDNiZWI3ZmItMjY4OS00Mjk5LThlNjktMmMwZDM1OTEwOGVmXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_QL75_UX190_CR0,0,190,281_.jpg",
      },
      {
        title: "Dream Scenario",
        rating: 6.8,
        poster: "https://m.media-amazon.com/images/M/MV5BZDI4MjI1YmYtYzg1Ny00MWQzLWIwNTgtNmFkMWNhYTYzYjdkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
      },
      {
        title: "Wish",
        rating: 7.0,
        poster: "https://upload.wikimedia.org/wikipedia/en/d/de/WishMoviePoster.jpg",
      },
      {
        title: "Napoleon",
        rating: 8.8,
        poster: "https://m.media-amazon.com/images/M/MV5BZWIzNDAxMTktMDMzZS00ZjJmLTlhNjYtOGUxYmZlYzVmOGE4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
      },
    ].map((movie, index) => (
      <div
        key={index}
        className="relative group w-full h-[500px] bg-black rounded-lg overflow-hidden cursor-pointer"
      >
        {/* Movie Poster */}
        <div
          className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
          style={{ backgroundImage: `url(${movie.poster})` }}
        ></div>

        {/* Title */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center p-4 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
          <p className="text-xl font-semibold text-white">{movie.title}</p>
        </div>

        {/* Rating (Replaces Title on Hover) */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <p className="text-2xl font-bold bg-yellow-500 text-black px-6 py-3 rounded-md">
            IMDb Rating: {movie.rating.toFixed(1)}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

{/* Key Insights Section */}
<div className="container mx-auto py-16 px-6">
  <h2 className="text-5xl font-extrabold text-white text-center mb-12">
    Key Insights
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
    {/* Genre Influence */}
    <motion.div
      whileHover={{ scale: 1.1, rotate: -3 }}
      whileTap={{ scale: 0.9 }}
      className="bg-gradient-to-r from-indigo-500 to-purple-700 text-white p-6 rounded-lg shadow-lg transform transition-transform duration-300"
    >
      <div className="flex items-center space-x-4">
        <FaFilm className="text-4xl" />
        <h3 className="text-2xl font-bold">Genre Influence</h3>
      </div>
      <p className="mt-4 text-lg">
        Documentaries (+1.023) and Animations (+0.937) excel, while Horror
        (-0.538) and Action (-0.309) underperform. This reflects audience
        preferences and genre-specific appeal.
      </p>
    </motion.div>

 {/* Seasonal Releases */}
 <motion.div
 whileHover={{ scale: 1.1, rotate: 3 }}
 whileTap={{ scale: 0.9 }}
      className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white p-6 rounded-lg shadow-lg"
    >
      <div className="flex items-center space-x-4">
        <FaCalendarAlt className="text-4xl" />
        <h3 className="text-2xl font-bold">Seasonal Advantage</h3>
      </div>
      <p className="mt-4 text-lg">
        Movies released in November scored +0.6 higher than those in summer and spring, driven by family audiences.
      </p>
    </motion.div>

    {/* Budget Insights */}
    <motion.div
      whileHover={{ scale: 1.1, rotate: +3 }}
      whileTap={{ scale: 0.9 }}
      className="bg-gradient-to-r from-green-500 to-teal-700 text-white p-6 rounded-lg shadow-lg transform transition-transform duration-300"
    >
      <div className="flex items-center space-x-4">
        <FaDollarSign className="text-4xl" />
        <h3 className="text-2xl font-bold">Budget Insights</h3>
      </div>
      <p className="mt-4 text-lg">
        Films with budgets exceeding $50M tend to score an average of 0.8 points
        higher, showing a strong correlation between investment and quality
        perception.
      </p>
    </motion.div>

    {/* Star Power */}
    <motion.div
      whileHover={{ scale: 1.1, rotate: -5 }}
      whileTap={{ scale: 0.9 }}
      className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white p-6 rounded-lg shadow-lg transform transition-transform duration-300"
    >
      <div className="flex items-center space-x-4">
        <FaUserTie className="text-4xl" />
        <h3 className="text-2xl font-bold">Star Power</h3>
      </div>
      <p className="mt-4 text-lg">
        Lead actors with IMDb Star Meter ranks less than 100 significantly boost ratings,
        adding an average of +0.7 to a movie's score.
      </p>
    </motion.div>

    {/* Cinematography */}
    <motion.div
      whileHover={{ scale: 1.1, rotate: -5 }}
      whileTap={{ scale: 0.9 }}
      className="bg-gradient-to-r from-pink-500 to-red-600 text-white p-6 rounded-lg shadow-lg transform transition-transform duration-300"
    >
      <div className="flex items-center space-x-4">
        <FaCameraRetro className="text-4xl" />
        <h3 className="text-2xl font-bold">Cinematography</h3>
      </div>
      <p className="mt-4 text-lg">
        Expert cinematographers with more than 6 movies boost average ratings by +0.5,
        highlighting the importance of visual storytelling.
      </p>
    </motion.div>

    {/* Release Timing */}
    <motion.div
      whileHover={{ scale: 1.1, rotate: +4 }}
      whileTap={{ scale: 0.9 }}
      className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-6 rounded-lg shadow-lg transform transition-transform duration-300"
    >
      <div className="flex items-center space-x-4">
        <FaCalendarAlt className="text-4xl" />
        <h3 className="text-2xl font-bold">Release Timing</h3>
      </div>
      <p className="mt-4 text-lg">
        Movies released in November and December outperform others by +0.6,
        emphasizing the role of strategic release dates.
      </p>
    </motion.div>
  </div>
</div>

{/* Placeholder for Additional Resources */}
<div className="container mx-auto py-12 px-6">
  <h2 className="text-4xl font-extrabold text-white mb-6">Additional Resources</h2>
  <div className="relative group bg-gray-800 flex flex-col items-center justify-center h-[400px] rounded-lg cursor-pointer overflow-hidden">
    {/* Background Image */}
    <Image
      src="/assets/movies.jpg" // Replace with your actual image path
      alt="GitHub Preview"
      layout="fill"
      objectFit="cover"
      className="absolute inset-0 w-full h-full object-cover scale-125 group-hover:scale-100 transition-transform duration-500"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
      <p className="text-xl font-bold text-gray-300 text-center mb-4">
        Explore the full project, detailed codebase, and additional insights on GitHub!
      </p>
      <a
        href="https://github.com/ammadsohail99/IMDB-Movie-Prediction" // Replace with your GitHub repo link
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-800 text-white text-lg font-bold rounded-md hover:scale-105 transform transition-transform duration-300"
      >
        Visit GitHub Repository
      </a>
    </div>
  </div>
</div>


        {/* Fixed Back to Portfolio Button */}
        <Link
          href="/#portfolio"
          className="fixed bottom-10 left-28 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-800 text-white text-lg font-semibold rounded-md hover:scale-105 transform transition-transform duration-300"
        >
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
};

export default MovieIMDB;