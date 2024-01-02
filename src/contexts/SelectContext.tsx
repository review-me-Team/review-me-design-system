import React, { createContext, useContext, useState } from 'react';

interface SelectContextType {
  isOpen?: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export const SelectContext = createContext<SelectContextType | null>(null);

export const useSelectContext = () => {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error('SelectContext should be used within SelectContext.Provider');
  }

  return context;
};

interface SelectProviderType {
  children: React.ReactNode;
}

export const SelectProvider = ({ children }: SelectProviderType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SelectContext.Provider value={{ isOpen, onOpenChange: setIsOpen }}>{children}</SelectContext.Provider>
  );
};
