import React, { RefCallback, createContext, useContext, useEffect, useRef, useState } from 'react';

import { Option } from '@components/Select/Select.types';

interface OptionContextType {
  selectedOption?: Option;
  onSelectOption: (option?: Option) => void;
  selectedOptionName: string;
  setListItemsRef: RefCallback<HTMLLIElement>;
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
  const [selectedOptionName, setSelectedOptionName] = useState<string>('');
  const listItemsRef = useRef<Map<string | number, HTMLLIElement> | null>(null);

  function getListItemsRef() {
    if (!listItemsRef.current) {
      listItemsRef.current = new Map();
    }

    return listItemsRef.current;
  }

  const setListItemsRef: RefCallback<HTMLLIElement> = (node) => {
    const map = getListItemsRef();
    const hasValue = node?.getAttribute('value');

    if (node && hasValue) {
      map.set(node.getAttribute('value') || '', node);
    }
  };

  useEffect(() => {
    const selectedOptionName = listItemsRef.current?.get(selectedOption?.value ?? '')?.textContent ?? '';
    setSelectedOptionName(selectedOptionName);
  }, [selectedOption]);

  return (
    <OptionContext.Provider
      value={{
        selectedOption,
        onSelectOption: (option?: Option) => {
          setSelectedOption(option);
          if (store.onSelectOption) store.onSelectOption(option);
        },
        selectedOptionName,
        setListItemsRef,
      }}
    >
      {children}
    </OptionContext.Provider>
  );
};

export default OptionProvider;
