import { useState, useEffect } from 'react';

function useLocalStorage(key: string, initialValue: string) {
    const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log('Error retrieving data from localStorage:', error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
        const valueToStore = 
            typeof storedValue === "function"
                ? storedValue(storedValue)
                : storedValue;
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.log('Error storing data in localStorage:', error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;