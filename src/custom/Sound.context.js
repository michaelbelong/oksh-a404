import React, { useMemo, createContext, useContext } from "react";
import useSound from "use-sound";

const SOUND_URL = "https://okpc.app/sounds/spritesheet/SpriteSheet.mp3";

const useSoundSnippet = () => {
  const [START, DURATION] = [19800, 1000];
  const SOUND_OPT = { sprite: { mouseClick: [START, DURATION] } };
  const [play] = useSound(SOUND_URL, SOUND_OPT);
  // const playClick = () => play({ id: 'mouseClick' })
  const playClick = (cbFn) => {
    play({ id: "mouseClick" });
    return cbFn;
  };
  return { playClick };
};

export const SoundContext = createContext(null);

export const SoundConsumer = () => {
  const context = useContext(SoundContext);
  // console.info('context ::', context)
  if (!context) throw new Error("Oh No ::");
  return context;
};

export const SoundProvider = (props) => {
  const sound = useSoundSnippet();
  const value = useMemo(() => ({ ...sound }), [sound]);
  return <SoundContext.Provider value={value} {...props} />;
};
