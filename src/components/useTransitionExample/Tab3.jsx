const Tab3 = () => {
  return (
    <div className='p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-950 rounded-2xl'>
      <h2 className='text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4'>
        Transition State Management
      </h2>
      <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-6'>
        Tab 3 illustrates the power of React's useTransition hook in managing 
        complex state transitions. It provides a non-blocking way to update 
        the UI, ensuring a smooth and responsive user experience.
      </p>
      <div className='grid grid-cols-2 gap-4'>
        {[
          { title: 'Non-Blocking Updates', description: 'Prioritize user interactions' },
          { title: 'State Optimization', description: 'Manage complex transitions' }
        ].map((item, index) => (
          <div 
            key={index} 
            className='
              bg-white dark:bg-gray-800 
              p-5 rounded-xl 
              shadow-md 
              hover:shadow-lg 
              transition-all 
              duration-300
            '
          >
            <h3 className='text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2'>
              {item.title}
            </h3>
            <p className='text-gray-600 dark:text-gray-400 text-sm'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Tab3;
