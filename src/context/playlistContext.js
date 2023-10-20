import { createContext, useContext, useReducer } from "react";

const PlaylistContext = createContext();

const playlistHandler = (state, action) => {
  switch (action.type) {
    case "PLAYLIST":
      state = {
        ...state,
        addToPlaylist:
          state.addToPlaylist.length === 0
            ? [action.payload]
            : [...state.addToPlaylist, action.payload],
      };

    default:
      return state;
  }
};

const PlaylistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(playlistHandler, {
    addToPlaylist: [],
  });
  return (
    <PlaylistContext.Provider value={{ state, dispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylistContext = () => useContext(PlaylistContext);

export { PlaylistProvider, usePlaylistContext };
