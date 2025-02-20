import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart, Map } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Alalenses
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Alalenses is a photography blog dedicated to capturing stunning moments across various themes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Passion for Photography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <Camera size={48} className="text-blue-500 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Passion for Photography
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Capturing unique perspectives and telling stories through my lens.
            </p>
          </motion.div>

          {/* Love for Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center text-center"
          >
            <Heart size={48} className="text-red-500 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Love for Details
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Every photo is a moment, capturing the essence of life’s beauty.
            </p>
          </motion.div>

          {/* Exploring the World */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <Map size={48} className="text-green-500 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Exploring the World
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Traveling and discovering breathtaking landscapes and cultures.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
