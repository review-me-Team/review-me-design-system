import React, { createContext, useContext, useState } from 'react';

interface Option {
  value: string | number;
  label: string | number;
}
interface OptionContextType {
  selectedOption?: Option;
  onSelectOption: (option?: Option) => void;
}

export const OptionContext = createContext<OptionContextType | null>(null);

export const useOptionContext = () => {
  const context = useContext(OptionContext);

  if (!context) {
    throw new Error('OptionContext should be used within OptionContext.Provider');
  }

  return context;
};

interface OptionProviderType {
  store: { defaultOption?: Option; onSelectOption?: (option?: Option) => void };
  children: React.ReactNode;
}

const OptionProvider = ({ store, children }: OptionProviderType) => {
  const [selectedOption, setSelectedOption] = useState<Option | undefined>(store.defaultOption);

  return (
    <OptionContext.Provider
      value={{
        selectedOption,
        onSelectOption: (option?: Option) => {
          setSelectedOption(option);
          if (store.onSelectOption) store.onSelectOption(option);
        },
      }}
    >
      {children}
    </OptionContext.Provider>
  );
};

export default OptionProvider;
