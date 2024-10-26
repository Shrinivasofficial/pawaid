import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='mt-24 md:mt-32 lg:mt-48 px-6 md:px-12 lg:px-48'>
      <div className='flex flex-col items-start space-y-3'>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-4xl md:text-5xl font-medium'>
          🐶 <span className='text-3xl md:text-4xl font-semibold'>Paw Aid</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className='text-gray-500 text-sm md:text-base'>
          Paw Aid - The One Stop solution for helping dogs to have a better life
        </motion.p>
      </div>
      <div className='mt-10'>
        <div className='flex flex-col space-y-8'>
          <div className='flex flex-wrap space-x-5'>
            <motion.h3
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}>
              <Link to='/form' className='text-blue-500 underline text-sm md:text-base'>Injury Report</Link>
            </motion.h3>
            <motion.h3
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}>
              <Link to='/form' className='text-blue-500 underline text-sm md:text-base'>Accident Report</Link>
            </motion.h3>
            <motion.h3
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}>
              <Link to='/form' className='text-blue-500 underline text-sm md:text-base'>Unknown Reason</Link>
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className='max-w-full md:max-w-2xl lg:max-w-3xl leading-relaxed text-sm md:text-base'>
            PawAid is a community-driven platform supported by compassionate volunteers and animal welfare advocates...
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='text-center w-32 md:w-36 h-10 md:h-12 bg-blue-500 text-white hover:bg-blue-600'>
            <Link to='/form'>Help Now!</Link>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
