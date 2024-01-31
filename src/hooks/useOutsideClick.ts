import { RefObject, useEffect } from 'react';

interface Props {
  isOpen: boolean;
  triggerRef: RefObject<HTMLElement | null>;
  listRef: RefObject<HTMLElement | null>;
  onClick: (e?: MouseEvent) => void;
}

const useOutsideClick = ({ isOpen, triggerRef, listRef, onClick }: Props) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (listRef.current === null || triggerRef.current === null || !isOpen) return;

      const targetElement = e.target as Node;

      if (!triggerRef.current.contains(targetElement) && !listRef.current.contains(targetElement)) {
        onClick(e);
      }
    };

    // TriggerButton 하위 컴포넌트인 Icon 컴포넌트를 클릭하면 이벤트 버블링으로 인해 OptionList가 열리자마자 닫히는 문제 발생
    // 따라서 세번째 옵션에 true를 전달하여 이벤트 캡쳐링을 사용
    window.addEventListener('click', handleClick, true);

    return () => {
      window.removeEventListener('click', handleClick, true);
    };
  }, [isOpen, listRef, triggerRef, onClick]);
};

export default useOutsideClick;
