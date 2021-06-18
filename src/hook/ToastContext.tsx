import React, { createContext, useCallback, useContext } from 'react';

import ToastContainer from '../components/ToastContainer';

interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}

const ToatsContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('Toast');
  }, []);

  const removeToast = useCallback(() => {
    console.log();
  }, []);

  return (
    <ToatsContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToatsContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToatsContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
