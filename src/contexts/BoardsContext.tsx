import { createContext, ReactNode, useContext } from 'react';
import { CreateBoardModal } from '../components/CreateBoardModal';

const BoardsContext = createContext({});

interface IBoardsProvider {
  children: ReactNode;
}

export const BoardsProvider = ({ children }: IBoardsProvider) => {
  return (
    <BoardsContext.Provider value={{}}>
      {children}

      <CreateBoardModal isVisible={false} />
    </BoardsContext.Provider>
  );
};

export const useBoards = () => useContext(BoardsContext);
