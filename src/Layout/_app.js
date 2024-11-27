import React from "react";
import "@/styles/globals.css";
import Layout from "./Layout";
import { AudioContext, AudioProvider } from "@/context/AudioContext";

function MyApp({ Component, pageProps }) {
  return (
    <AudioProvider>
      <PersistentAudioPlayer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AudioProvider>
  );
}

const PersistentAudioPlayer = () => {
  const { audioRef } = React.useContext(AudioContext);

  return (
    <audio ref={audioRef} style={{ display: 'none' }}>
      <source src="https://swahilipotfm.out.airtime.pro/swahilipotfm_a?_ga=2.140975346.1118176404.1720613685-1678527295.1702105127" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default MyApp;
