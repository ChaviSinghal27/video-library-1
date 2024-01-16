import { createContext, useContext, useReducer } from "react";

const PlaylistContext = createContext();

const dataHandler = (state, action) => {
  switch (action.type) {
    case "PLAYLIST":
      return (state = {
        ...state,
        addToPlaylist:
          state.addToPlaylist.length === 0
            ? [action.payload]
            : [...state.addToPlaylist, action.payload],
      });
    case "REMOVE_FROM_PLAYLIST":
      return (state = {
        ...state,
        addToPlaylist: [
          ...state.addToPlaylist.filter((id) => id !== action.payload),
        ],
      });

    case "LIKE":
      return (state = {
        ...state,
        addToLike:
          state.addToLike.length === 0
            ? [action.payload]
            : [...state.addToLike, action.payload],
      });
    case "REMOVE_FROM_LIKE":
      return (state = {
        ...state,
        addToLike: [...state.addToLike.filter((id) => id !== action.payload)],
      });
    default:
      return state;
  }
};

const PlaylistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataHandler, {
    addToPlaylist: [],
    addToLike: [],
  });
  return (
    <PlaylistContext.Provider value={{ state, dispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylistContext = () => useContext(PlaylistContext);

export { PlaylistProvider, usePlaylistContext };
