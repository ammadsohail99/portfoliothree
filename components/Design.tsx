import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import BannerImg from "../public/assets/bg.jpg";

const Design = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Initialize tsParticles instance
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      // Log loaded container if needed
    },
    []
  );

  return (
    <div className="w-full h-full bg-hero-image bg-cover relative">
      <Particles
        className="w-full h-full"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          fullScreen: false,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100, // Reduced repulse distance for small screens
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 100, // Reduced link distance for small screens
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1.5, // Slightly slower speed for better visibility on small screens
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: window.innerWidth < 640 ? 500 : 1000, // Adjust particle density for small screens
              },
              value: window.innerWidth < 640 ? 50 : 90, // Reduce particle count for small screens
            },
            opacity: {
              value: 0.4, // Reduced opacity for less clutter on smaller screens
            },
            shape: {
              type: "circle",
            },
            size: {
              value: window.innerWidth < 640 ? { min: 2, max: 4 } : { min: 3, max: 5 }, // Smaller particles on small screens
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Design;