import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Works from "../components/Works";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import ScrollBtn from "../components/ScrollBtn";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Test Blog | New Horizon</title>
        <link rel="icon" href="/smallLogo.ico" />
      </Head>

      {/* Use next/script for GSAP */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/TextPlugin.min.js"
        strategy="beforeInteractive"
      />

      {/* Use next/script for Framer Motion */}
      <Script
        src="https://unpkg.com/framer-motion@10.12.16/dist/framer-motion.umd.js"
        strategy="beforeInteractive"
      />

      <div className="font-bodyFont">
        <Banner />
        <AboutMe />
        <Education />
        <Works />
        <Testimonial />
        <Contact />
      </div>
      <ScrollBtn />
    </div>
  );
};

export default Home;
