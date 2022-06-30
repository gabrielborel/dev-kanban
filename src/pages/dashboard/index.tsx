import type { NextPage } from 'next';
import { Sidebar } from '../../components/Sidebar';

const Dashboard: NextPage = () => {
  return (
    <div className='bg-zinc-900 h-screen flex'>
      <Sidebar />
      <div className='flex-1'>
        <div className='text-zinc-100 md:hidden p-5 bg-zinc-800'>Oi</div>

        <div className='flex-1 flex items-center justify-center text-zinc-100'>
          <div className='mx-auto w-full max-w-[900px] text-center px-6 pt-52'>
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

            <p className='mt-10'>
              You can start to track you work, just{' '}
              <button className='text-indigo-300 font-semibold border-b-2 rounded-sm border-transparent hover:border-indigo-300 transition-colors'>
                Create a New Board
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
