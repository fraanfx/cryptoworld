import { KeyboardEvent, useCallback } from 'react';


export function useKeyboardClick({ onEnterOrSpace }) {
  return useCallback(
    (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onEnterOrSpace();
      }
    },
    [onEnterOrSpace]
  );
}