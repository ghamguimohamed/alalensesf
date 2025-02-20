import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div 
        className="h-screen relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50">
          <div className="h-full flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center text-white px-4"
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-4">Alalenses</h1>
              <p className="text-xl md:text-2xl mb-8">Capturing moments, creating memories</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Explore Gallery
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest Work</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Explore my photography projects spanning across various themes and locations.
              Each image has it's story.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Mountain landscape"
              className="rounded-lg object-cover w-full h-48"
            />
            <img 
              src="https://images.unsplash.com/photo-1542296332-2e4473faf563?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Desert landscape"
              className="rounded-lg object-cover w-full h-48"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;