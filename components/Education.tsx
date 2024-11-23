import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

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

const Timeline = () => {
  return (
    <div
      id="datajourney" // Add the id here to match the target in your menuItems array
      className="bg-gradient-to-b from-gray-900 via-black to-gray-900 py-16 text-white"
    >
      <h1 className="text-center text-4xl font-extrabold mb-12">
        My Data Journey
      </h1>

      <div className="relative flex flex-col md:flex-row md:overflow-x-auto no-scrollbar max-w-7xl mx-auto snap-x snap-mandatory">
        {/* Connecting Line */}
        <div className="absolute md:top-[50%] md:left-0 md:right-0 h-1 md:h-0 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse md:rotate-0 top-0 left-[50%] md:w-0"></div>

        {/* Milestone Items */}
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            className="relative flex-shrink-0 w-full md:w-80 mx-8 mb-12 md:mb-0 text-center snap-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Timeline Dot */}
            <motion.div
              className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto flex items-center justify-center text-lg font-bold shadow-2xl hover:scale-110 hover:shadow-3xl transition-transform duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <motion.img
                src={milestone.logo}
                alt={`${milestone.institution} logo`}
                className="w-16 h-16 object-contain"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>

            {/* Card */}
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.45}
              glareColor="#ffffff"
              glarePosition="bottom"
              scale={1.02}
              transitionSpeed={250}
            >
              <motion.div
                className="mt-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-opacity-60 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-lg font-semibold text-blue-400">
                  {milestone.title}
                </h3>
                <p className="text-sm text-gray-400 italic">
                  {milestone.monthYear}
                </p>
                <p className="text-sm text-gray-300 mt-2">{milestone.institution}</p>
              </motion.div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
