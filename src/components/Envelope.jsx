import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Envelope = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      // Start opening envelope flap
      setTimeout(() => {
        setShowLetter(true);
        // Slide letter out
        setTimeout(() => {
          onOpen?.();
        }, 1500);
      }, 600);
    }
  };

  return (
    <motion.div
      className="relative cursor-pointer"
      onClick={handleClick}
      whileHover={{ scale: isOpen ? 1 : 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Glow Effect on Hover */}
      <motion.div
        className="absolute -inset-4 rounded-full blur-xl"
        animate={{
          opacity: isOpen ? 0 : 0.5,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.4) 0%, transparent 70%)',
        }}
      />

      <div className="relative w-80 h-56">
        {/* Envelope Body */}
        <div className="absolute inset-0 bg-gradient-to-br from-romantic-pink to-pink-300 rounded-lg shadow-2xl overflow-hidden">
          {/* Envelope Texture */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
        </div>

        {/* Envelope Back (Inside) */}
        <div className="absolute inset-0 bg-gradient-to-t from-pink-200 to-pink-100 rounded-lg" />

        {/* Letter (inside envelope, initially hidden) */}
        <AnimatePresence>
          {showLetter && (
            <motion.div
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: -200, opacity: 1 }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="absolute left-4 right-4 h-48 bg-gradient-to-br from-cream to-white rounded-lg shadow-lg z-20"
              style={{
                background: 'linear-gradient(135deg, #FFF5F7 0%, #FFFFFF 100%)',
                transformOrigin: 'bottom center',
              }}
            >
              {/* Letter Content */}
              <div className="p-6 h-full flex flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="font-elegant text-2xl text-romantic-gold mb-2"
                >
                  Our Story
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="font-body text-sm text-gray-600"
                >
                  A journey of love...
                </motion.p>
                {/* Decorative Heart */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
                  className="mt-3 text-romantic-pink"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Envelope Bottom Flap */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pink-300 to-pink-200 origin-bottom"
          style={{
            clipPath: 'polygon(0 100%, 50% 0%, 100% 100%)',
          }}
        />

        {/* Envelope Side Flaps */}
        <div className="absolute top-20 left-0 w-40 h-36 bg-pink-200 origin-top-left"
          style={{
            clipPath: 'polygon(100% 0, 0 40%, 100% 100%)',
          }}
        />
        <div className="absolute top-20 right-0 w-40 h-36 bg-pink-200 origin-top-right"
          style={{
            clipPath: 'polygon(0 0, 100% 40%, 0 100%)',
          }}
        />

        {/* Envelope Top Flap (the one that opens) */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-pink-300 to-pink-200 origin-top z-30"
          style={{
            clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
            transformOrigin: 'top center',
          }}
          animate={isOpen ? { rotateX: 180 } : { rotateX: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Flap Shadow */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 100%)',
            }}
          />
        </motion.div>

        {/* Click Indicator (pulsing) */}
        {!isOpen && (
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="text-romantic-gold text-sm font-body font-medium">
              Click to open
            </div>
            <motion.div
              className="w-full h-0.5 bg-romantic-gold mt-1 origin-center"
              animate={{ scaleX: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        )}
      </div>

      {/* Floating decoration */}
      {!isOpen && (
        <motion.div
          className="absolute -top-8 -right-8 text-romantic-pink/60"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Envelope;
