import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import bgImage from "../public/assets/newww.jpg";

const milestones = [
  {
    id: 1,
    title: "Certification in Applied Data Science Program",
    date: "Sept 2022 - Dec 2022",
    logo: "https://www.logo.wine/a/logo/Massachusetts_Institute_of_Technology/Massachusetts_Institute_of_Technology-Logo.wine.svg",
    institution: "MIT Professional Education",
    description:
      "Completed an intensive program focused on applied data science, including machine learning, data visualization, and AI.",
  },
  {
    id: 2,
    title: "Started Master's in Management Analytics",
    date: "July 2023",
    logo: "https://www.accueilplus.ca/wp-content/uploads/2020/08/mcgill-university-logo-png-transparent-cropped.png",
    institution: "McGill University",
    description:
      "Began exploring advanced analytics, big data technologies, and decision-making frameworks for businesses.",
  },
  {
    id: 3,
    title: "Data Architect - Academic Analytics Project",
    date: "Sep 2023 - April 2024",
    logo: "https://vectorseek.com/wp-content/uploads/2023/12/AtkinsRealis-Logo-Vector.svg-.png",
    institution: "AtkinsRéalis",
    description:
      "Designed scalable analytics pipelines to process academic data effectively.",
  },
  {
    id: 4,
    title: "Data Science Intern",
    date: "May 2024 - Aug 2024",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Cineplex_logo.svg/800px-Cineplex_logo.svg.png",
    institution: "Cineplex Entertainment",
    description:
      "Developed movie recommendation systems and predictive models to enhance customer experience.",
  },
  {
    id: 5,
    title: "Research Assistant",
    date: "Oct 2024 - Nov 2024",
    logo: "https://www.accueilplus.ca/wp-content/uploads/2020/08/mcgill-university-logo-png-transparent-cropped.png",
    institution: "McGill University",
    description:
      "Worked on research projects related to text embeddings and AI-driven analysis.",
  },
  {
    id: 6,
    title: "Finished Master's in Management Analytics",
    date: "Dec 2024",
    logo: "https://www.accueilplus.ca/wp-content/uploads/2020/08/mcgill-university-logo-png-transparent-cropped.png",
    institution: "McGill University",
    description:
      "Successfully completed my master's program, specializing in analytics, AI, and data-driven decision-making.",
  },
];

const Timeline = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat min-h-screen text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-100"
        />
      </div>

      {/* Blur Layer */}
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-lg z-10"></div>

      <h1 className="text-center text-5xl font-bold mb-16 tracking-wide relative z-20 pt-10">
        My Data Journey 🚀
      </h1>

      <div className="relative mx-auto max-w-6xl pb-10">
        {/* Glowing Timeline Line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full z-20"></div>

        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.id}
            className={`relative flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } mb-16`}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Logo and Date in Center */}
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-30">
              <motion.div
                className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 shadow-md flex items-center justify-center hover:scale-110 transition-transform duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <img
                  src={milestone.logo}
                  alt={`${milestone.institution} logo`}
                  className="w-16 h-16 object-contain"
                />
              </motion.div>
              <div className="mt-4 bg-blue-600 text-white font-medium text-sm px-4 py-2 rounded-full shadow-lg">
                {milestone.date}
              </div>
            </div>

            {/* Milestone Content */}
            <motion.div
              className={`w-2/5 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-8 rounded-lg shadow-lg transition-transform duration-300 ${
                index % 2 === 0 ? "ml-18" : "mr-18"
              } z-30`}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
              }}
            >
              <h3 className="text-3xl font-bold text-blue-400">
                {milestone.title}
              </h3>
              <p className="text-lg text-gray-300 mt-4">{milestone.institution}</p>
              <p className="text-md text-gray-400 mt-4">{milestone.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
