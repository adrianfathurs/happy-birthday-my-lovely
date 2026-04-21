import { useState } from 'react';
import { motion } from 'framer-motion';

const PasswordInput = ({ onSuccess }) => {
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  const CORRECT_PASSWORD = '2025-04-02';
  const MAX_ATTEMPTS = 3;
  const WHATSAPP_REDIRECT = 'https://wa.me/6289634097803?text=I%20love%20you%20%E2%9D%A4%EF%B8%8F%20minta%20passwordnya%20dong';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === CORRECT_PASSWORD) {
      onSuccess();
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      setError(`Password salah! (${newAttempts}/${MAX_ATTEMPTS})`);
      setPassword('');
      setIsShaking(true);

      setTimeout(() => setIsShaking(false), 500);

      if (newAttempts >= MAX_ATTEMPTS) {
        setTimeout(() => {
          window.location.href = WHATSAPP_REDIRECT;
        }, 1000);
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-romantic-light via-pink-50 to-romantic-pink/20 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full mx-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
          className="flex justify-center mb-6"
        >
          <svg className="w-20 h-20 text-romantic-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-center mb-2 bg-gradient-to-r from-romantic-pink to-romantic-gold bg-clip-text text-transparent"
        >
          Special Delivery
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 text-center mb-8"
        >
          Masukkan password untuk membuka surat cinta ini 💕
        </motion.p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div animate={isShaking ? { x: [0, -10, 10, -10, 10, 0] } : {}} transition={{ duration: 0.5 }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password..."
              className="w-full px-6 py-4 rounded-2xl border-2 border-romantic-pink/30 focus:border-romantic-pink focus:outline-none text-center text-lg font-medium transition-all duration-300 bg-white/50"
              autoFocus
            />
          </motion.div>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-center text-sm font-medium"
            >
              {error}
            </motion.p>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={!password}
            className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
              password
                ? 'bg-gradient-to-r from-romantic-pink to-romantic-gold text-white shadow-lg hover:shadow-xl'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Buka Surat 💌
          </motion.button>
        </form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-gray-500 text-sm mt-6"
        >
          Hint: Our First Date❤️
        </motion.p>

        {attempts > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-6 flex justify-center gap-2"
          >
            {[...Array(MAX_ATTEMPTS)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i < attempts ? 'bg-red-400' : 'bg-gray-300'
                }`}
              />
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default PasswordInput;
