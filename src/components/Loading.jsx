import React from 'react';

const Loading = () => {
  return (
    <div className="mx-auto container flex justify-center items-center py-4">
      <div className="flex gap-1.5 h-10 items-end">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="wave-bar w-2 bg-blue-600 dark:bg-blue-500 rounded-t-sm animate-wave"
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;

const style = document.createElement('style');
style.textContent = `
  @keyframes wave {
    0%, 100% {
      height: 40%;
    }
    50% {
      height: 100%;
    }
  }
  
  .animate-wave {
    animation: wave 1s ease-in-out infinite;
  }
`;
document.head.appendChild(style);