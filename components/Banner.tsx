import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import dynamic from "next/dynamic";
import {
  FaHome,
  FaProjectDiagram,
  FaCode,
  FaAddressCard,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaLayerGroup,
} from "react-icons/fa";

// Dynamically import Design to avoid server-side rendering issues
const Design = dynamic(() => import("./Design"), { ssr: false });

const Banner = () => {
  const nameRef = useRef<HTMLDivElement>(null); // Ref for the typewriter text
  const cursorRef = useRef<HTMLSpanElement>(null); // Ref for the cursor

  const [menu, setMenu] = useState(false);
  const [navSize, setNavSize] = useState("90px");
  const [navColor, setNavColor] = useState("transparent");
  const [activeItem, setActiveItem] = useState("home"); // Tracks the active menu item

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavColor("#000000") : setNavColor("transparent");
    window.scrollY > 10 ? setNavSize("70px") : setNavSize("90px");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, [navColor]);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { TextPlugin } = await import("gsap/TextPlugin");
      gsap.registerPlugin(TextPlugin);

      // Typewriter Animation
      const nameText = "Hi, I'm Syed (Ammad) Sohail";
      if (nameRef.current) {
        gsap.to(nameRef.current, {
          text: nameText,
          duration: 2.5,
          ease: "power2.inOut",
        });
      }

      // Blinking Cursor
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          opacity: 0,
          repeat: -1,
          yoyo: true,
          duration: 0.5,
        });
      }
    };

    loadGSAP();
  }, []);

  // Sidebar menu items (editable)
  const menuItems = [
    { name: "Home", icon: <FaHome />, target: "home" },
    { name: "My Data Journey", icon: <FaProjectDiagram />, target: "datajourney" },
    { name: "Featured Works", icon: <FaCode />, target: "portfolio" },
    { name: "Tech Stack", icon: <FaLayerGroup />, target: "testimonial" },
    { name: "Contact", icon: <FaAddressCard />, target: "contact" },
  ];

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Design Background */}
      <div className="absolute inset-0 z-0">
        <Design />
      </div>

      {/* Navigation */}
      <nav
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s",
        }}
        className="w-full px-4 md:px-16 py-6 flex justify-between fixed top-0 z-40"
      >
        <h1 className="font-bodyFont text-2xl md:text-4xl text-white font-extrabold border-2 w-8 md:w-12 text-center">
          A
        </h1>
        <div
          onClick={() => setMenu(true)}
          className="w-6 h-4 md:w-8 md:h-6 group flex flex-col items-center justify-between cursor-pointer"
        >
          <span className="w-full h-[2px] md:h-[3px] bg-designColor inline-flex group-hover:w-4 duration-300"></span>
          <span className="w-full h-[2px] md:h-[3px] bg-designColor inline-flex"></span>
          <span className="w-full h-[2px] md:h-[3px] bg-designColor inline-flex group-hover:w-4 duration-300"></span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative flex flex-col justify-center items-center h-full text-white px-4 z-30">
        {/* Title Text with Cursor */}
        <motion.h1
          className="text-[6vw] md:text-[4vw] lg:text-[3.5vw] font-black text-center relative whitespace-nowrap"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ whiteSpace: "nowrap" }} // Prevents breaking to the next line
        >
          <span ref={nameRef}></span>
          <span
            ref={cursorRef}
            className="text-designColor"
            style={{
              display: "inline",
              verticalAlign: "baseline", // Align cursor to text baseline
            }}
          >
            |
          </span>
        </motion.h1>

        {/* Subtitle Roles */}
        <motion.div
  className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mt-4 text-sm md:text-base font-bold bg-yellow-400 text-black px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg relative"
  animate={{ y: [0, -5, 0] }}
  transition={{ duration: 2, repeat: Infinity }}
  style={{
    maxWidth: "90%", // Restrict width for small screens
    flexWrap: "wrap", // Allow wrapping for small screens
    wordBreak: "break-word", // Prevent overflow of long text
  }}
>
  {["DATA SCIENTIST", "PHOTOGRAPHER", "TABLE TENNIS PLAYER"].map((role, idx) => (
    <motion.h2
      key={idx}
      className="tracking-[1px] md:tracking-[2px] hover:text-black transition-all px-2 md:px-4"
      whileHover={{ scale: 1.1 }}
      style={{
        fontSize: "clamp(12px, 3vw, 16px)", // Responsive font size
        textAlign: "center",
      }}
    >
      {role}
    </motion.h2>
  ))}
</motion.div>
      </div>

      {/* Sidebar Menu */}
      {menu && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-end">
          {/* Sidebar Container */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-[250px] h-full bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(0,0,0,0.3)] backdrop-blur-lg shadow-xl rounded-l-2xl flex flex-col items-center py-8 px-4 z-20"
          >
            {/* Close Button */}
            <motion.div
              onClick={() => setMenu(false)}
              className="text-yellow-400 text-2xl mb-12 hover:text-yellow-300 transition-transform transform hover:scale-125 cursor-pointer"
              whileHover={{ rotate: 90 }}
            >
              ✖
            </motion.div>

            {/* Sidebar Menu Items */}
            <ul className="space-y-8 flex flex-col items-start w-full pl-8 mt-12">
              {menuItems.map((item, idx) => (
                <motion.li
                  key={idx}
                  className={`flex items-center gap-4 cursor-pointer transition-all ${
                    activeItem === item.target
                      ? "text-blue-500"
                      : "text-white hover:text-yellow-400"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2, duration: 0.5 }}
                >
                  <span
                    className={`text-2xl ${
                      activeItem === item.target
                        ? "text-blue-500"
                        : "text-yellow-400"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <Link
                    to={item.target}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => {
                      setActiveItem(item.target);
                      setMenu(false);
                    }}
                    className="text-lg md:text-xl font-bold tracking-wide"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Banner;
