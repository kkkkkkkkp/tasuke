
import { useEffect, useState } from 'react';
import LoadingFillup from '../loader/LoadingFillup/LoadingFillup';

export default {
  title: 'Loading/Fill up',
  component: LoadingFillup,
};
export const Default = () => {
    const [value, setValue] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setValue((oldValue) => {
          const newValue = oldValue + 1;
          if (newValue > 100) {
            clearInterval(interval);
            return 100;
          }
          return newValue;
        });
      }, 50);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <LoadingFillup value={value} />
        </div>
    );
  };