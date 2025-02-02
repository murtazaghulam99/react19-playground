import { useFormStatus } from 'react-dom';
import { useState } from 'react';

const PostItem = ({ post }) => {
  return (
    <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-6 transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-700'>
      <div className='flex items-center mb-4'>
        <div className='w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4'>
          <span className='text-blue-600 dark:text-blue-400 font-bold'>
            ✍️
          </span>
        </div>
        <h2 className='text-xl font-bold text-gray-900 dark:text-white line-clamp-1'>
          {post.title}
        </h2>
      </div>
      <p className='text-gray-600 dark:text-gray-300 line-clamp-3'>
        {post.body}
      </p>
    </div>
  );
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className={`
        ${pending ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}
        text-white font-bold py-3 px-6 
        rounded-2xl transition-all duration-300 transform 
        focus:outline-none focus:ring-2 focus:ring-blue-500 
        dark:bg-blue-800 dark:hover:bg-blue-700
        flex items-center justify-center
        w-full
      `}
      type='submit'
      disabled={pending}
    >
      {pending ? 'Submitting...' : 'Create Post'}
    </button>
  );
};

const PostForm = ({ addPost }) => {
  const formAction = async (formData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const newPost = {
      title: formData.get('title'),
      body: formData.get('body'),
    };

    addPost(newPost);
  };

  return (
    <div className='bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-950 rounded-2xl p-6 mb-8 shadow-lg'>
      <form
        action={formAction}
        className='max-w-xl mx-auto'
      >
        <h2 className='text-2xl font-bold text-center text-gray-900 dark:text-white mb-6'>
          Create a New Post
        </h2>
        <div className='mb-4'>
          <label
            className='block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2'
            htmlFor='title'
          >
            Title
          </label>
          <input
            className='shadow-md appearance-none border rounded-xl w-full py-3 px-4 
            text-gray-700 dark:text-white dark:bg-gray-800 
            leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 
            transition-all duration-300'
            id='title'
            type='text'
            placeholder='Enter post title'
            name='title'
            required
          />
        </div>
        <div className='mb-6'>
          <label
            className='block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2'
            htmlFor='body'
          >
            Body
          </label>
          <textarea
            className='shadow-md appearance-none border rounded-xl w-full py-3 px-4 
            text-gray-700 dark:text-white dark:bg-gray-800 
            leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 
            transition-all duration-300'
            id='body'
            rows='5'
            placeholder='Write your post content here...'
            name='body'
            required
          ></textarea>
        </div>
        <div className='flex items-center justify-center'>
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts((posts) => [...posts, newPost]);
  };

  return (
    <div className='min-h-auto bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 rounded-2xl'>
      <div className='container mx-auto max-w-2xl'>
        <PostForm addPost={addPost} />
        {posts.length > 0 ? (
          <div className='space-y-6'>
            {posts.map((post, index) => (
              <PostItem key={index} post={post} />
            ))}
          </div>
        ) : (
          <div className='text-center text-gray-500 dark:text-gray-400 py-12'>
            <p className='text-xl'>No posts yet. Create your first post!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export { Posts as UseFormStatusExample };
