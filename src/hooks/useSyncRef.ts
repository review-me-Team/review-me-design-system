import { type Ref, type RefCallback, type MutableRefObject } from 'react';

const setRef = <T,>(
  ref: MutableRefObject<T | null> | ((instance: T | null) => void) | null | undefined,
  value: T | null,
) => {
  if (typeof ref === 'function') ref(value);
  else if (ref) ref.current = value;
};

export const useSyncRef = <Instance,>(...refs: Ref<Instance>[]): RefCallback<Instance> | null => {
  if (refs.every((ref) => ref == null)) {
    return null;
  }

  return (instance) => {
    refs.forEach((ref) => {
      setRef(ref, instance);
    });
  };
};
