import React from 'react';
import { motion } from 'framer-motion';

const Form = () => {
  return (
    <motion.div 
      className='mt-16 px-6 md:px-12 lg:px-48' 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} // Add a transition duration
    >
      <h1 className='text-4xl font-medium'>Give details about the dog that needs care</h1>
      <div className='mt-10'>
        <div className='flex flex-col space-y-5'>
          <label htmlFor='incidentType'>Type of Incident</label>
          <div className='relative'>
            <select 
              id='incidentType' 
              className='block w-full px-4 py-3 border border-gray-300 rounded-md appearance-none pr-10'
              required
            >
              <option value=''>Select Incident Type</option>
              <option value='injury'>Injury</option>
              <option value='accident'>Accident</option>
              <option value='unknown'>Unknown Reason</option>
            </select>
            
            <div className='absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none'>
              <svg 
                className='w-4 h-4 text-gray-600' 
                xmlns='http://www.w3.org/2000/svg' 
                viewBox='0 0 20 20' 
                fill='currentColor' 
                aria-hidden='true'
              >
                <path 
                  fillRule='evenodd' 
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' 
                  clipRule='evenodd' 
                />
              </svg>
            </div>
          </div>

          <label htmlFor='description'>Description of the Issue</label>
          <motion.input 
            type='text' 
            className='w-full px-4 py-3 border border-gray-300 rounded-md appearance-none pr-10' 
            placeholder='Describe in 50-100 words' 
            required
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          />

          <label htmlFor='attentionNotice'>What caught your attention about this incident?</label>
          <motion.input 
            type='text' 
            className='w-full px-4 py-3 border border-gray-300 rounded-md appearance-none pr-10' 
            placeholder='Short response (20-30 words)' 
            required
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          />

          <label htmlFor='location'>Location</label>
          <motion.input 
            type='text' 
            className='w-full px-4 py-3 border border-gray-300 rounded-md appearance-none pr-10' 
            placeholder='Enter the location' 
            required
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          />

          <label htmlFor='photos'>Photos/Videos</label>
          <motion.input 
            type='text' 
            className='w-full px-4 py-3 border border-gray-300 rounded-md appearance-none pr-10' 
            placeholder='Provide links to photos/videos (optional)' 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          />

          <label htmlFor='contactDetails'>Name - Contact Details</label>
          <motion.input 
            type='text' 
            className='w-full px-4 py-3 border border-gray-300 rounded-md appearance-none pr-10' 
            placeholder='Your name and contact details' 
            required
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          />

          <motion.button 
            className='text-white w-full py-3 text-center bg-blue-800 rounded-lg' 
            whileHover={{ scale: 1.05 }} // Scale button on hover
            whileTap={{ scale: 0.95 }} // Scale button down when tapped
          >
            Submit
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default Form;
