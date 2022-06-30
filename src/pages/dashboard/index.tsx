import type { NextPage } from 'next';
import { Sidebar } from '../../components/Sidebar';
import { List, X } from 'phosphor-react';
import { useSidebar } from '../../contexts/SidebarContext';

const Dashboard: NextPage = () => {
  const { isSidebarOpen, setSidebarStatus } = useSidebar();

  return (
    <div className='bg-zinc-900 h-screen flex w-full overflow-x-scroll scroll-smooth overflow-y-hidden'>
      <Sidebar />

      <div className='flex-1'>
        <div className='absolute w-full left-0 border-b border-zinc-600 text-zinc-100 md:hidden p-5 bg-zinc-800'>
          <button
            className='flex items-center font-semibold gap-2 text-2xl text-zinc-100'
            onClick={() => setSidebarStatus((value) => !value)}
          >
            {isSidebarOpen ? (
              <X size={32} className='text-indigo-500' />
            ) : (
              <List size={32} className='text-indigo-500' />
            )}
            dev-kanban
          </button>
        </div>

        <div className='flex-1 flex items-center justify-center text-zinc-100'>
          <div className='mx-auto w-full min-w-[300px] max-w-[900px] text-center px-6 pt-40 md:pt-52'>
            <p className='text-3xl lg:text-4xl block mb-4'>
              Welcome to the{' '}
              <strong className='text-4xl lg:text-5xl font-semibold text-indigo-500'>
                dev-kanban
              </strong>
              .
            </p>
            <p className='block text-lg lg:text-xl'>
              Kanban is a visual system used to manage and keep track of work as it moves through a
              process. The word kanban is Japanese and roughly translated means “card you can see”.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
