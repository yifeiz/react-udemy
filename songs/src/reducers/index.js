import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "i", duration: "4:05" },
    { title: "Lose Yourself", duration: "5:03" },
    { title: "No Role Modelz", duration: "3:53" },
    { title: "Gurenge", duration: "2:22" },
    { title: "Fancy", duration: "3:33" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
