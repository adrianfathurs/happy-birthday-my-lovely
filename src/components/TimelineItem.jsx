import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const TimelineItem = ({ item, index, isLeft, isActive }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const media = item.images || [item.image];
  const totalMedia = media.length;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const isVideo = (url) => {
    if (!url) return false;
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv'];
    return videoExtensions.some(ext => url.toLowerCase().includes(ext));
  };

  const goToNextMedia = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentMediaIndex((prev) => (prev + 1) % totalMedia);
  };

  const goToPrevMedia = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentMediaIndex((prev) => (prev - 1 + totalMedia) % totalMedia);
  };

  const goToMedia = (index, e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentMediaIndex(index);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.target.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNextMedia({ stopPropagation: () => {}, preventDefault: () => {} });
    } else if (isRightSwipe) {
      goToPrevMedia({ stopPropagation: () => {}, preventDefault: () => {} });
    }
  };

  return (
    <div className="mb-12 md:mb-16 relative">
      {/* Mobile Layout */}
      <div className="md:hidden flex items-start gap-3 sm:gap-4">
        {/* Bullet */}
        <div className="flex-shrink-0 flex flex-col items-center pt-16">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="relative cursor-pointer"
            onClick={() => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
          >
            <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              isActive ? 'bg-romantic-gold border-romantic-gold shadow-lg' : 'bg-white border-romantic-gold/50'
            }`} />
            {isActive && (
              <motion.div
                className="absolute inset-0 bg-romantic-gold rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}
          </motion.div>
        </div>

        {/* Horizontal Connector Line */}
        <div className="absolute left-6 top-16 w-3 h-0.5 bg-gradient-to-r from-romantic-gold/40 to-transparent"></div>

        {/* Card */}
        <div ref={ref} className="flex-1 min-w-0">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
              isActive ? 'ring-2 ring-romantic-gold/50' : ''
            }`}
          >
            {/* Media Slider */}
            <div
              className={`relative h-40 sm:h-48 overflow-hidden bg-gray-900 ${
                isInView ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-1000`}
              style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
            >
              <div className="relative w-full h-full">
                {media.map((mediaUrl, mediaIndex) => {
                  const videoFile = isVideo(mediaUrl);

                  return (
                    <div
                      key={mediaIndex}
                      className="absolute inset-0 transition-opacity duration-300"
                      style={{
                        opacity: currentMediaIndex === mediaIndex ? 1 : 0,
                        zIndex: currentMediaIndex === mediaIndex ? 1 : 0,
                        pointerEvents: currentMediaIndex === mediaIndex ? 'auto' : 'none',
                      }}
                    >
                      {videoFile ? (
                        <video
                          src={mediaUrl}
                          className="w-full h-full object-cover"
                          controls
                          playsInline
                          muted={false}
                        />
                      ) : (
                        <>
                          <img
                            src={mediaUrl}
                            alt={`${item.title} - Media ${mediaIndex + 1}`}
                            className="w-full h-full object-cover pointer-events-none"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                        </>
                      )}
                    </div>
                  );
                })}

                <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 10 }}>
                  {totalMedia > 1 && (
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={goToPrevMedia}
                      className="pointer-events-auto absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white/90 backdrop-blur-sm rounded-full shadow-lg transition-all"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-800">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </motion.button>
                  )}

                  {totalMedia > 1 && (
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={goToNextMedia}
                      className="pointer-events-auto absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white/90 backdrop-blur-sm rounded-full shadow-lg transition-all"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-800">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </motion.button>
                  )}

                  {totalMedia > 1 && (
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="font-body text-xs font-medium text-white">
                        {currentMediaIndex + 1} / {totalMedia}
                      </span>
                    </div>
                  )}

                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 text-xs rounded-full shadow-lg">
                    <span className="font-body text-xs font-medium text-romantic-gold">
                      {formatDate(item.date)}
                    </span>
                  </div>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute top-3 left-1/2 -translate-x-1/2 bg-romantic-gold/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-lg"
                    >
                      <span className="font-body text-xs font-medium text-white">
                        ❤️
                      </span>
                    </motion.div>
                  )}

                  {totalMedia > 1 && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                      {media.map((_, mediaIndex) => (
                        <motion.button
                          key={mediaIndex}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.8 }}
                          onClick={(e) => goToMedia(mediaIndex, e)}
                          className={`pointer-events-auto transition-all duration-300 ${
                            currentMediaIndex === mediaIndex
                              ? 'w-8 bg-white'
                              : 'w-2 bg-white/50 hover:bg-white/70'
                          } h-2 rounded-full`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
              className="p-3 sm:p-4"
            >
              <h3 className="font-elegant text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                {item.title}
              </h3>
              <p className="font-body text-xs sm:text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
              <div className="mt-2 sm:mt-3 flex items-center gap-2">
                <div className="flex-1 h-0.5 bg-gradient-to-r from-romantic-pink/50 to-transparent" />
                <svg width="12" height="12" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor" className="text-romantic-pink">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <div className="flex-1 h-0.5 bg-gradient-to-l from-romantic-pink/50 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-start justify-center gap-6">
        {isLeft ? (
          <>
            {/* Card */}
            <div ref={ref} className="flex-1 max-w-md relative">
              {/* Horizontal Connector Line */}
              <div className="absolute right-0 top-24 w-6 h-0.5 bg-gradient-to-r from-transparent to-romantic-gold/40"></div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                  isActive ? 'ring-2 ring-romantic-gold/50' : ''
                }`}
              >
                {/* Media Slider */}
                <div
                  className={`relative h-48 sm:h-56 overflow-hidden bg-gray-900 ${
                    isInView ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-1000`}
                  style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
                >
                  <div className="relative w-full h-full">
                    {media.map((mediaUrl, mediaIndex) => {
                      const videoFile = isVideo(mediaUrl);

                      return (
                        <div
                          key={mediaIndex}
                          className="absolute inset-0 transition-opacity duration-300"
                          style={{
                            opacity: currentMediaIndex === mediaIndex ? 1 : 0,
                            zIndex: currentMediaIndex === mediaIndex ? 1 : 0,
                            pointerEvents: currentMediaIndex === mediaIndex ? 'auto' : 'none',
                          }}
                        >
                          {videoFile ? (
                            <video
                              src={mediaUrl}
                              className="w-full h-full object-cover"
                              controls
                              playsInline
                              muted={false}
                            />
                          ) : (
                            <>
                              <img
                                src={mediaUrl}
                                alt={`${item.title} - Media ${mediaIndex + 1}`}
                                className="w-full h-full object-cover pointer-events-none"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                            </>
                          )}
                        </div>
                      );
                    })}

                    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 10 }}>
                      {totalMedia > 1 && (
                        <motion.button
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={goToPrevMedia}
                          className="pointer-events-auto absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white/90 backdrop-blur-sm rounded-full shadow-lg transition-all"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-800">
                            <path d="M15 18l-6-6 6-6" />
                          </svg>
                        </motion.button>
                      )}

                      {totalMedia > 1 && (
                        <motion.button
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={goToNextMedia}
                          className="pointer-events-auto absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white/90 backdrop-blur-sm rounded-full shadow-lg transition-all"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-800">
                            <path d="M9 18l6-6-6-6" />
                          </svg>
                        </motion.button>
                      )}

                      {totalMedia > 1 && (
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="font-body text-xs font-medium text-white">
                            {currentMediaIndex + 1} / {totalMedia}
                          </span>
                        </div>
                      )}

                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs rounded-full shadow-lg">
                        <span className="font-body text-xs font-medium text-romantic-gold">
                          {formatDate(item.date)}
                        </span>
                      </div>

                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute top-3 left-1/2 -translate-x-1/2 bg-romantic-gold/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-lg"
                        >
                          <span className="font-body text-xs font-medium text-white">
                            ❤️
                          </span>
                        </motion.div>
                      )}

                      {totalMedia > 1 && (
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                          {media.map((_, mediaIndex) => (
                            <motion.button
                              key={mediaIndex}
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.8 }}
                              onClick={(e) => goToMedia(mediaIndex, e)}
                              className={`pointer-events-auto transition-all duration-300 ${
                                currentMediaIndex === mediaIndex
                                  ? 'w-8 bg-white'
                                  : 'w-2 bg-white/50 hover:bg-white/70'
                              } h-2 rounded-full`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  className="p-4 sm:p-5"
                >
                  <h3 className="font-elegant text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-romantic-pink/50 to-transparent" />
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-romantic-pink">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <div className="flex-1 h-0.5 bg-gradient-to-l from-romantic-pink/50 to-transparent" />
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Center Bullet */}
            <div className="flex-shrink-0 flex flex-col items-center justify-start pt-24">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="relative cursor-pointer"
                onClick={() => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
              >
                <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  isActive ? 'bg-romantic-gold border-romantic-gold shadow-lg' : 'bg-white border-romantic-gold/50'
                }`} />
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-romantic-gold rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                )}
              </motion.div>
            </div>

            {/* Empty Space */}
            <div className="flex-1 max-w-md"></div>
          </>
        ) : (
          <>
            {/* Empty Space */}
            <div className="flex-1 max-w-md"></div>

            {/* Center Bullet */}
            <div className="flex-shrink-0 flex flex-col items-center justify-start pt-24">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="relative cursor-pointer"
                onClick={() => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
              >
                <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  isActive ? 'bg-romantic-gold border-romantic-gold shadow-lg' : 'bg-white border-romantic-gold/50'
                }`} />
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-romantic-gold rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                )}
              </motion.div>
            </div>

            {/* Card */}
            <div ref={ref} className="flex-1 max-w-md relative">
              {/* Horizontal Connector Line */}
              <div className="absolute left-0 top-24 w-6 h-0.5 bg-gradient-to-l from-transparent to-romantic-gold/40"></div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                  isActive ? 'ring-2 ring-romantic-gold/50' : ''
                }`}
              >
                {/* Media Slider */}
                <div
                  className={`relative h-48 sm:h-56 overflow-hidden bg-gray-900 ${
                    isInView ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-1000`}
                  style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
                >
                  <div className="relative w-full h-full">
                    {media.map((mediaUrl, mediaIndex) => {
                      const videoFile = isVideo(mediaUrl);

                      return (
                        <div
                          key={mediaIndex}
                          className="absolute inset-0 transition-opacity duration-300"
                          style={{
                            opacity: currentMediaIndex === mediaIndex ? 1 : 0,
                            zIndex: currentMediaIndex === mediaIndex ? 1 : 0,
                            pointerEvents: currentMediaIndex === mediaIndex ? 'auto' : 'none',
                          }}
                        >
                          {videoFile ? (
                            <video
                              src={mediaUrl}
                              className="w-full h-full object-cover"
                              controls
                              playsInline
                              muted={false}
                            />
                          ) : (
                            <>
                              <img
                                src={mediaUrl}
                                alt={`${item.title} - Media ${mediaIndex + 1}`}
                                className="w-full h-full object-cover pointer-events-none"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                            </>
                          )}
                        </div>
                      );
                    })}

                    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 10 }}>
                      {totalMedia > 1 && (
                        <motion.button
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={goToPrevMedia}
                          className="pointer-events-auto absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white/90 backdrop-blur-sm rounded-full shadow-lg transition-all"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-800">
                            <path d="M15 18l-6-6 6-6" />
                          </svg>
                        </motion.button>
                      )}

                      {totalMedia > 1 && (
                        <motion.button
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={goToNextMedia}
                          className="pointer-events-auto absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white/90 backdrop-blur-sm rounded-full shadow-lg transition-all"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-800">
                            <path d="M9 18l6-6-6-6" />
                          </svg>
                        </motion.button>
                      )}

                      {totalMedia > 1 && (
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="font-body text-xs font-medium text-white">
                            {currentMediaIndex + 1} / {totalMedia}
                          </span>
                        </div>
                      )}

                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs rounded-full shadow-lg">
                        <span className="font-body text-xs font-medium text-romantic-gold">
                          {formatDate(item.date)}
                        </span>
                      </div>

                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute top-3 left-1/2 -translate-x-1/2 bg-romantic-gold/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-lg"
                        >
                          <span className="font-body text-xs font-medium text-white">
                            ❤️
                          </span>
                        </motion.div>
                      )}

                      {totalMedia > 1 && (
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                          {media.map((_, mediaIndex) => (
                            <motion.button
                              key={mediaIndex}
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.8 }}
                              onClick={(e) => goToMedia(mediaIndex, e)}
                              className={`pointer-events-auto transition-all duration-300 ${
                                currentMediaIndex === mediaIndex
                                  ? 'w-8 bg-white'
                                  : 'w-2 bg-white/50 hover:bg-white/70'
                              } h-2 rounded-full`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  className="p-4 sm:p-5"
                >
                  <h3 className="font-elegant text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-romantic-pink/50 to-transparent" />
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-romantic-pink">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <div className="flex-1 h-0.5 bg-gradient-to-l from-romantic-pink/50 to-transparent" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
