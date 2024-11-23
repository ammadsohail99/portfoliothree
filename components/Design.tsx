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
                distance: 200,
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
              distance: 120,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none", // Random directions
              enable: true,
              outModes: {
                default: "bounce", // Particles bounce off edges
              },
              random: false, // Disable random speed for consistency
              speed: 2, // Set consistent speed
              straight: false, // Disable straight-line movement
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 90,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 3, max: 5 }, // Adjusted size range
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Design;
