import React from 'react';
import { AudioProvider } from '../context/AudioContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AudioProvider>
      <Component {...pageProps} />
    </AudioProvider>
  );
};

export default MyApp; 