const TabButton = ({ children, isActive, onClick }) => {
  if (isActive) {
    return (
      <div className='
        px-4 py-2 
        bg-blue-600 text-white 
        rounded-2xl 
        font-bold 
        transition-all duration-300
        shadow-md
        dark:bg-blue-800
      '>
        {children}
      </div>
    );
  }
  return (
    <button
      onClick={onClick}
      className='
        px-4 py-2 
        text-gray-600 hover:text-blue-600 
        dark:text-gray-300 dark:hover:text-blue-400
        rounded-2xl 
        hover:bg-blue-50 
        dark:hover:bg-gray-700
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-blue-500
      '
    >
      {children}
    </button>
  );
};
export default TabButton;
