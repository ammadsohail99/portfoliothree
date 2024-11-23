import Image from "next/image";
import Link from "next/link";
import { bgOne, bgTwo, bgThree, bgFour } from "../public/assets/index";

const projects = [
  {
    href: "/portfolio/car-design",
    title: "Car Design",
    image: bgOne,
    status: "available", // Status for active projects
  },
  {
    href: "/portfolio/MovieIMDB",
    title: "IMDB Movies Prediction",
    image: bgTwo,
    status: "available", // Status for active projects
  },
  {
    href: "#", // Link disabled for in-progress projects
    title: "UI Design",
    image: bgFour,
    status: "in-progress", // Status for in-progress projects
  },
  {
    href: "#", // Link disabled for in-progress projects
    title: "Interior Design",
    image: bgThree,
    status: "in-progress", // Status for in-progress projects
  },
];

const Works = () => {
  return (
    <section
      id="portfolio"
      className="relative w-full h-full bg-black text-white py-28"
    >
      <h1 className="text-3xl uppercase tracking-[10px] font-semibold text-center">
        Featured Works
      </h1>
      <div className="relative mt-44 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6">
        {projects.map((project) => (
          <div key={project.title} className="relative group cursor-pointer w-full h-[600px]">
            {project.status === "available" ? (
              // Active Projects (clickable links)
              <Link href={project.href}>
                <div className="relative">
                  <Image
                    className="w-full h-full object-cover scale-125 group-hover:scale-100 duration-500"
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                    <h1 className="text-2xl font-bold bg-yellow-500 px-6 py-2 rounded-md">
                      {project.title}
                    </h1>
                  </div>
                </div>
              </Link>
            ) : (
              // In-Progress Projects (locked state)
              <div className="relative">
                <Image
                  className="w-full h-full object-cover scale-125 group-hover:scale-100 duration-500"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                  <div className="flex flex-col items-center">
                    <Image
                      src="/assets/construction.png" // Replace with your construction logo path
                      alt="Construction Icon"
                      width={40}
                      height={40}
                      className="mb-4"
                    />
                    <h1 className="text-xl font-bold bg-red-500 px-4 py-2 rounded-md">
                      In Progress
                    </h1>
                  </div>
                  <span className="mt-4 text-med text-gray-400 italic">
                    This page will be rolled out soon. Stay tuned!
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
