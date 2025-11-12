import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const RealTimeClock = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    // Set initial time
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 right-4 z-50 bg-card/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2 shadow-lg"
    >
      <div className="text-sm font-mono font-semibold text-primary">
        {time || '00:00:00'}
      </div>
    </motion.div>
  );
};
