import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [collageItems, setCollageItems] = useState([]);

  useEffect(() => {
    // List all media files from public/images folder
    const basePath = '/happy-birthday-my-lovely/';
    const mediaFiles = [
      'card_1_1.jpeg',
      'card_1_2.jpeg',
      'card_2_1.jpeg',
      'card_2_2.jpeg',
      'card_3_1.jpeg',
      'card_3_2.jpeg',
      'card_3_3.jpeg',
      'card_3_4.jpeg',
      'card_3_5.jpeg',
      'card_4_1.jpeg',
      'card_4_2.jpeg',
      'card_4_3.jpeg',
      'card_4_4.jpeg',
      'card_4_5.jpeg',
      'card_4_6.jpeg',
      'card_4_7.jpeg',
      'card_5_1.jpeg',
      'card_5_2.jpeg',
      'card_5_3.jpeg',
      'card_5_4.jpeg',
      'card_5_5.jpeg',
      'card_5_6.jpeg',
      'card_5_7.jpeg',
      'card_5_8.jpeg',
      'card_5_9.jpeg',
      'card_5_10.jpeg',
      'card_5_11.jpeg',
      'card_6_1.jpeg',
      'card_6_2.jpeg',
      'card_6_3.jpeg',
      'card_6_4.jpeg',
      'card_6_5.jpeg',
      'card_6_6.jpeg',
      'card_6_7.jpeg',
      'card_6_8.jpeg',
    ].map(file => `${basePath}images/${file}`);

    // Generate well-distributed positions for collage
    const items = [];
    const numCopies = 2; // Reduced to avoid overlapping

    // Create a grid-based distribution for better spacing
    const cols = 8;
    const rows = 6;
    const cellWidth = 100 / cols;
    const cellHeight = 100 / rows;

    for (let copy = 0; copy < numCopies; copy++) {
      mediaFiles.forEach((media, index) => {
        // Calculate grid position with some randomness within cells
        const gridIndex = (index + copy * Math.floor(mediaFiles.length / 2)) % (cols * rows);
        const gridX = (gridIndex % cols) * cellWidth;
        const gridY = Math.floor(gridIndex / cols) * cellHeight;

        items.push({
          id: `${index}-${copy}`,
          src: media,
          x: gridX + Math.random() * cellWidth * 0.6, // Keep within cell with margin
          y: gridY + Math.random() * cellHeight * 0.6,
          rotation: Math.random() * 60 - 30, // Less rotation for cleaner look
          delay: Math.random() * 5,
          duration: Math.random() * 20 + 20,
          scale: Math.random() * 0.3 + 0.6, // Smaller scale
        });
      });
    }

    setCollageItems(items);
  }, []);

  const isVideo = (url) => {
    if (!url) return false;
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv'];
    return videoExtensions.some(ext => url.toLowerCase().includes(ext));
  };

  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {/* Base Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-romantic-light via-pink-50 to-romantic-pink/20" />

      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(250, 218, 221, 0.8) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(255, 245, 247, 0.8) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 20%, rgba(212, 175, 55, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(250, 218, 221, 0.8) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Collage Background */}
      <div className="absolute inset-0">
        {collageItems.map((item) => {
          const videoFile = isVideo(item.src);

          return (
            <motion.div
              key={item.id}
              className="absolute overflow-hidden rounded-lg shadow-2xl"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                width: '120px',
                height: '120px',
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 0.35,
                scale: item.scale,
                rotate: [item.rotation, item.rotation + 3, item.rotation],
                y: [0, -15, 0],
              }}
              transition={{
                duration: item.duration,
                delay: item.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {videoFile ? (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ transform: `scale(1.2)` }}
                />
              ) : (
                <img
                  src={item.src}
                  alt="Collage"
                  className="w-full h-full object-cover"
                  style={{ transform: `scale(1.2)` }}
                />
              )}
              {/* Overlay to ensure opacity */}
              <div className="absolute inset-0 bg-white/20"></div>
            </motion.div>
          );
        })}
      </div>

      {/* Floating Hearts/Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 20, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-romantic-pink/50"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}

      {/* Sparkle Effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-2 h-2 bg-romantic-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
