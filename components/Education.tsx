import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import bgImage from "../public/assets/newww.jpg";

const milestones = [
  {
  id: 1,
  title: "Certification in Applied Data Science Program",
  date: "Sept 2022 - Dec 2022",
  logo: "https://www.logo.wine/a/logo/Massachusetts_Institute_of_Technology/Massachusetts_Institute_of_Technology-Logo.wine.svg",
  institution: "MIT Professional Education",
  description: (
    <ul className="list-disc pl-4">
      <li>
        Completed a capstone project on predicting used car prices using machine learning models, achieving 70% accuracy with Ridge regularization.
      </li>
      <li>
        Predicted house prices in Boston and hotel booking cancellations using techniques like Linear Regression, Logistic Regression, and kNN.
      </li>
      <li>
        Analyzed diabetes data from the Pima Indians tribe, focusing on exploratory data analysis, statistics, and visualization.
      </li>
    </ul>
  ),
},
{
  id: 2,
  title: "Started Master's in Management Analytics",
  date: "July 2023",
  logo: "https://www.accueilplus.ca/wp-content/uploads/2020/08/mcgill-university-logo-png-transparent-cropped.png",
  institution: "McGill University",
  description: (
    <ul className="list-disc pl-4">
      <li>
        Gained hands-on experience in Generative AI by becoming a finalist in the Retail GenAI Hackathon, where I developed a shoe-fitting chatbot solution using Llama 2 and AWS.
      </li>
      <li>
        Gained proficiency in querying languages like SQL and optimization libraries such as Gurobipy, applying them to solve complex analytical problems.
      </li>
      <li>
        Leveraged multivariate statistics using R to analyze patterns and make data-driven decisions.
      </li>
      <li>
        Integrated multiple data sources through APIs using Python to develop "Pillpal," a personalized customer support chatbot for a pharmacy, enhancing user experience and showcasing practical data integration skills.
      </li>
    </ul>
  ),
},
{
  id: 3,
  title: "Data Architect - Academic Analytics Project",
  date: "Sep 2023 - April 2024",
  logo: "https://vectorseek.com/wp-content/uploads/2023/12/AtkinsRealis-Logo-Vector.svg-.png",
  institution: "AtkinsRéalis",
  description: (
    <ul className="list-disc pl-4">
      <li>
        Lead the design of intricate data architectures, leveraging cutting-edge cloud technologies such as Microsoft Azure to optimize data workflows and storage solutions.
      </li>
      <li>
        Executed efficient data collection processes, utilizing R programming and API integrations to aggregate data from diverse sources.
      </li>
      <li>
      Automating ETL (Extract, Transform and Load) workflows using an end-to-end pipeline orchestrated in Azure Data 
      Factory, ensuring seamless, accurate, and rapid processing of datasets from different sources. 
      </li>
    </ul>
  ),
},
{
  id: 4,
  title: "Data Science Intern",
  date: "May 2024 - Aug 2024",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Cineplex_logo.svg/800px-Cineplex_logo.svg.png",
  institution: "Cineplex Entertainment",
  description: (
    <ul className="list-disc pl-4">
      <li>
        Automated the process to combine outputs of two Machine Learning models, reducing processing time to under 8 minutes. Leveraged Hive Metastore for efficient feature management and Databricks Workflows for orchestration, significantly improving pipeline efficiency and scalability.
      </li>
      <li>
        Migrated and optimized Machine Learning model scripts from Azure Machine Learning to Azure Databricks, employing PySpark, Spark SQL, and Python to enhance compatibility, performance, and scalability.
      </li>
      <li>
        Maintained version control using Azure DevOps (Repos and Git), ensuring efficient tracking, management, and implementation of changes, fostering a streamlined development process.
      </li>
      <li>
        Collaborated with BI, Data Science, and Data Engineering teams to design and integrate data solutions aligned with business goals, enhancing decision-making through actionable insights.
      </li>
      <li>
        Conducted data validation by cross-verifying SQL queries executed in Azure Data Studio (Synapse Dev Environment) with Spark SQL queries run in Databricks, ensuring consistency and accuracy of results across platforms.
      </li>
    </ul>
  ),
},
  {
  id: 5,
  title: "Research Assistant - Prof. Roman Galperin",
  date: "Oct 2024 - Nov 2024",
  logo: "https://www.accueilplus.ca/wp-content/uploads/2020/08/mcgill-university-logo-png-transparent-cropped.png",
  institution: "McGill University",
  description: (
    <ul className="list-disc pl-4">
      <li>
        Developed a scalable workflow using OpenAI's text-embedding-ada-002 model to process over 1 million rows, optimizing performance for large-scale datasets.
      </li>
      <li>
        Automated data preprocessing and API integration with Python, converting dataframes to JSONL files and consolidating outputs into a single CSV for analysis.
      </li>
      <li>
        Leveraged Dask DataFrame for efficient handling of large datasets, enabling flexible batch processing.
      </li>
    </ul>
  ),
},

{
  id: 6,
  title: "Finished Master's in Management Analytics",
  date: "Dec 2024",
  logo: "https://www.accueilplus.ca/wp-content/uploads/2020/08/mcgill-university-logo-png-transparent-cropped.png",
  institution: "McGill University",
  description: (
    <ul className="list-disc pl-4">
      <li>
        Explored Natural Language Processing (NLP) techniques, including lemmatization, stemming, sentiment analysis (VADER, BERT), and topic modeling (LDA), for advanced text analytics.
      </li>
      <li>
        Developed a soccer player influence scoring model using centrality metrics and logistic regression, quantifying player impact within team passing networks for enhanced game analysis.
      </li>
      <li>
        Designed a Power BI dashboard with forecasting analysis to identify the optimal location for a new 24Seven store in Calgary, Montreal, or Toronto, leveraging historical sales and road traffic data.
      </li>
      <li>
        Applied causal inference to analyze the impact of lead times on hotel cancellations, providing actionable insights for hospitality management.
      </li>
    </ul>
  ),
},
];

const Timeline = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat min-h-screen text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-100"
        />
      </div>

      {/* Blur Layer */}
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-lg z-10"></div>

      {/* Add the id to this h1 */}
      <h1
        id="datajourney" // Unique ID for Data Journey
        className="text-center text-4xl sm:text-5xl font-bold mb-16 tracking-wide relative z-20 pt-10"
      >
        My Data Journey 🚀
      </h1>

      <div className="relative mx-auto max-w-6xl pb-10">
        {/* Glowing Timeline Line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full z-20"></div>

        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.id}
            className={`relative flex flex-col sm:flex-row items-center ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            } mb-16`}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Logo and Date in Center */}
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-30">
              <motion.div
                className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 shadow-md flex items-center justify-center hover:scale-110 transition-transform duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <img
                  src={milestone.logo}
                  alt={`${milestone.institution} logo`}
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                />
              </motion.div>
              <div className="mt-4 bg-blue-600 text-white font-medium text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-lg">
                {milestone.date}
              </div>
            </div>

            {/* Milestone Content */}
            <motion.div
              className={`w-full sm:w-2/5 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-6 sm:p-8 rounded-lg shadow-lg transition-transform duration-300 ${
                index % 2 === 0 ? "sm:ml-18" : "sm:mr-18"
              } mt-16 sm:mt-0 z-30`}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
              }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-400">
                {milestone.title}
              </h3>
              <p className="text-sm sm:text-lg text-gray-300 mt-4">
                {milestone.institution}
              </p>
              <div className="text-med font-semibold sm:text-md text-gray-400 mt-4">
                {typeof milestone.description === "string" ? (
                  <p>{milestone.description}</p>
                ) : (
                  milestone.description
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
