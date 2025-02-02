import { useFormState } from 'react-dom';

const addToCart = (prevState, queryData) => {
  const itemID = queryData.get('itemID');
  if (itemID === '1') {
    return 'Added to cart';
  } else {
    return "Couldn't add to cart: the item is sold out.";
  }
};

const AddToCartForm = ({ itemID, itemTitle }) => {
  const [message, formAction] = useFormState(addToCart, null);

  return (
    <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-6 transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-700'>
      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center'>
          <div className='w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4'>
            <span className='text-blue-600 dark:text-blue-400 font-bold'>
              🛒
            </span>
          </div>
          <h2 className='text-xl font-bold text-gray-900 dark:text-white'>
            {itemTitle}
          </h2>
        </div>
        <form action={formAction} className='flex items-center'>
          <input type='hidden' name='itemID' value={itemID} />
          <button
            type='submit'
            className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 
            rounded-2xl transition-all duration-300 transform hover:scale-105 
            focus:outline-none focus:ring-2 focus:ring-blue-500 
            dark:bg-blue-800 dark:hover:bg-blue-700'
          >
            Add to Cart
          </button>
        </form>
      </div>
      {message && (
        <div 
          className={`
            mt-4 p-3 rounded-xl text-sm 
            ${message.includes('Added') 
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
            }
          `}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default AddToCartForm;
