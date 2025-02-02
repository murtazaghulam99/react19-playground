import React from 'react';

const GlobalLoading = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900'>
      <div className='flex flex-col items-center'>
        <div className='animate-pulse'>
          <div className='w-16 h-16 bg-blue-500 dark:bg-blue-700 rounded-full mb-4 animate-bounce'></div>
        </div>
        <h2 className='text-2xl font-bold text-gray-800 dark:text-gray-200 animate-pulse'>
          Loading React Playground
        </h2>
        <p className='text-gray-600 dark:text-gray-400 mt-2 animate-pulse'>
          Initializing components...
        </p>
      </div>
    </div>
  );
};

export default GlobalLoading;
