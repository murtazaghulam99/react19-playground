import { useState } from 'react';

const AddToCartForm = ({ id, title, addToCart }) => {
  const formAction = async (formData) => {
    try {
      await addToCart(formData, title);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-6 transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-700'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <div className='w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4'>
            <span className='text-blue-600 dark:text-blue-400 font-bold'>
              📖
            </span>
          </div>
          <h2 className='text-lg font-bold text-gray-900 dark:text-white'>
            {title}
          </h2>
        </div>
        <form action={formAction}>
          <input type='hidden' name='itemID' value={id} />
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
    </div>
  );
};

const CartDisplay = ({ cart }) => {
  if (cart.length === 0) {
    return null;
  }
  return (
    <div className='bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-950 rounded-2xl p-6 mb-8 shadow-lg'>
      <h2 className='text-2xl font-bold text-center text-gray-900 dark:text-white mb-6'>
        Your Cart
      </h2>
      <ul className='space-y-4'>
        {cart.map((item, index) => (
          <li 
            key={index} 
            className='bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md flex items-center'
          >
            <div className='w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4'>
              <span className='text-blue-600 dark:text-blue-400'>🛒</span>
            </div>
            <span className='text-gray-800 dark:text-white'>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = async (formData, title) => {
    const id = String(formData.get('itemID'));
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setCart((cart) => [...cart, { id, title }]);

    return { id };
  };

  return (
    <div className='min-h-auto bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 rounded-2xl'>
      <div className='container mx-auto max-w-3xl'>
        <CartDisplay cart={cart} />
        <div className='space-y-6'>
          <AddToCartForm
            id='1'
            title='The Renaissance Mind: Polymaths of the Golden Age'
            addToCart={addToCart}
          />
          <AddToCartForm
            id='2'
            title='Interdisciplinary Genius: Modern Polymath Strategies'
            addToCart={addToCart}
          />
        </div>
      </div>
    </div>
  );
};

export { ShoppingCart as ActionExample2 };
