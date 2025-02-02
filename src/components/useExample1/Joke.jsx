import { use, Suspense } from 'react';
import Loading from '../Loading';

const fetchData = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random');
  return res.json();
};

const jokePromise = fetchData();

const JokeItem = () => {
  const joke = use(jokePromise);
  return (
    <div className='bg-white dark:bg-blue-900 shadow-lg p-6 my-6 rounded-2xl border-l-4 border-blue-600 hover:shadow-xl transition-all duration-300'>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="h-10 w-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
            CN
          </div>
        </div>
        <div>
          <h2 className='text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2'>Chuck Norris Joke</h2>
          <p className='text-lg text-gray-700 dark:text-gray-300 italic'>
            "{joke.value}"
          </p>
        </div>
      </div>
    </div>
  );
};

const Joke = () => {
  return (
    <div className="min-h-auto bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-950 py-12 px-4 sm:px-6 lg:px-8 rounded-2xl">
      <div className="container mx-auto">
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-64">
              <Loading />
            </div>
          }
        >
          <title>Chuck Norris Jokes</title>
          <meta name='description' content='Chuck Norris jokes' />
          <meta name='keywords' content='chuck norris, jokes' />

          <JokeItem />
        </Suspense>
      </div>
    </div>
  );
};
export { Joke as UseExample1 };
