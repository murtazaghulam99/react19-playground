import { memo } from 'react';

const Tab2 = memo(function Tab2() {
  let items = [];
  for (let i = 0; i < 500; i++) {
    items.push(<Post key={i} index={i} />);
  }
  return (
    <div className='bg-gray-50 dark:bg-gray-900 rounded-2xl p-6'>
      <h2 className='text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center'>
        Performance Simulation
      </h2>
      <div className='max-h-[500px] overflow-y-auto'>
        <ul className='grid grid-cols-5 gap-4'>
          {items}
        </ul>
      </div>
    </div>
  );
});

function Post({ index }) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
  }

  return (
    <li 
      className='
        bg-white dark:bg-gray-800 
        p-4 rounded-xl 
        shadow-md 
        hover:shadow-lg 
        transition-all 
        duration-300 
        flex items-center justify-center
      '
    >
      <span className='text-gray-700 dark:text-gray-300'>
        Post {index + 1}
      </span>
    </li>
  );
}

export default Tab2;
