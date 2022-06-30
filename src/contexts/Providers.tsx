import { ReactNode } from 'react';
import { BoardsProvider } from './BoardsContext';
import { SidebarProvider } from './SidebarContext';

interface IProviders {
  children: ReactNode;
}

export const Providers = ({ children }: IProviders) => {
  return (
    <BoardsProvider>
      <SidebarProvider>{children}</SidebarProvider>
    </BoardsProvider>
  );
};
