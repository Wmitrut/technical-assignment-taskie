import { useEffect, useState } from 'react';

const useFlashMessage = (delay = 3000) => {
  const [isShown, setShown] = useState(false);
  useEffect(() => {
    let timeout;
    if (isShown) {
      timeout = setTimeout(() => {
        setShown(false);
      }, delay);
    }
    return () => {
      clearInterval(timeout);
    };
  }, [delay, isShown]);
  return [isShown, setShown];
};
export default useFlashMessage;
