// Action creator
export const selectSong = (song) => { // Export named
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};


