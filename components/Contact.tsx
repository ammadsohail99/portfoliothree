import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMap, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrMsg(""); // Reset error message
    setSuccessMsg(""); // Reset success message

    // Validation
    if (!username) {
      setErrMsg("Enter your Name");
      return;
    }
    if (!email) {
      setErrMsg("Enter your Email");
      return;
    }
    if (!message) {
      setErrMsg("Enter your Message");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/send-email", {
        username,
        email,
        message,
      });

      if (response.status === 200) {
        setSuccessMsg(
          `Hello dear ${username}, Thank you for your Message. I will get back to you soon.`
        );
        setUsername(""); // Clear form inputs
        setEmail("");
        setMessage("");
        setErrMsg(""); // Clear any previous error messages
      }
    } catch (error) {
      setErrMsg("Failed to send the message. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full h-[800px] bg-contact-image bg-no-repeat bg-cover bg-fixed text-white px-4 relative"
    >
      <div className="w-full h-full bg-black bg-opacity-80 py-20">
        <div className="max-w-6xl h-full mx-auto flex flex-col gap-6 md:gap-12">
          <h1 className="text-3xl font-thin tracking-widest uppercase text-center">
            Say Hello!
          </h1>

          {/* Contact Information */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center gap-3">
              <FaMap className="text-4xl text-designColor" />
              <p className="text-sm tracking-wide">Montreal, Canada</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <FaPhoneAlt className="text-4xl text-designColor" />
              <p className="text-sm tracking-wide">+1 (438) 466-4396</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <FaEnvelope className="text-4xl text-designColor" />
              <p className="text-sm tracking-wide">syed.sohail@mail.mcgill.ca</p>
            </div>
          </div>

          {/* Success Message */}
          {successMsg ? (
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: "easeIn" }}
              className="max-w-[600px] mx-auto text-lg font-semibold text-center px-4 text-green-500"
            >
              {successMsg}
            </motion.p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col items-center gap-4 md:gap-10"
            >
              {/* Name and Email */}
              <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-10">
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  className="w-full md:w-1/2 py-2 px-4 text-base text-black placeholder:text-gray-600 font-bold placeholder:font-normal outline-none border-2 border-transparent focus:border-designColor duration-200 rounded-md"
                  type="text"
                  placeholder="Name"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="w-full md:w-1/2 py-2 px-4 text-base text-black placeholder:text-gray-600 font-bold placeholder:font-normal outline-none border-2 border-transparent focus:border-designColor duration-200 rounded-md"
                  type="email"
                  placeholder="Email"
                />
              </div>

              {/* Message */}
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Your Message"
                className="w-full text-base h-36 p-4 text-black placeholder:text-gray-600 font-bold placeholder:font-normal outline-none border-2 border-transparent focus:border-designColor duration-200 resize-none rounded-md"
              ></textarea>

              {/* Error Message */}
              {errMsg && (
                <p className="w-full bg-red-500 text-center text-base font-semibold text-white py-2 rounded-md">
                  {errMsg}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-44 h-12 bg-designColor text-base uppercase font-bold tracking-wide rounded-md border-2 border-transparent hover:bg-black hover:border-designColor duration-300"
              >
                Submit Now
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
