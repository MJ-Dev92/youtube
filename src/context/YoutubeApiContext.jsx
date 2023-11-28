import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
import FakeYoutube from "../api/fakeYoutube";

export const YoutubeApiContext = createContext();

const youtube = new FakeYoutube();

export function YoutubeApiProvider({ childeren }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {childeren}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
