import React from "react";
import ReactPlayer from "react-player";

export const PlayerContext = React.createContext();

const PlayerProvider = (props) => {
  const [playing, setPlaying] = React.useState(false);
  const player = React.useRef(ReactPlayer);

  return (
    <PlayerContext.Provider
      value={{
        playing,
        setPlaying,
        player,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};
export default PlayerProvider;
