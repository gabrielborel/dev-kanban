import Link from 'next/link';
import { Kanban, SquareHalf, EyeSlash, Eye } from 'phosphor-react';

export const Sidebar = () => {
  const boards = ['Platform Launch', 'Marketing Plan', 'Roadmap'];

  return (
    <aside className='hidden md:flex bg-zinc-800 w-[290px] h-full py-5 flex-col justify-between'>
      <div>
        <h1 className='flex items-center font-semibold gap-1 text-2xl mb-10 pl-5 text-zinc-100'>
          <Kanban size={32} className='text-indigo-900' /> dev-kanban
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

        <button className='pl-5 text-zinc-400 flex items-center gap-2'>
          <EyeSlash />
          Hide Sidebar
        </button>
      </div>
    </aside>
  );
};
