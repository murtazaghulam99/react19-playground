import React, { createContext, useState, use } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedCard = () => {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <div className="min-h-auto bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-950 py-12 px-4 sm:px-6 lg:px-8 rounded-2xl flex justify-center items-center">
      <div className="w-full max-w-md">
        <div 
          className={`
            rounded-2xl shadow-xl p-6 
            ${theme === 'light' 
              ? 'bg-white border-gray-100' 
              : 'bg-gray-800 border-gray-700'}
            border transition-all duration-300 transform hover:scale-105
          `}
        >
          <div className="flex items-center mb-4">
            <div 
              className={`
                w-12 h-12 rounded-full flex items-center justify-center mr-4
                ${theme === 'light' 
                  ? 'bg-blue-100 text-blue-600' 
                  : 'bg-blue-900 text-blue-400'}
              `}
            >
              {theme === 'light' ? '☀️' : '🌙'}
            </div>
            <h1 
              className={`
                text-2xl font-bold
                ${theme === 'light' 
                  ? 'text-gray-900' 
                  : 'text-white'}
              `}
            >
              Themed Card
            </h1>
          </div>
          
          <p 
            className={`
              mb-6 
              ${theme === 'light' 
                ? 'text-gray-600' 
                : 'text-gray-300'}
            `}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non neque
            libero. Nullam mattis metus a sapien tempor, sit amet mollis est
            facilisis. Phasellus nec turpis nec dui venenatis vestibulum.
          </p>
          
          <button
            onClick={toggleTheme}
            className={`
              w-full py-3 px-6 rounded-2xl font-bold 
              transition-all duration-300 transform hover:scale-105 hover:shadow-xl 
              focus:outline-none focus:ring-2 focus:ring-opacity-50
              flex items-center justify-center
              ${theme === 'light'
                ? 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500'
                : 'bg-blue-800 hover:bg-blue-700 text-white focus:ring-blue-400'}
            `}
          >
            <span className="mr-2">
              {theme === 'light' ? '☀️' : '🌙'}
            </span>
            {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          </button>
        </div>
      </div>
    </div>
  );
};

const Theme = () => {
  return (
    <ThemeProvider>
      <ThemedCard />
    </ThemeProvider>
  );
};

export { Theme as UseExampleContext };
