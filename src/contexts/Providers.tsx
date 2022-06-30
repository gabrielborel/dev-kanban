import { ReactNode } from 'react';
import { SidebarProvider } from './SidebarContext';

interface IProviders {
  children: ReactNode;
}

export const Providers = ({ children }: IProviders) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};
