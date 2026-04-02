/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Loader2 } from 'lucide-react';
import { appConfig } from './appConfig';

export default function App() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRedirecting(true);
      window.location.href = appConfig.targetUrl;
    }, appConfig.redirectDelay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center space-y-8"
      >
        {/* Logo Container */}
        <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg bg-gray-50 flex items-center justify-center">
          <img
            src={appConfig.logoPath}
            alt={appConfig.appName}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Content */}
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">
            {appConfig.appName}
          </h1>
          
          <div className="flex flex-col items-center space-y-2">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
            <p className="text-gray-500 font-medium animate-pulse">
              {isRedirecting ? "جاري الانتقال..." : "جاري التحميل..."}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Footer Info (Optional) */}
      <div className="absolute bottom-8 text-xs text-gray-400">
        &copy; {new Date().getFullYear()} {appConfig.appName}
      </div>
    </div>
  );
}
