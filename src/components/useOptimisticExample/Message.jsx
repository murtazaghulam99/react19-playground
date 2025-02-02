import { useOptimistic, useState, useRef } from 'react';

const MessageForm = ({ addOptimisticMessage, sendMessage }) => {
  const formRef = useRef();

  const formAction = async (formData) => {
    addOptimisticMessage(formData.get('message'));

    formRef.current.reset();

    await sendMessage(formData);
  };

  return (
    <form 
      action={formAction} 
      ref={formRef} 
      className='flex items-center mb-5 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-md'
    >
      <input
        type='text'
        name='message'
        placeholder='Type your message...'
        className='flex-grow mr-4 py-3 px-4 
        bg-gray-100 dark:bg-gray-700 
        text-gray-900 dark:text-white 
        rounded-xl border-none 
        focus:outline-none focus:ring-2 focus:ring-blue-500 
        transition-all duration-300'
        required
      />
      <button
        type='submit'
        className='bg-blue-600 hover:bg-blue-700 text-white font-bold 
        py-3 px-6 rounded-2xl 
        transition-all duration-300 transform hover:scale-105 
        focus:outline-none focus:ring-2 focus:ring-blue-500 
        dark:bg-blue-800 dark:hover:bg-blue-700'
      >
        Send
      </button>
    </form>
  );
};

const Thread = ({ messages, sendMessage }) => {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );

  return (
    <div className='bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-950 rounded-2xl p-6 shadow-lg'>
      <MessageForm
        addOptimisticMessage={addOptimisticMessage}
        sendMessage={sendMessage}
      />
      <div className='space-y-4'>
        {optimisticMessages.map((message, index) => (
          <div 
            key={index} 
            className={`
              flex items-center p-4 rounded-xl 
              ${message.sending 
                ? 'bg-blue-100 dark:bg-blue-900' 
                : 'bg-white dark:bg-gray-800'
              }
              transition-all duration-300
            `}
          >
            <div className='w-8 h-8 bg-blue-200 dark:bg-blue-700 rounded-full flex items-center justify-center mr-4'>
              <span className='text-blue-600 dark:text-blue-300'>💬</span>
            </div>
            <div className='flex-grow'>
              <span className='text-gray-900 dark:text-white'>{message.text}</span>
              {message.sending && (
                <small className='ml-2 text-blue-600 dark:text-blue-300 italic'>
                  Sending...
                </small>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const deliverMessage = async (message) => {
  await new Promise((res) => setTimeout(res, 1000));
  return message;
};

const MessageBox = () => {
  const [messages, setMessages] = useState([]);

  async function sendMessage(formData) {
    const sentMessage = await deliverMessage(formData.get('message'));

    setMessages((messages) => [...messages, { text: sentMessage }]);
  }

  return (
    <div className='min-h-auto bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 rounded-2xl'>
      <div className='container mx-auto max-w-2xl'>
        <Thread messages={messages} sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export { MessageBox as UseOptimisticExample };
