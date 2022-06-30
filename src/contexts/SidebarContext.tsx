import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

interface ISidebarContext {
  isSidebarOpen: boolean;
  setSidebarStatus: Dispatch<SetStateAction<boolean>>;
}

const SidebarContext = createContext({} as ISidebarContext);

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isSidebarOpen, setSidebarStatus] = useState(true);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setSidebarStatus }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
