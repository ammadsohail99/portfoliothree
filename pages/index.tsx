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
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className="font-bodyFont">
      {/* Head for SEO and Icons */}
      <Head>
        <title>Portfolio | Syed Ammad Sohail</title>
        <meta
          name="description"
          content="Welcome to my portfolio! Explore my journey, projects, and achievements as a Data Scientist and Software Developer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/smallLogo.ico" />
      </Head>

      {/* GSAP Scripts */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/TextPlugin.min.js"
        strategy="beforeInteractive"
      />

      {/* Page Layout */}
      <main>
        <Banner />
        <AboutMe />
        <Education />
        <Works />
        <Testimonial />
        <Contact />
      </main>

      {/* Scroll Button */}
      <ScrollBtn />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
