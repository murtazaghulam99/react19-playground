const Tab1 = () => {
  return (
    <div className='p-6 bg-blue-50 dark:bg-blue-900 rounded-2xl'>
      <h2 className='text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4'>
        Exploring React Transitions
      </h2>
      <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
        Tab 1 demonstrates the seamless integration of React's transition mechanisms. 
        By leveraging useTransition, we can create smooth, non-blocking user interfaces 
        that maintain responsiveness during complex state updates.
      </p>
      <div className='mt-6 grid grid-cols-3 gap-4'>
        {['Performance', 'Usability', 'Smoothness'].map((feature, index) => (
          <div 
            key={index} 
            className='
              bg-white dark:bg-gray-800 
              p-4 rounded-xl 
              shadow-md 
              hover:shadow-lg 
              transition-all 
              duration-300
            '
          >
            <h3 className='text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2'>
              {feature}
            </h3>
            <p className='text-gray-600 dark:text-gray-400 text-sm'>
              Key aspect of modern React development.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Tab1;
