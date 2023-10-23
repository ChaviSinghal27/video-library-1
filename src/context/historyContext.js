import { useContext, useReducer } from "react";
import { createContext } from "react";

const HistoryContext = createContext();

const historyHandler = (state, action) => {
  switch (action.type) {
    case "HISTORY":
      return (state = {
        ...state,
        addToHistory:
          state.addToHistory.length === 0
            ? [action.payload]
            : [...state.addToHistory, action.payload],
      });

    default:
      return state;
  }
};

const HistoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(historyHandler, {
    addToHistory: [],
  });
  return (
    <HistoryContext.Provider value={{ state, dispatch }}>
      {children}
    </HistoryContext.Provider>
  );
};

const useHistoryContext = () => useContext(HistoryContext);

export { HistoryProvider, useHistoryContext };
