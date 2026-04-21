import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Envelope from '../components/Envelope';
import Timeline from '../components/Timeline';
import { timelineData } from '../data/timeline';
import AnimatedBackground from '../components/AnimatedBackground';

const Home = ({ onEnvelopeOpen }) => {
  const [showTimeline, setShowTimeline] = useState(false);

  const handleEnvelopeOpen = () => {
    setShowTimeline(true);
    if (onEnvelopeOpen) {
      onEnvelopeOpen();
    }
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <AnimatedBackground />

      <AnimatePresence mode="wait">
        {!showTimeline ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.1,
              filter: 'blur(10px)',
            }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="text-center">
              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="font-elegant text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 px-4"
              >
                Our Story
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="font-body text-base sm:text-lg text-gray-600 mb-12"
              >
                A special surprise awaits you...
              </motion.p>

              {/* Envelope */}
              <Envelope onOpen={handleEnvelopeOpen} />

              {/* Decorative Floating Elements */}
              <div className="absolute top-20 left-20 opacity-20 hidden sm:block">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </motion.div>
              </div>

              <div className="absolute bottom-20 right-20 opacity-20 hidden sm:block">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="timeline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            exit={{ opacity: 0 }}
            className="relative"
          >
            <Timeline data={timelineData} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
