import React, { useEffect, useContext } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from './Contactsection';
import VideoPlayer from '@/components/VideoPlayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRadio, faMusic } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Live.module.css';
import { AudioContext } from '../context/AudioContext';

const LivePage = () => {
  const { audioRef, setIsPlaying } = useContext(AudioContext);

  useEffect(() => {
    if (audioRef.current) {
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.log("Autoplay prevented:", error);
            setIsPlaying(false);
          });
      }
    }
  }, [setIsPlaying]);

  return (
    <section className="content-space-t-3">
      <Header />
      <main className="content">
        <div className="container mt-4">
          <h1 className="text-center mb-4">Watch & Listen Live</h1>
          
          <div className={styles.playerContainer}>
            {/* Audio Player */}
            <div className={styles.audioSection}>
              <div className={styles.audioInfo}>
                <FontAwesomeIcon icon={faRadio} size="2x" style={{ marginBottom: '1rem' }} />
                <h2 className={styles.sectionTitle}>Live Radio Stream</h2>
                <p className={styles.nowPlaying}>
                  <FontAwesomeIcon icon={faMusic} /> Now Playing on SwahiliPot FM
                </p>
              </div>
              <div className={styles.audioContainer}>
                <audio 
                  ref={audioRef}
                  controls 
                  className={styles.audioPlayer}
                >
                  <source 
                    src="https://swahilipotfm.out.airtime.pro/swahilipotfm_a?_ga=2.140975346.1118176404.1720613685-1678527295.1702105127" 
                    type="audio/mpeg" 
                  />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>

            {/* Video Player */}
            <div className={styles.videoSection}>
              <h2 className={styles.sectionTitle}>Live Video Stream</h2>
              <div className={styles.videoWrapper}>
                <VideoPlayer />
              </div>
            </div>
          </div>
        </div>
      </main>
      <ContactSection />
      <Footer />
    </section>
  );
};

export default LivePage; 