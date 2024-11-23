import React, { useState } from "react";
import { motion } from "framer-motion";

const Timeline = () => {
  const [activeDot, setActiveDot] = useState<number | null>(null);

  const milestones = [
    {
      id: 1,
      title: "Started Certification in Applied Data Science Program",
      monthYear: "September 2022",
      logo: "https://www.logo.wine/a/logo/Massachusetts_Institute_of_Technology/Massachusetts_Institute_of_Technology-Logo.wine.svg",
      institution: "MIT Professional Education",
    },
    {
      id: 2,
      title: "Completed Certification in Applied Data Science Program",
      monthYear: "December 2022",
      logo: "https://www.logo.wine/a/logo/Massachusetts_Institute_of_Technology/Massachusetts_Institute_of_Technology-Logo.wine.svg",
      institution: "MIT Professional Education",
    },
    {
      id: 3,
      title: "Started Master's in Management Analytics",
      monthYear: "July 2023",
      logo: "https://www.accueilplus.ca/wp-content/uploads/2020/08/mcgill-university-logo-png-transparent-cropped.png",
      institution: "McGill University",
    },
    {
      id: 4,
      title: "Started working as a Data Architect - Academic Analytics Consulting Project",
      monthYear: "September 2023",
      logo: "https://vectorseek.com/wp-content/uploads/2023/12/AtkinsRealis-Logo-Vector.svg-.png",
      institution: "AtkinsRéalis",
    },
    {
      id: 5,
      title: "Finished working as a Data Architect - Academic Analytics Consulting Project",
      monthYear: "April 2024",
      logo: "https://vectorseek.com/wp-content/uploads/2023/12/AtkinsRealis-Logo-Vector.svg-.png",
      institution: "AtkinsRéalis",
    },
    {
      id: 6,
      title: "Started working as a Data Science Intern",
      monthYear: "May 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Cineplex_logo.svg/800px-Cineplex_logo.svg.png",
      institution: "Cineplex Entertainment",
    },
    {
      id: 7,
      title: "Finished working as a Data Science Intern",
      monthYear: "August 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Cineplex_logo.svg/800px-Cineplex_logo.svg.png",
      institution: "Cineplex Entertainment",
    },
    {
      id: 8,
      title: "Started working as a Research Assistant",
      monthYear: "October 2024",
      logo: "https://www.accueilplus.ca/wp-content/uploads/2020/08/mcgill-university-logo-png-transparent-cropped.png",
      institution: "McGill University",
    },
    {
      id: 9,
      title: "Finished working as a Research Assistant",
      monthYear: "November 2024",
      logo: "https://www.accueilplus.ca/wp-content/uploads/2020/08/mcgill-university-logo-png-transparent-cropped.png",
      institution: "McGill University",
    },
    {
      id: 10,
      title: "Finished Master's in Management Analytics",
      monthYear: "December 2024",
      logo: "https://www.accueilplus.ca/wp-content/uploads/2020/08/mcgill-university-logo-png-transparent-cropped.png",
      institution: "McGill University",
    },
  ];

  // Animation Variants
  const slideDownVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 py-32 text-white relative">
      {/* Title */}
      <h1 className="text-center text-4xl font-bold mb-24 tracking-wide">
        My Data Journey
      </h1>

      {/* Horizontal Line */}
      <div className="relative w-4/5 mx-auto z-10">
        {/* Line */}
        <div className="absolute top-3 left-0 w-full h-1 bg-blue-500 transform -translate-y-1/2"></div>

        {/* Foundation Label */}
        <motion.span
          className="absolute left-[-160px] top-1/16 transform -translate-y-1/2 text-blue-100 font-bold text-xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: -5 }}
          transition={{ duration: 0.5 }}
        >
          Foundation
        </motion.span>

        {/* Current Label */}
        <motion.span
          className="absolute right-[-115px] top-1/16 transform -translate-y-1/2 text-blue-100 font-bold text-xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: -5 }}
          transition={{ duration: 0.5 }}
        >
          Current
        </motion.span>

        {/* Dots */}
        <div className="relative w-full flex items-center justify-between">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.id}
              className="relative flex flex-col items-center cursor-pointer group"
              style={{
                left: `${(index / (milestones.length - 1)) * 100}%`, // Position dots dynamically
                transform: "translate(-50%,50%)", // Center align dots with calculated position
                position: "absolute", // Make each dot absolutely positioned
              }}
              onClick={() => setActiveDot(activeDot === milestone.id ? null : milestone.id)}
            >
              {/* Dot */}
              <div
                className={`w-6 h-6 bg-white rounded-full border-4 border-blue-500 transition-transform transform group-hover:scale-110 group-hover:shadow-md ${
                  activeDot === milestone.id
                    ? "scale-125 ring-4 ring-blue-500"
                    : ""
                }`}
              ></div>

              {/* Month and Year */}
              <div className="text-sm font-medium text-gray-400 mt-2 whitespace-nowrap text-center">
                {milestone.monthYear}
              </div>

              {/* Slide-Down Information */}
              {activeDot === milestone.id && (
                <motion.div
                  className="absolute top-10 mt-4 p-4 bg-gray-800 rounded-lg shadow-xl w-64 text-center z-20" // Set z-20 to bring this above other sections
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={slideDownVariants}
                >
                  <img
                    src={milestone.logo}
                    alt={`${milestone.institution} logo`}
                    className="w-16 h-16 mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-lg font-bold">{milestone.title}</h3>
                  <p className="text-sm text-gray-400">{milestone.institution}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveDot(null);
                    }}
                    className="mt-4 text-blue-400 underline"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;