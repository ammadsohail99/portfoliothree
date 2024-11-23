import { motion } from "framer-motion";

const AboutMe = () => {
  // Variants for music visualization bars
  const barVariants = {
    animate: {
      scaleX: [1, 2, 1],
      scaleY: [1, 2, 1],
      transition: {
        repeat: Infinity,
        duration: 8,
        ease: "easeInOut",
      },
    },
  };

  // Variants for chapter boxes
  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section
      id="about"
      className="relative w-full bg-gradient-to-br from-purple-950 via-gray-900 to-black text-white py-28 px-4 overflow-hidden"
    >
      {/* Music Visualization with Title */}
      <div className="relative flex flex-col items-center justify-center mb-16">
        {/* Visualization Bars */}
        <div className="flex justify-center items-center space-x-2">
          {[...Array(30)].map((_, index) => (
            <motion.div
              key={index}
              className="w-2 bg-gradient-to-t from-white-800 via-blue-200 to-black-800 rounded"
              style={{ height: `${Math.random() * 50 + 30}px` }}
              variants={barVariants}
              animate="animate"
            ></motion.div>
          ))}
        </div>

        {/* Title Text */}
        <h1 className="absolute top-1/2 transform -translate-y-1/2 text-4xl md:text-5xl font-extrabold text-center text-white">
          Story About Me
        </h1>
      </div>

      {/* Chapters Section */}
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Chapter 1 */}
        <motion.div
          className="p-6 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg"
          variants={boxVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-4">
            Chapter 1: The Spark
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Hey! I’m{" "}
            <span className="font-bold tracking-wider text-white">Ammad</span>
            — a{" "}
            <span className="font-bold text-purple-400">
              Data Scientist, Photographer, and Tech Enthusiast
            </span>
            . My fascination with numbers started in high school, where I
            excelled in Physics, Chemistry, and Mathematics. Solving equations
            and exploring analytical challenges shaped my journey toward
            engineering.
          </p>
        </motion.div>

        {/* Chapter 2 */}
        <motion.div
          className="p-6 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg"
          variants={boxVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
            Chapter 2: Discovering Coding
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            During my Bachelor's in Mechanical Engineering degree, I discovered my passion
            for coding while designing a{" "}
            <span className="text-blue-400 font-semibold">
              4 DOF robotic manipulator
            </span>{" "}
            in MATLAB. This manipulator, with its unique half-doughnut task
            space, introduced me to the world of programming and sparked a
            newfound curiosity.
          </p>
        </motion.div>

        {/* Chapter 3 */}
        <motion.div
          className="p-6 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg"
          variants={boxVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-pink-400 mb-4">
            Chapter 3: Reaching New Heights
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            My final-year project involved building a{" "}
            <span className="text-pink-400 font-semibold">
              sailplane that generated electricity
            </span>{" "}
            while flying at 100 meters. Programming the servo motors for the ailerons, flaps, rudder and elevator, using Arduino, was
            the highlight of the project, solidifying my love for technology-driven innovations.
          </p>
        </motion.div>

        {/* Chapter 4 */}
        <motion.div
  className="p-6 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg"
  variants={boxVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-4">
    Chapter 4: The Data Science Path
  </h2>
  <p className="text-lg md:text-xl leading-relaxed">
    MIT’s Applied Data Science program ignited my passion for data science, helping me explore fundamentals of Python, Statistics, Machine Learning and Recommendation algorithms, and inspiring me to pursue a Master’s in Management Analytics at McGill University. At McGill, I deepened my expertise in tools like R, SQL, PySpark, Microsoft Azure, AWS and PowerBI, blending technical skills with business insights. These experiences prepared me to solve complex problems and make data-driven decisions with impact.
  </p>
</motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
