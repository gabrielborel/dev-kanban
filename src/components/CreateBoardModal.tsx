import cx from 'classnames';
import { FormEvent, useState } from 'react';

interface CreateBoardModalProps {
  isVisible: boolean;
}

export const CreateBoardModal = ({ isVisible }: CreateBoardModalProps) => {
  const [boardName, setBoardName] = useState('');
  const handleCreateBoard = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className={cx(
        'absolute top-0 bg-black-overlay h-screen w-screen items-center justify-center',
        {
          hidden: !isVisible,
          flex: isVisible,
        }
      )}
    >
      <form
        onSubmit={handleCreateBoard}
        className='bg-zinc-900 w-full max-w-[400px] p-8 text-zinc-100 text-center rounded-md'
      >
        <strong className='font-semibold text-xl'>Create a New Board</strong>

        <input
          type='text'
          placeholder='Enter the board name'
          className='bg-zinc-700 w-full mt-6 p-3 rounded-md placeholder:text-zinc-100 placeholder:text-center text-center font-semibold'
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
        />

        <button
          type='submit'
          className='w-full p-3 bg-indigo-400 rounded-md mt-3 font-semibold hover:bg-indigo-500 transition-colors'
        >
          + Create
        </button>
      </form>
    </div>
  );
};
