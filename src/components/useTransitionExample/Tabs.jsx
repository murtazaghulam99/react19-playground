import { useState, useTransition } from 'react';
import TabButton from './TabButton';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

export function Tabs() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('tab1');

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }

  return (
    <div className='min-h-auto bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 rounded-2xl'>
      <div className='container mx-auto max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8'>
        <div className='flex space-x-4 mb-8 border-b border-gray-200 dark:border-gray-700 pb-4'>
          <TabButton 
            isActive={tab === 'tab1'} 
            onClick={() => selectTab('tab1')}
          >
            Tab One
          </TabButton>
          <TabButton 
            isActive={tab === 'tab2'} 
            onClick={() => selectTab('tab2')}
          >
            Tab 2 (slow)
          </TabButton>
          <TabButton 
            isActive={tab === 'tab3'} 
            onClick={() => selectTab('tab3')}
          >
            Tab 3
          </TabButton>
        </div>
        
        <div className={`transition-opacity duration-500 ${isPending ? 'opacity-50' : 'opacity-100'}`}>
          {tab === 'tab1' && <Tab1 />}
          {tab === 'tab2' && <Tab2 />}
          {tab === 'tab3' && <Tab3 />}
        </div>
      </div>
    </div>
  );
}

export { Tabs as UseTransitionExample };
