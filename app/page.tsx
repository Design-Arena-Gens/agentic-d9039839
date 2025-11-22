"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe2, Sparkles, BookOpen, Trophy, Users, Crown, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import LanguageSelector from "@/components/LanguageSelector";
import Dashboard from "@/components/Dashboard";
import { useAppStore } from "@/store/appStore";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const { currentUser, nativeLanguage, learningLanguage } = useAppStore();
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard && nativeLanguage && learningLanguage) {
    return <Dashboard />;
  }

  if (currentUser && (nativeLanguage || learningLanguage)) {
    return <LanguageSelector onComplete={() => setShowDashboard(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-300">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 left-6 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun className="w-6 h-6 text-yellow-500" />
        ) : (
          <Moon className="w-6 h-6 text-indigo-600" />
        )}
      </button>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Logo */}
          <motion.div
            className="flex justify-center mb-8"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          >
            <div className="relative">
              <Globe2 className="w-24 h-24 text-indigo-600 dark:text-indigo-400" />
              <Sparkles className="w-8 h-8 text-yellow-500 absolute -top-2 -right-2 animate-pulse" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
          >
            PolyglotAcademy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 mb-4 font-semibold"
          >
            تعلم أي لغة في العالم بالذكاء الاصطناعي
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            من الصفر إلى الاحتراف مع دروس تفاعلية، ألعاب ممتعة، وتمارين مخصصة لك
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => useAppStore.getState().setCurrentUser("user_" + Date.now())}
            className="px-12 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1"
          >
            ابدأ رحلتك الآن مجاناً
          </motion.button>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24"
        >
          {/* Feature 1 */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              ذكاء اصطناعي متقدم
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              دروس مخصصة تتكيف مع مستواك وأسلوب تعلمك باستخدام أحدث تقنيات الذكاء الاصطناعي
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              محتوى شامل
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              آلاف الدروس والتمارين تغطي جميع المهارات من المبتدئ إلى المحترف
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              ألعاب تفاعلية
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              تعلم من خلال اللعب مع مئات الألعاب والتحديات الممتعة والمثيرة
            </p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="bg-gradient-to-br from-yellow-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Globe2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              جميع لغات العالم
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              أكثر من 100 لغة متاحة للتعلم من العربية إلى الصينية واليابانية
            </p>
          </motion.div>

          {/* Feature 5 */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="bg-gradient-to-br from-red-500 to-rose-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              مجتمع نشط
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              انضم لملايين المتعلمين حول العالم وتنافس معهم في التحديات
            </p>
          </motion.div>

          {/* Feature 6 */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <Crown className="w-8 h-8 text-yellow-300 animate-bounce-slow" />
            </div>
            <div className="bg-white dark:bg-gray-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Crown className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              ميزات مميزة
            </h3>
            <p className="text-white text-lg">
              احصل على محتوى حصري، دروس متقدمة، ومدرب AI شخصي مع الاشتراك المميز
            </p>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">100+</div>
            <div className="text-gray-600 dark:text-gray-300 text-lg">لغة</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">10M+</div>
            <div className="text-gray-600 dark:text-gray-300 text-lg">متعلم</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-pink-600 dark:text-pink-400 mb-2">50K+</div>
            <div className="text-gray-600 dark:text-gray-300 text-lg">درس</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-2">1000+</div>
            <div className="text-gray-600 dark:text-gray-300 text-lg">لعبة</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
