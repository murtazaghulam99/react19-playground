import React from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ 
      error, 
      errorInfo 
    });
    // You could log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='min-h-[80vh] bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4 rounded-xl'>
          <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md w-full text-center'>
            <div className='w-24 h-24 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6'>
              <span className='text-4xl text-red-600 dark:text-red-400'>
                🚨
              </span>
            </div>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
              Oops! Something Went Wrong
            </h2>
            <p className='text-gray-600 dark:text-gray-300 mb-6'>
              We encountered an unexpected error. Don't worry, our team has been notified.
            </p>
            {this.state.error && (
              <details 
                className='
                  bg-gray-100 dark:bg-gray-700 
                  rounded-xl p-4 
                  text-left 
                  text-sm 
                  text-gray-700 
                  dark:text-gray-300 
                  max-h-48 
                  overflow-auto 
                  mb-6
                '
              >
                <summary className='cursor-pointer font-semibold'>
                  Error Details
                </summary>
                <pre>{this.state.error.toString()}</pre>
                <pre>{this.state.errorInfo?.componentStack}</pre>
              </details>
            )}
            <div className='flex justify-center space-x-4'>
              <Link 
                to='/' 
                className='
                  bg-blue-600 hover:bg-blue-700 
                  text-white font-bold 
                  py-3 px-6 
                  rounded-2xl 
                  transition-all 
                  duration-300 
                  dark:bg-blue-800 
                  dark:hover:bg-blue-700
                '
              >
                Return to Home
              </Link>
              <button 
                onClick={() => window.location.reload()}
                className='
                  bg-gray-200 hover:bg-gray-300 
                  text-gray-800 
                  font-bold 
                  py-3 px-6 
                  rounded-2xl 
                  transition-all 
                  duration-300 
                  dark:bg-gray-700 
                  dark:hover:bg-gray-600 
                  dark:text-white
                '
              >
                Reload Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
