import { useContext, useState } from "react";
import { createContext } from "react";

const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
  const [addToHistory, setAddToHistory] = useState([]);
  return (
    <HistoryContext.Provider value={{ addToHistory, setAddToHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

const useHistoryContext = () => useContext(HistoryContext);

export { HistoryProvider, useHistoryContext };
