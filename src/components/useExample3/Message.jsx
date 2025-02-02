import { use, useState, Suspense } from 'react';
import Loading from '../Loading';

function fetchMessage() {
  return new Promise((resolve) => setTimeout(resolve, 1000, '⚛️'));
}

const MessageOutput = ({ messagePromise }) => {
  const messageContent = use(messagePromise);
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center animate-fade-in">
      <div className="text-6xl mb-4 animate-bounce">
        {messageContent}
      </div>
      <p className="text-xl text-gray-600 dark:text-gray-300">
        Message successfully downloaded!
      </p>
    </div>
  );
};

const MessageContainer = ({ messagePromise }) => {
  return (
    <Suspense 
      fallback={
        <div className="flex justify-center items-center h-64">
          <Loading />
        </div>
      }
    >
      <MessageOutput messagePromise={messagePromise} />
    </Suspense>
  );
};

const Message = () => {
  const [messagePromise, setMessagePromise] = useState(null);
  const [show, setShow] = useState(false);

  function download() {
    setMessagePromise(fetchMessage());
    setShow(true);
  }

  return (
    <div className="min-h-auto bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-950 py-12 px-4 sm:px-6 lg:px-8 rounded-2xl flex justify-center items-center">
      <div className="w-full max-w-md">
        {show ? (
          <MessageContainer messagePromise={messagePromise} />
        ) : (
          <button
            onClick={download}
            className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl 
            transition-all duration-300 transform hover:scale-105 hover:shadow-xl 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 
            dark:bg-blue-800 dark:hover:bg-blue-700"
          >
            <span className="flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                />
              </svg>
              Download Message
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export { Message as UseExample3 };
