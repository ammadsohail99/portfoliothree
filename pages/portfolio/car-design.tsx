import React, { useEffect, useRef, useState, useCallback } from "react";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import Image from "next/image";
import ReactCompareImage from "react-compare-image";

const CarDesign = () => {
  const taglineRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50); // Slider position state
  const [sliderKey, setSliderKey] = useState(0); // Key to reset ReactCompareImage

  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {}, []);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { TextPlugin } = await import("gsap/TextPlugin");
      gsap.registerPlugin(TextPlugin);

      const taglineText = "Detecting change, one keypoint at a time.";
      if (taglineRef.current) {
        gsap.to(taglineRef.current, {
          text: taglineText,
          duration: 2.5,
          delay: 0.5,
          ease: "power2.inOut",
        });
      }
    };

    loadGSAP();
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-gray-900 to-black text-gray-200 relative">
      {/* Sidebar */}
      <div className="absolute top-0 left-0 h-full w-16 md:w-20 bg-gradient-to-b from-blue-500 to-blue-800 flex items-center justify-center">
        <Link href="/">
          <div className="flex flex-col items-center cursor-pointer group">
            <FaHome className="text-white text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300" />
            <p className="text-white text-sm md:text-base mt-2 group-hover:font-semibold">
              Home
            </p>
          </div>
        </Link>
      </div>

      {/* Particle Background with Title */}
      <div className="relative w-full h-[600px] bg-cover bg-center">
        {/* Background GIF */}
        <Image
          src="/assets/car-design-bg.gif"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full opacity-70"
        />
        {/* Particles */}
        <Particles
          className="absolute inset-0 w-full h-full"
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 60,
            fullScreen: false,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            particles: {
              color: { value: "#ffffff" },
              links: { color: "#ffffff", distance: 120, enable: true, opacity: 0.5, width: 1 },
              collisions: { enable: true },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 2,
                straight: false,
              },
              number: { density: { enable: true, area: 1000 }, value: 90 },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 5 } },
            },
            detectRetina: true,
          }}
        />
        {/* Title and Tagline */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-6xl font-extrabold text-white font-modica">
            Car Design Feature Point Detection & Analysis
          </h1>
          <div
            ref={taglineRef}
            className="mt-6 text-2xl md:text-3xl font-extrabold text-yellow-400 text-center"
          ></div>
        </div>
      </div>

{/* Main Content */}
<div className="ml-20 md:ml-24 p-6">
        {/* Introduction Section */}
        <div className="container mx-auto py-12 px-6">
          <h2 className="text-4xl font-extrabold text-white mb-6">Introduction</h2>
          <p className="text-xl text-gray-300">
            This project focuses on using computer vision to analyze car design
            changes over the years. By detecting bounding boxes and 50 specific
            design keypoints on car images, I built a system to quantify and
            visualize the evolution of automobile designs.
          </p>
        </div>

{/* Key Highlights Section */}
<div className="container mx-auto py-12 px-6">
  <h2 className="text-4xl font-extrabold text-white mb-6">Key Highlights</h2>
  <ul className="list-disc list-inside text-xl text-gray-300">
    <li>
      <strong>🔍 Purpose:</strong> To measure and visualize design distinctiveness
      between car models.
    </li>
    <li>
      <strong>🛠️ Technology:</strong>{" "}
      <a
        href="https://pytorch.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        PyTorch
      </a>
      ,{" "}
      <a
        href="https://pytorch.org/vision/stable/models.html#id3"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        ResNet-34
      </a>
      ,{" "}
      <a
        href="https://huggingface.co/docs/transformers/model_doc/vit"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        Vision Transformer
      </a>
      ,{" "}
      <a
        href="https://opencv.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        OpenCV
      </a>
      , and{" "}
      <a
        href="https://www.makesense.ai/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        Makesense.ai
      </a>{" "}
      for annotation.
    </li>
    <li>
      <strong>📊 Results:</strong> The trained model predicts bounding boxes and
      50 keypoints with high accuracy.
    </li>
    <li>
      <strong>🎯 Challenges:</strong> Manual annotation of images using{" "}
      <a
        href="https://www.makesense.ai/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        Makesense.ai
      </a>{" "}
      required significant time investment (30 mins per image).
    </li>
  </ul>
</div>


        {/* Dataset Section */}
        <div className="container mx-auto py-12 px-6">
          <h2 className="text-4xl font-extrabold text-white mb-6">Dataset</h2>
          <p className="text-xl text-gray-300 mb-6">
            The dataset consists of 17 high-quality images of diverse car
            models annotated with bounding boxes and 50 keypoints. Key features
            include:
          </p>
          <ul className="list-disc list-inside text-xl text-gray-300">
            <li>Grille edges</li>
            <li>Headlights</li>
            <li>Roof Corners</li>
            <li>Windshield Points</li>
            <li>Bumper Corners</li>
            <li>Farthest edges</li>
          </ul>
        </div>

{/* Modeling Approach Section */}
<div className="container mx-auto py-12 px-6">
          <h2 className="text-4xl font-extrabold text-white mb-6">Modeling Approach</h2>

          {/* Tree-Like Hierarchical Layout */}
          <div className="relative flex flex-col items-start">
            {/* Preprocessing Pipeline */}
            <div className="flex items-start mb-20">
              <div className="bg-blue-500 text-white text-xl font-bold px-6 py-3 rounded-md shadow-lg w-60 text-center flex-shrink-0">
                Preprocessing Pipeline
              </div>
              <div className="h-auto w-1 bg-gray-500 mx-8"></div>
              <div className="text-xl text-gray-300 flex-1">
                <p className="mb-4">
                  Before training the models, a preprocessing pipeline was developed to ensure data consistency and improve the model's generalization ability:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Image Resizing:</strong> Resized all images to <strong>1280x850 pixels</strong>.
                  </li>
                  <li>
                    <strong>Data Augmentation:</strong> Applied rotations, brightness/contrast adjustments, flips, and cropping.
                  </li>
                  <li>
                    <strong>Normalization:</strong> Normalized pixel values and subtracted channel-wise mean and standard deviation.
                  </li>
                  <li>
                    <strong>Keypoint Label Encoding:</strong> Normalized keypoint coordinates relative to image dimensions.
                  </li>
                </ul>
              </div>
            </div>

            {/* Model Architecture */}
            <div className="flex items-start mb-20">
              <div className="bg-green-500 text-white font-bold text-xl px-6 py-3 rounded-md shadow-lg w-60 text-center flex-shrink-0">
                Model Architecture
              </div>
              <div className="h-auto w-1 bg-gray-500 mx-8"></div>
              <div className="text-xl text-gray-300 flex-1">
                <p className="mb-4">
                  A two-task deep learning pipeline combining CNNs and transformers:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>ResNet-34:</strong> Extracted spatial features for bounding box prediction.
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        Output: Bounding box coordinates (<code>x_min</code>, <code>y_min</code>, <code>width</code>, <code>height</code>).
                      </li>
                      <li>Pretrained on ImageNet for initialization.</li>
                    </ul>
                  </li>
                  <li className="mt-4">
                    <strong>Vision Transformer (ViT):</strong> Extracted global features for keypoint detection.
                    <ul className="list-disc ml-6 mt-2">
                      <li>Output: 50 keypoints (<code>x</code>, <code>y</code> coordinates).</li>
                      <li>Attention mechanism to capture spatial relationships.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

 {/* Loss Functions */}
 <div className="flex items-start mb-20">
              <div className="bg-red-500 text-white text-xl font-bold px-6 py-3 rounded-md shadow-lg w-60 text-center flex-shrink-0">
                Loss Functions
              </div>
              <div className="h-auto w-1 bg-gray-500 mx-8"></div>
              <div className="text-xl text-gray-300 flex-1">
                <p className="mb-4">Custom loss functions were used for the dual-task outputs:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>IoU Loss:</strong> For bounding box predictions.
                  </li>
                  <li>
                    <strong>Mean Squared Error (MSE):</strong> For keypoint regression.
                  </li>
                  <li>
                    <strong>Weighted Loss Combination:</strong>{" "}
                    <code>Loss = λ1 * IoU + λ2 * MSE</code>, where <code>λ1</code> and{" "}
                    <code>λ2</code> are hyperparameters tuned via grid search.
                  </li>
                </ul>
              </div>
            </div>

            {/* Training Strategy */}
            <div className="flex items-start mb-20">
              <div className="bg-yellow-500 text-white text-xl font-bold px-6 py-3 rounded-md shadow-lg w-60 text-center flex-shrink-0">
                Training Strategy
              </div>
              <div className="h-auto w-1 bg-gray-500 mx-8"></div>
              <div className="text-xl text-gray-300 flex-1">
                <p className="mb-4">
                  The training process was designed to ensure maximum performance:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Optimizer:</strong> Adam optimizer with a learning rate of 0.001.
                  </li>
                  <li>
                    <strong>Batch Size:</strong> 16 images per batch.
                  </li>
                  <li>
                    <strong>Scheduler:</strong> Cosine annealing with warm restarts.
                  </li>
                  <li>
                    <strong>Epochs:</strong> Trained for 50 epochs with early stopping.
                  </li>
                  <li>
                    <strong>Cross-Validation:</strong> k-fold validation (k=5).
                  </li>
                </ul>
              </div>
            </div>

            {/* Evaluation Metrics */}
            <div className="flex items-start">
              <div className="bg-purple-500 text-white text-xl font-bold px-6 py-3 rounded-md shadow-lg w-60 text-center flex-shrink-0">
                Evaluation Metrics
              </div>
              <div className="h-auto w-1 bg-gray-500 mx-8"></div>
              <div className="text-xl text-gray-300 flex-1">
                <p className="mb-4">The following metrics were used to evaluate the model:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Mean Average Precision (mAP):</strong> Evaluated bounding box
                    predictions.
                  </li>
                  <li>
                    <strong>Keypoint Accuracy:</strong> Percentage of keypoints predicted within a
                    5-pixel radius.
                  </li>
                  <li>
                    <strong>Loss Curves:</strong> Monitored training and validation loss trends.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Visualizations Section */}
        <div className="container mx-auto py-12 px-6">
          <h2 className="text-4xl font-extrabold text-white mb-6">Visualizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 flex items-center justify-center h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/assets/bounding-box.png"
                alt="Bounding Box Placement"
                layout="intrinsic"
                width={1000}
                height={800}
                className="rounded-lg"
              />
            </div>

            <div className="bg-gray-800 flex items-center justify-center h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/assets/keypoints.png"
                alt="Keypoint Predictions - Heatmap Example"
                layout="intrinsic"
                width={1000}
                height={800}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>


{/* Placeholder for Before-and-After Comparisons */}
<div className="container mx-auto py-12 px-6">
          <h2 className="text-4xl font-extrabold text-white mb-6">Evolution Over Time Example</h2>
          <div className="relative w-full flex justify-center items-center flex-col">
            {/* Image Names */}
            <div
              className={`absolute top-0 left-10 z-10 text-white text-lg md:text-xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md transition-opacity ${
                sliderPosition < 10 ? "opacity-0" : "opacity-100"
              }`}
            >
              Hyundai Elantra Model 2021
            </div>
            <div
              className={`absolute top-0 right-10 z-10 text-white text-lg md:text-xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md transition-opacity ${
                sliderPosition > 90 ? "opacity-0" : "opacity-100"
              }`}
            >
              Hyundai Elantra Model 2024
            </div>

            {/* Slider for Before-and-After Comparison */}
            <ReactCompareImage
              key={sliderKey} // Add key to force re-render on reset
              leftImage="/assets/before-2021.png" // Replace with actual path
              rightImage="/assets/after-2024.png" // Replace with actual path
              sliderLineWidth={4} // Adjust slider width for aesthetics
              sliderLineColor="#F7D449" // Match the design color
              hover
            />

            {/* Reset Button */}
            <button
              onClick={() => {
                setSliderPosition(50); // Reset slider position
                setSliderKey((prevKey) => prevKey + 1); // Force re-render of ReactCompareImage
              }}
              className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-800 text-white text-lg font-semibold rounded-md hover:scale-105 transform transition-transform duration-300"
            >
              Reset Comparison
            </button>
          </div>

          {/* Description Below Slider */}
          <p className="text-xl font-semibold text-gray-300 mt-6 text-center">
            Slide to compare design evolution between models, showcasing changes in grille shape,
            bumper box design, and overall aesthetics.
          </p>
        </div>

{/* Final Steps Section */}
<div className="container mx-auto py-12 px-6">
  <h2 className="text-4xl font-extrabold text-white mb-8 text-left">
    Final Steps
  </h2>
  <div className="bg-gradient-to-r from-blue-1200 to-indigo-800 bg-opacity-75 p-8 rounded-lg shadow-lg">
    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
      To truly understand the <strong>design distinctiveness</strong> between car models, 
      I computed the <strong>Euclidean distance</strong> between each corresponding label 
      across images. This distance helps us capture even the smallest variations in the design.
    </p>
    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
      But that's not all. I normalized all coordinates to ensure consistency. 
      Each coordinate is scaled by the car's{" "}
      <strong>width</strong> and <strong>length</strong>, calculated as the differences between 
      the extreme x and y points. This ensures fair comparisons, no matter the image dimensions.
    </p>
    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
      Finally, the sum of these normalized <strong>Euclidean distances </strong>  
      provides us with a single, meaningful metric—a comprehensive measure of the 
      design difference between car models.
    </p>
  </div>
</div>

{/* Design Difference Score Section */}
<div className="container mx-auto py-12 px-6">
  <h2 className="text-4xl font-extrabold text-white mb-8 text-left">
    Design Difference Score Example
  </h2>
  <div className="p-8 rounded-lg shadow-lg text-center">
    {/* Circular Score Visualization */}
    <div className="relative inline-block">
      <div className="w-40 h-40 rounded-full border-8 border-gray-700 border-t-blue-600 animate-spin-slow"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <p className="text-4xl font-bold text-white">2.21</p>
        <p className="text-lg text-gray-300 mt-2">Difference</p>
      </div>
    </div>

    {/* Description */}
    <p className="text-lg md:text-xl text-gray-300 mt-8 leading-relaxed">
      The design similarity score between <strong>Hyundai Elantra Model 2021 </strong> 
      and <strong>Hyundai Elantra Model 2024</strong> is <strong>2.21</strong>. 
      This indicates that while the models share somewhat insignificant design overlap, where
      the differences highlight subtle but impactful design evolution over time.
    </p>
  </div>
</div>

        {/* Next Steps Section */}
        <div className="container mx-auto py-12 px-6">
          <h2 className="text-4xl font-extrabold text-white mb-6">Future State</h2>
          <ul className="list-disc list-inside text-xl text-gray-300">
            <li>
              Expand the dataset to include 100+ diverse car models for better generalization.
            </li>
            <li>Implement more data augmentation techniques for robustness.</li>
            <li>
              Experiment with <strong>Dask</strong> and <strong>Spark</strong> to optimize memory
              and computational overhead.
            </li>
          </ul>
        </div>

{/* Placeholder for Additional Resources */}
<div className="container mx-auto py-12 px-6">
  <h2 className="text-4xl font-extrabold text-white mb-6">Additional Resources</h2>
  <div className="relative group bg-gray-800 flex flex-col items-center justify-center h-[400px] rounded-lg cursor-pointer overflow-hidden">
    {/* Background Image */}
    <Image
      src="/assets/cars.jpg" // Replace with your actual image path
      alt="GitHub Preview"
      layout="fill"
      objectFit="cover"
      className="absolute inset-0 w-full h-full object-cover scale-125 group-hover:scale-100 transition-transform duration-500"
    />
    
    {/* In Progress Icon */}
    <div className="absolute top-4 left-4 bg-yellow-500 text-black text-sm font-bold px-4 py-1 rounded-md shadow-lg flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m0-4h.01M12 12v.01M20.5 16.25V19H3.5v-2.75a6.72 6.72 0 0012.63-.13 3.5 3.5 0 005.37.13zm-5.63.13a6.72 6.72 0 00-9.74-.13m9.74-.13A3.5 3.5 0 0012 12m0 0a3.5 3.5 0 00-3.5-3.5"
        />
      </svg>
      Coming Soon
    </div>

    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
      <p className="text-xl font-bold text-gray-300 text-center mb-4">
        Explore the full project, detailed codebase, and additional insights on GitHub!
      </p>
      <a
        href="https://github.com/ammadsohail99/Car-Design-Difference-Project" // Replace with your GitHub repo link
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-800 text-white text-lg font-bold rounded-md hover:scale-105 transform transition-transform duration-300"
      >
        Visit GitHub Repository
      </a>
    </div>
  </div>
</div>




        {/* Fixed Back to Portfolio Button */}
        <Link
          href="/#portfolio"
          className="fixed bottom-10 left-28 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-800 text-white text-lg font-semibold rounded-md hover:scale-105 transform transition-transform duration-300"
        >
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
};

export default CarDesign;
