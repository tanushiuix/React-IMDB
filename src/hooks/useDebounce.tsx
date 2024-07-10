import { useRef } from "react";

export function debounce(func: Function, delay: number) {
  let timeoutId: NodeJS.Timeout | null = null;

  return function debounced(...args: any[]) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
