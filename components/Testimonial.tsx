import React from "react";

const Testimonial = () => {
  const techStack = [
    { name: "Python", icon: "/assets/python.png", size: 5 },
    { name: "R", icon: "/assets/R_lang.png", size: 4 },
    { name: "SQL", icon: "/assets/SQL.png", size: 5 },
    { name: "Databricks", icon: "/assets/Databricks.png", size: 4 },
    { name: "Microsoft Azure", icon: "/assets/Azure.png", size: 4 },
    { name: "AWS", icon: "/assets/aws.png", size: 3 },
    { name: "PowerBI", icon: "/assets/pbi.svg", size: 3 },
    { name: "PySpark", icon: "/assets/Spark.png", size: 4 },
    { name: "TensorFlow", icon: "/assets/Tensorflow.png", size: 3 },
    { name: "PyTorch", icon: "/assets/Pytorch.png", size: 2 },
    { name: "Scikit-Learn", icon: "/assets/Scikit_learn.png", size: 2 },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-[-90xh] flex flex-col justify-center items-center py-8 relative overflow-hidden">
      {/* Title */}
      <h2 className="text-4xl font-bold uppercase tracking-[5px] text-white mb-6 z-10">Tech Stack</h2>

      {/* Glowing Background Dots */}
      <div className="absolute inset-0">
        <div className="w-[300px] h-[300px] bg-blue-600 opacity-30 rounded-full absolute top-[10%] left-[15%] blur-3xl animate-pulse"></div>
        <div className="w-[200px] h-[200px] bg-pink-500 opacity-30 rounded-full absolute bottom-[15%] right-[20%] blur-3xl animate-pulse"></div>
        <div className="w-[150px] h-[150px] bg-yellow-500 opacity-20 rounded-full absolute bottom-[10%] left-[40%] blur-3xl animate-pulse"></div>
      </div>

      {/* Floating Logos */}
      <div className="relative w-full h-[500px] flex flex-wrap justify-center items-center z-10">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className={`m-4 p-2 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 shadow-lg hover:shadow-2xl hover:scale-110 hover:brightness-150 transition-all duration-500 ease-in-out animate-float`}
            style={{
              width: `${tech.size * 3}rem`, // Dynamic size based on proficiency
              height: `${tech.size * 3}rem`,
              animationDelay: `${index * 0.2}s`, // Staggered float animation
            }}
            title={tech.name}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
