import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/syedammadsohail/github",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/ammadsohail99",
    color: "from-gray-600 to-gray-800",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/ammu43/",
    color: "from-pink-500 to-pink-700",
  },
];

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 py-16 text-white relative overflow-hidden">
      {/* Glowing Background Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 opacity-10 blur-3xl rounded-full"></div>

      {/* Footer Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl font-bold mb-8">Connect with Me</h2>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full bg-gradient-to-r ${link.color} shadow-lg hover:shadow-2xl text-3xl flex items-center justify-center transition-all duration-300`}
              whileHover={{
                scale: 1.2,
                rotate: 10,
                boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Footer Text */}
        <p className="mt-8 text-gray-400 text-sm">
          © {new Date().getFullYear()} Syed Ammad Sohail. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
