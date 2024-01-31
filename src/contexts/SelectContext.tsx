import React, { createContext, useContext, useRef, useState } from 'react';

interface SelectContextType {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  triggerRef: React.RefObject<HTMLElement>;
  listRef: React.RefObject<HTMLUListElement>;
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
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  return (
    <SelectContext.Provider value={{ isOpen, onOpenChange: setIsOpen, triggerRef, listRef }}>
      {children}
    </SelectContext.Provider>
  );
};
