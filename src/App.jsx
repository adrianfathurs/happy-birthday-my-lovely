import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import PasswordInput from './components/PasswordInput';
import BirthdayCard from './components/BirthdayCard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showBirthday, setShowBirthday] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [cursorTrail, setCursorTrail] = useState([]);
  const playerRef = useRef(null);
  const [playerReady, setPlayerReady] = useState(false);

  // Load YouTube IFrame API
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        setPlayerReady(true);
      };
    } else {
      setPlayerReady(true);
    }
  }, []);

  // Initialize YouTube Player
  useEffect(() => {
    if (playerReady && !playerRef.current) {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: 'HxR32xRuLM0', // First video in the playlist
        playerVars: {
          list: 'RDHxR32xRuLM0', // Playlist parameter
          listType: 'playlist',
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          loop: 1,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          theme: 'light',
        },
        events: {
          onReady: (event) => {
            event.target.setVolume(30);
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else if (event.data === window.YT.PlayerState.PAUSED) {
              setIsPlaying(false);
            }
          },
        },
      });
    }
  }, [playerReady]);

  // Cursor Trail Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const trail = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
      };

      setCursorTrail((prev) => [...prev.slice(-8), trail]);

      // Remove old trail points
      setTimeout(() => {
        setCursorTrail((prev) => prev.filter((t) => t.id !== trail.id));
      }, 500);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleMusic = () => {
    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  const startMusic = () => {
    if (playerRef.current && !isPlaying) {
      playerRef.current.playVideo();
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Hidden YouTube Player */}
      <div id="youtube-player" style={{ display: 'none' }}></div>

      {/* Cursor Trail Effect */}
      <div className="pointer-events-none fixed inset-0 z-50">
        {cursorTrail.map((point) => (
          <div
            key={point.id}
            className="fixed w-2 h-2 rounded-full pointer-events-none"
            style={{
              left: point.x,
              top: point.y,
              background: 'radial-gradient(circle, rgba(212, 175, 55, 0.6) 0%, transparent 70%)',
              animation: 'cursorFade 0.5s ease-out forwards',
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes cursorFade {
          from {
            opacity: 0.6;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0);
          }
        }
      `}</style>

      {/* Music Toggle Button */}
      <motion.button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle music"
      >
        <motion.div
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: 'linear' }}
        >
          {isPlaying ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-romantic-gold">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-romantic-pink">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </motion.div>
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: isPlaying
              ? ['0 0 0 0 rgba(212, 175, 55, 0.4)', '0 0 0 10px rgba(212, 175, 55, 0)']
              : '0 0 0 0 rgba(250, 218, 221, 0)',
          }}
          transition={{
            duration: 1.5,
            repeat: isPlaying ? Infinity : 0,
          }}
        />
      </motion.button>

      {/* Music Status Indicator */}
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-6 right-20 z-50 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg text-sm font-body text-gray-600"
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ♪ Playing romantic music
          </motion.span>
        </motion.div>
      )}

      {/* Main Content */}
      {!isAuthenticated ? (
        <PasswordInput onSuccess={() => setIsAuthenticated(true)} />
      ) : showBirthday ? (
        <BirthdayCard onNext={() => setShowBirthday(false)} />
      ) : (
        <Home onEnvelopeOpen={startMusic} />
      )}

      {/* Footer */}
      <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center text-sm font-body text-gray-500/60"
        >
          Made with ❤️ Wahyu Budi Lestari to celebrate her special day.
        </motion.div>
      </footer>
    </div>
  );
}

export default App;
