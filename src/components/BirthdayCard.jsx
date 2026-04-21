import { useState } from 'react';
import { motion } from 'framer-motion';

const BirthdayCard = ({ onNext }) => {
  const [showFullMessage, setShowFullMessage] = useState(false);

  // Floating hearts for background
  const hearts = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 20 + 10,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  // Sparkles
  const sparkles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
  }));

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50">
      {/* Animated Background Gradients */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(244, 114, 182, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 70%, rgba(251, 191, 36, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 80%, rgba(244, 114, 182, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 60% 20%, rgba(251, 191, 36, 0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating Hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute pointer-events-none"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 15, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg
            width={heart.size}
            height={heart.size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-pink-300/50"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute w-1.5 h-1.5 bg-amber-300 rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: sparkle.delay,
          }}
        />
      ))}

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        whileHover={{
          scale: 1.02,
          boxShadow: '0 25px 50px -12px rgba(244, 114, 182, 0.25)',
        }}
        onClick={() => setShowFullMessage(true)}
        className="relative z-10 max-w-lg w-full mx-4 p-8 md:p-12"
      >
        {/* Glassmorphism Card */}
        <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/30">
          {/* Glowing Border Effect */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            animate={{
              boxShadow: [
                '0 0 20px rgba(244, 114, 182, 0.3), inset 0 0 20px rgba(244, 114, 182, 0.1)',
                '0 0 40px rgba(251, 191, 36, 0.3), inset 0 0 30px rgba(251, 191, 36, 0.1)',
                '0 0 20px rgba(244, 114, 182, 0.3), inset 0 0 20px rgba(244, 114, 182, 0.1)',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />

          {/* Decorative Organic Blobs */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-200/50 to-rose-200/50 rounded-full blur-2xl -translate-y-16 translate-x-16" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-amber-200/50 to-yellow-200/50 rounded-full blur-2xl translate-y-20 -translate-x-20" />

          {/* Content */}
          <div className="relative z-10 text-center py-8">
            {/* Age Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                🎂 25th Birthday 🎂
              </div>
            </motion.div>

            {/* Main Message with Cursive Font */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-4xl md:text-5xl font-bold mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: 'linear-gradient(135deg, #f472b6 0%, #ec4899 50%, #fbbf24 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              I love you ❤️
            </motion.h1>

            {/* Subtitle with Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showFullMessage ? 1 : 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-4"
            >
              <p
                className="text-xl md:text-2xl text-gray-700 leading-relaxed"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                From the very first moment…
              </p>
              <p
                className="text-xl md:text-2xl text-gray-700 leading-relaxed"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                you've been my favorite story.
              </p>
            </motion.div>

            {/* Signature */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: showFullMessage ? 1 : 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-8 text-gray-600 italic"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              — from someone who loves you endlessly
            </motion.p>

            {/* Tap to Reveal Hint */}
            {!showFullMessage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-8 text-sm text-gray-500"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  Tap to reveal
                </span>
              </motion.div>
            )}

            {/* Continue Button - Only show after reveal */}
            {showFullMessage && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className="mt-8 px-8 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Continue to Our Story →
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BirthdayCard;
