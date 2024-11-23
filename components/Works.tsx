import Image from "next/image";
import Link from "next/link";
import { bgOne, bgTwo, bgThree, bgFour } from "../public/assets/index";

const projects = [
  {
    href: "/portfolio/car-design",
    title: "Car Design",
    image: bgOne,
  },
  {
    href: "/portfolio/MovieIMDB",
    title: "IMDB Movies Prediction",
    image: bgTwo,
  },
  {
    href: "/portfolio/ui-design",
    title: "UI Design",
    image: bgFour,
  },
  {
    href: "/portfolio/interior-design",
    title: "Interior Design",
    image: bgThree,
  },
];

const Works = () => {
  return (
    <section id="portfolio" className="relative w-full h-full bg-black text-white py-28">
      <h1 className="text-3xl uppercase tracking-[10px] font-semibold text-center">
        Featured Works.
      </h1>
      <div className="relative mt-44 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6">
        {projects.map((project) => (
          <Link key={project.href} href={project.href}>
            <div className="relative group cursor-pointer w-full h-[600px]">
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
        ))}
      </div>
    </section>
  );
};

export default Works;
