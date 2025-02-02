import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-950 rounded-2xl p-8 shadow-lg mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
          React 19 Playground
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A comprehensive exploration of React 19 and experimental features. 
          Designed for learning and innovation.
        </p>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Examples
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "use() Hook Example 1",
              description: "Fetch a random joke from the Chuck Norris API",
              href: "/use-example-1"
            },
            {
              title: "use() Hook Example 2",
              description: "Fetch posts from JSONPlaceholder API",
              href: "/use-example-2"
            },
            {
              title: "use() Hook Example 3",
              description: "Resolve a message from a promise",
              href: "/use-example-3"
            },
            {
              title: "use(context) Example",
              description: "Apply a theme context",
              href: "/use-example-context"
            },
            {
              title: "Action Example 1",
              description: "Submit a post form",
              href: "/action-example-1"
            },
            {
              title: "Action Example 2",
              description: "Add product to cart via form",
              href: "/action-example-2"
            },
            {
              title: "useFormStatus Example",
              description: "Get status of form submission",
              href: "/useformstatus-example"
            },
            {
              title: "useFormState Example",
              description: "Show specific messages for cart items",
              href: "/useformstate-example"
            },
            {
              title: "useOptimistic Example",
              description: "Show message before server response",
              href: "/useoptimistic-example"
            },
            {
              title: "useTransition Example",
              description: "Manage transition states",
              href: "/usetransition-example"
            }
          ].map((example, index) => (
            <div 
              key={example.href}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {example.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {example.description}
                </p>
                <Link
                  to={example.href} 
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  View Example
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
