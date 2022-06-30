import Link from 'next/link';
import { Kanban, SquareHalf, EyeSlash, Eye } from 'phosphor-react';
import cx from 'classnames';
import React from 'react';
import { useSidebar } from '../contexts/SidebarContext';

export const Sidebar = () => {
  const boards = ['Platform Launch', 'Marketing Plan', 'Roadmap'];
  const { isSidebarOpen, setSidebarStatus } = useSidebar();

  return isSidebarOpen ? (
    <aside
      className={cx(
        'md:flex bg-zinc-800 w-[290px] h-full py-5 flex-col justify-between pt-24 md:pt-5',
        {
          flex: isSidebarOpen,
        }
      )}
    >
      <div>
        <h1 className='hidden md:flex items-center font-semibold gap-1 text-2xl mb-10 pl-5 text-zinc-100'>
          <Kanban size={32} className='text-indigo-500' /> dev-kanban
        </h1>

        <div>
          <p className='uppercase text-sm font-semibold leading-relaxed pl-5 font-tri text-zinc-100'>
            All boards ({boards.length})
          </p>

          <div className='mt-4'>
            {boards.map((board, id) => (
              <Link href='/dashboard/slug' key={id}>
                <a className='flex items-center gap-3  text-gray-100 font-semibold pl-5 pr-10 py-2 rounded-r-full w-[260px] mb-1'>
                  <SquareHalf size={22} />
                  {board}
                </a>
              </Link>
            ))}
          </div>
        </div>

        <button className='pl-5 flex items-center gap-3 font-semibold text-indigo-500 mt-4'>
          <SquareHalf size={22} />+ Create New Board
        </button>
      </div>

      <div>
        <button className='bg-zinc-900 block w-[86%] mb-3 py-2 rounded-lg font-semibold text-zinc-100 mx-auto'>
          Light Mode
        </button>

        <button
          className='pl-5 text-zinc-400 flex items-center gap-2'
          onClick={() => setSidebarStatus(false)}
        >
          <EyeSlash />
          Hide Sidebar
        </button>
      </div>
    </aside>
  ) : (
    <aside
      className={cx('hidden bg-zinc-800 md:flex flex-col justify-between', {
        hidden: isSidebarOpen,
      })}
    >
      <Kanban size={32} className='text-indigo-500 mx-auto mt-5 mb-auto' />

      <button
        className='flex items-center gap-1 p-1 px-2 rounded-sm mx-2 mb-6 text-zinc-200 bg-zinc-900 hover:bg-zinc-700 transition-colors'
        onClick={() => setSidebarStatus(true)}
      >
        <Eye />
        Show
      </button>
    </aside>
  );
};
