import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa"; // Import volume icons

const AboutSection = () => {
  const videoRef = useRef(null); // Reference to the video element
  const [isMuted, setIsMuted] = useState(true); // State to manage mute status

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted; // Toggle mute status
      setIsMuted(!isMuted); // Update state
    }
  };

  return (
    <section id="about" className="pt-0">
      <div className="relative p-5 min-h-screen flex flex-col md:flex-row items-center justify-center text-black">
        
        {/* Video Background */}
        <video
          ref={videoRef} // Attach the ref to the video element
          autoPlay
          loop
          muted={isMuted} // Set muted based on state
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/src/assets/bg-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay for transparency effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10" />

        {/* Mute/Unmute Icon */}
        <div
          onClick={toggleMute}
          className="absolute top-4 right-4 z-20 cursor-pointer"
        >
          {isMuted ? (
            <FaVolumeMute className="text-white text-2xl" />
          ) : (
            <FaVolumeUp className="text-white text-2xl" />
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 z-20 relative"
        >
          <h2 className="md:text-9xl text-gray-200 text-4xl font-semi-bold mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
            About Us
          </h2>
          <p className="md:text-2xl text-yellow-300 mb-6 leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Our job application tracking system streamlines the recruitment
            process, helping you stay organized and efficient. Whether you're a
            small business or a large enterprise, our tools are designed to make
            hiring easier.
          </p>
          <p className="text-lg text-yellow-300 w- md:text-2xl leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Track applications, manage candidate data, and ensure you find the
            perfect fit for your team with ease.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;