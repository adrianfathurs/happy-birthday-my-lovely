import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import TimelineItem from './TimelineItem';

const Timeline = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemPositions, setItemPositions] = useState([]);

  // Track which timeline item is in view and their positions
  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll('[data-timeline-item]');
      const positions = [];

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        positions.push({
          index,
          top: rect.top + window.scrollY,
          height: rect.height,
        });

        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          setActiveIndex(index);
        }
      });

      setItemPositions(positions);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center mb-20 pt-10 px-4"
      >
        <h2 className="font-elegant text-4xl sm:text-5xl md:text-4xl font-bold text-gray-800 mb-4">
          🎂Happy Birthday🎂
        </h2>
        <h2 className="text-6xl font-bold text-gray-800">❤️Wahyu Budi Lestari❤️</h2>
        <p className="font-body text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          A beautiful journey of love, laughter, and endless memories
        </p>
        {/* Decorative hearts */}
        <div className="flex justify-center gap-2 mt-6">
          {[1, 2, 3].map((i) => (
            <motion.svg
              key={i}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-romantic-pink"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </motion.svg>
          ))}
        </div>
      </motion.div>

      {/* Timeline Items Container with max width for focus */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Vertical Connection Line - Desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
          <div className="relative w-full h-full">
            {/* Gradient line */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-romantic-gold/30 to-transparent"></div>
            {/* Animated pulse effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-romantic-gold/50 to-transparent"
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            ></motion.div>
          </div>
        </div>

        {/* Vertical Connection Line - Mobile */}
        <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5">
          <div className="relative w-full h-full">
            {/* Gradient line */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-romantic-gold/30 to-transparent"></div>
            {/* Animated pulse effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-romantic-gold/50 to-transparent"
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            ></motion.div>
          </div>
        </div>

        {data.map((item, index) => (
          <div key={item.id} data-timeline-item={index} className="relative">
            <TimelineItem
              item={item}
              index={index}
              isLeft={index % 2 === 0}
              isActive={activeIndex === index}
              totalItems={data.length}
            />
          </div>
        ))}
      </div>

      {/* Final Message Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-32 mb-20 text-center"
      >
        <div className="max-w-3xl mx-auto px-6">
          {/* Decorative Top */}
          <div className="flex justify-center mb-8">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-romantic-gold"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </motion.div>
          </div>

          {/* Animated Text */}
          <motion.h2
            className="font-elegant text-4xl md:text-5xl font-semibold text-gray-800 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Forever & Always
          </motion.h2>

          {/* Typewriter Effect Message */}
          <motion.p
            className="font-body text-lg md:text-xl text-gray-600 leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 'auto' }}
              transition={{ duration: 2, delay: 0.9, ease: 'easeInOut' }}
              viewport={{ once: true }}
            >
              "Happy 25th Birthday, my love, Wahyu Budi Lestari ❤️
              Semoga semua harapanmu selalu tercapai dan terwujud.
              Semoga Allah selalu melindungimu dari segala bahaya,
              dan memberikan keberuntungan yang tiada habisnya.

              Semoga sayang selalu diberi kesehatan, diberi keceriaan, diberi
              umur yang panjang, dan kebahagiaan yang tulus.

              Di umurmu yang ke-25 ini,
              semoga tahun ini menajadi tahun yang indah.

              With all my love,
              Adrian Fathur Setyawan 💖

            </motion.span>
          </motion.p>
          <motion.p
            className="font-body text-lg md:text-xl text-gray-600 leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 'auto' }}
              transition={{ duration: 2, delay: 0.9, ease: 'easeInOut' }}
              viewport={{ once: true }}
            >
              "Kalo sayang perhatiin lagu yang diputer pertama kali web ini bunyi, kenapa mas kemarin malam suruh nyanyi lagu ini.
               Lagu pertama yg diputer website ini, Yaaaa iniii,  biar sayang selalu inget suara kita nyanyi bareng yaa yang😁🤗."

            </motion.span>
          </motion.p>
          <motion.p
            className="font-body text-lg md:text-xl text-gray-600 leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 'auto' }}
              transition={{ duration: 2, delay: 0.9, ease: 'easeInOut' }}
              viewport={{ once: true }}
            >
              "Kalo sayang suka sama hadiah ini, langsung chat mas yaaaa ketik "LOVE YOUU MAS❤️"

            </motion.span>
          </motion.p>
          <motion.p
            className="font-elegant text-2xl text-romantic-gold italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: true }}
          >
            I love you more each day
          </motion.p>

          {/* Floating Hearts */}
          <div className="flex justify-center gap-4 mt-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                className="text-romantic-pink"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeInOut',
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Timeline;
