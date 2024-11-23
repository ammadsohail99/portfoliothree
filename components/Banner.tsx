import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import dynamic from "next/dynamic"; // Dynamic import for the Design component
import { HiMinus } from "react-icons/hi";

// Dynamically import Design to avoid server-side rendering issues
const Design = dynamic(() => import("./Design"), { ssr: false });

const Banner = () => {
  const ref = useRef<string | any>("");
  const nameRef = useRef<HTMLDivElement>(null); // Ref for the typewriter text
  const cursorRef = useRef<HTMLSpanElement>(null); // Ref for the cursor

  const [menu, setMenu] = useState(false);
  const [navSize, setNavSize] = useState("90px");
  const [navColor, setNavColor] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavColor("#000000") : setNavColor("transparent");
    window.scrollY > 10 ? setNavSize("90px") : setNavSize("90px");
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

      // Typewriter Animation for Name
      const nameText = "I'm Syed (Ammad) Sohail";
      if (nameRef.current) {
        gsap.to(nameRef.current, {
          text: nameText,
          duration: 2.5,
          ease: "power2.inOut",
        });
      }

      // Blinking Cursor Animation
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

  return (
    <div id="home" className="w-full h-[700px] relative">
      <Design />
      <div className="absolute left-0 top-0 w-full h-[700px] bg-black bg-opacity-10">
        <nav
          style={{
            backgroundColor: navColor,
            height: navSize,
            transition: "all 1s",
          }}
          className="w-full px-16 py-6 flex justify-between fixed top-0 z-40 bg-black bg-opacity-25"
        >
          <h1 className="font-bodyFont text-4xl text-white font-extrabold border-2 w-12 text-center">
            A
          </h1>
          <div
            onClick={() => setMenu(true)}
            className="w-8 h-6 group flex flex-col items-center justify-between cursor-pointer"
          >
            <span className="w-full h-[3px] bg-designColor inline-flex group-hover:w-4 duration-300"></span>
            <span className="w-full h-[3px] bg-designColor inline-flex"></span>
            <span className="w-full h-[3px] bg-designColor inline-flex group-hover:w-4 duration-300"></span>
          </div>
        </nav>
        <div className="w-full h-full flex flex-col justify-center items-center text-white px-4">
          <h1
            className="text-[50px] md:text-[80px] lg:text-[100px] font-black dots-fix"
            style={{
              display: "inline-flex",
              transform: "translateZ(0)", // Force GPU rendering
              backfaceVisibility: "hidden", // Improve font rendering
              WebkitFontSmoothing: "antialiased", // Ensure smooth fonts
              MozOsxFontSmoothing: "grayscale", // Fix for Firefox
            }}
          >
            <div
              ref={nameRef}
              style={{
                position: "relative",
                pointerEvents: "none", // Prevent clicking on artifacts
              }}
            ></div>
            <span
              ref={cursorRef}
              className="text-designColor ml-1 cursor"
              style={{
                display: "inline-block",
                verticalAlign: "bottom", // Align with the text baseline
                pointerEvents: "none", // Prevent clicking on artifacts
              }}
            >
              |
            </span>
          </h1>
          <div className="flex items-center gap-2 md:gap-6 text-base md:text-xl font-bold bg-designColor px-6 py-3">
            <h2 className="tracking-[4px]">DATA SCIENTIST</h2>
            <HiMinus className="text-2xl rotate-90" />
            <h2 className="tracking-[4px]">PHOTOGRAPHER</h2>
            <HiMinus className="text-2xl rotate-90" />
            <h2 className="tracking-[4px]">TABLE TENNIS PLAYER</h2>
          </div>
        </div>
      </div>
      {menu && (
        <div
          ref={(node) => (ref.current = node)}
          className="w-full h-screen bg-black bg-opacity-40 fixed top-0 right-0 flex justify-end z-50"
        >
          <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-[60%] lg:w-[40%] h-full bg-[#0F1113] text-white flex items-center justify-center"
          >
            <div className="w-4/5 px-12">
              <ul className="flex flex-col gap-2">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setMenu(false)}
                >
                  <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
                    Home
                  </li>
                </Link>
                {/* Add other links here */}
              </ul>
              <div className="text-lg font-thin mt-32">
                <p>For project inquiries</p>
                <p>
                  or say 'Hello' -{" "}
                  <span className="font-semibold text-designColor">
                    reactjsbd@gmail.com
                  </span>
                </p>
              </div>
            </div>
            <div className="w-1/5 h-full border-l-[1px] text-center flex items-center justify-center">
              <button
                onClick={() => setMenu(false)}
                className="text-3xl font-black text-designColor"
              >
                X
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Banner;