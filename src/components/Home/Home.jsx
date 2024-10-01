import React from 'react';
import { motion } from 'framer-motion';



const Home = () => {
  return (
    <section id="home" className="pt-2">
      <div className="flex flex-col items-center justify-center text-center h-screen bg-gradient-to-r from-gray-50 to-gray-50">
        <motion.h1
          className="text-8xl bg-gradient-to-r from-gray-900 to-gray-900 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Track Your Dream Job
        </motion.h1>
        <motion.h2
          className="text-5xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent mt-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          We Help You Get There.
        </motion.h2>

        <motion.p
          className="text-xl text-gray-900 mt-6 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Our platform streamlines your job search by keeping all your applications organized in one place. Stay on top of your job applications and land your dream job effortlessly.
        </motion.p>
        
        <motion.button
          className="mt-8 px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          Start Tracking Now !
        </motion.button>
      </div>
    </section>
  );
};

export default Home;
