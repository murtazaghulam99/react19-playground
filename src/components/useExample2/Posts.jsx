import { use, Suspense } from 'react';
import Loading from '../Loading';

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};
const postsPromise = fetchPosts();

const PostTooltip = ({ post }) => {
  return (
    <div className="absolute z-50 hidden group-hover:block">
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full">
        <div className="bg-gray-900 text-white text-sm rounded-lg p-4 shadow-xl max-w-xs w-64">
          <div className="flex items-center mb-2">
            <span className="font-bold mr-2">Post ID:</span>
            <span>{post.id}</span>
          </div>
          <div className="mb-2">
            <span className="font-bold block mb-1">Title:</span>
            <p className="text-gray-300">{post.title}</p>
          </div>
          <div>
            <span className="font-bold block mb-1">Body:</span>
            <p className="text-gray-300">{post.body}</p>
          </div>
          <div className="mt-2">
            <span className="font-bold mr-2">User ID:</span>
            <span>{post.userId}</span>
          </div>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-0 h-0 
          border-l-8 border-r-8 border-t-8 
          border-l-transparent border-r-transparent 
          border-t-gray-900"></div>
      </div>
    </div>
  );
};

const PostItems = () => {
  const posts = use(postsPromise);

  return (
    <div className="grid md:grid-cols-2 gap-6 p-6">
      {posts.map((post) => (
        <div 
          key={post.id} 
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 relative group"
        >
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-full max-w-[45px] h-[45px] bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  {post.id}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white line-clamp-1">
                {post.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {post.body}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                User ID: {post.userId}
              </span>
            </div>
          </div>
          <PostTooltip post={post} />
        </div>
      ))}
    </div>
  );
};

const Posts = () => {
  return (
    <div className="min-h-auto bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-950 py-12 px-4 sm:px-6 lg:px-8 rounded-2xl">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          JSON Placeholder Posts
        </h1>
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-64">
              <Loading />
            </div>
          }
        >
          <PostItems />
        </Suspense>
      </div>
    </div>
  );
};

export { Posts as UseExample2 };
