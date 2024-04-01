import { useState } from 'react';

const useModal = (initIsOpen?: boolean) => {
  const [isOpen, setIsOpen] = useState(initIsOpen || false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return { isOpen, open, close };
};

export default useModal;
