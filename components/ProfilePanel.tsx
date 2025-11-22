"use client";

import { motion } from "framer-motion";
import {
  User,
  Settings,
  Crown,
  Flame,
  Star,
  TrendingUp,
  Calendar,
  BookOpen,
  Globe2,
  LogOut,
  Edit2,
} from "lucide-react";
import { useAppStore } from "@/store/appStore";

export default function ProfilePanel() {
  const { nativeLanguage, learningLanguage, progress, isPremium } = useAppStore();

  const levelProgress = {
    beginner: { min: 0, max: 1000, next: "intermediate" },
    intermediate: { min: 1000, max: 5000, next: "advanced" },
    advanced: { min: 5000, max: 15000, next: "expert" },
    expert: { min: 15000, max: 50000, next: "master" },
  };

  const currentLevel = levelProgress[progress.level as keyof typeof levelProgress];
  const progressToNextLevel = ((progress.xp - currentLevel.min) / (currentLevel.max - currentLevel.min)) * 100;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
          الملف الشخصي
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          تفاصيل حسابك وإحصائياتك
        </p>
      </div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 opacity-10">
          <User className="w-64 h-64" />
        </div>

        <div className="relative flex flex-col md:flex-row items-center gap-6">
          {/* Avatar */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-5xl border-4 border-white/30">
              👤
            </div>
            {isPremium && (
              <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
                <Crown className="w-6 h-6 text-yellow-900" />
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-right">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <h3 className="text-3xl font-bold">متعلم متحمس</h3>
              <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
                <Edit2 className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <span className="text-xl">{nativeLanguage?.flag}</span>
              <span className="text-white/70">→</span>
              <span className="text-xl">{learningLanguage?.flag}</span>
              <span className="font-semibold">{learningLanguage?.name}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl font-semibold">
                المستوى: {progress.level === "beginner" ? "مبتدئ" : progress.level === "intermediate" ? "متوسط" : progress.level === "advanced" ? "متقدم" : "خبير"}
              </span>
              {isPremium && (
                <span className="px-4 py-2 bg-yellow-400 text-yellow-900 rounded-xl font-bold flex items-center gap-2">
                  <Crown className="w-5 h-5" />
                  عضو مميز
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* XP Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
            التقدم إلى المستوى التالي
          </h3>
          <TrendingUp className="w-8 h-8 text-indigo-500" />
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-600 dark:text-gray-400">
              {progress.xp} / {currentLevel.max} XP
            </span>
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              {Math.round(progressToNextLevel)}%
            </span>
          </div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressToNextLevel}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
            />
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400">
          {currentLevel.max - progress.xp} XP متبقية للوصول إلى المستوى {currentLevel.next}
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-orange-50 dark:bg-orange-900/30 rounded-2xl p-6 text-center"
        >
          <Flame className="w-10 h-10 text-orange-500 mx-auto mb-3" />
          <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">
            {progress.streak}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">سلسلة الأيام</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-yellow-50 dark:bg-yellow-900/30 rounded-2xl p-6 text-center"
        >
          <Star className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
          <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">
            {progress.xp}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">نقاط الخبرة</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-blue-50 dark:bg-blue-900/30 rounded-2xl p-6 text-center"
        >
          <BookOpen className="w-10 h-10 text-blue-500 mx-auto mb-3" />
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
            {progress.lessonsCompleted}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">دروس مكتملة</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-green-50 dark:bg-green-900/30 rounded-2xl p-6 text-center"
        >
          <Globe2 className="w-10 h-10 text-green-500 mx-auto mb-3" />
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
            {progress.wordsLearned}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">كلمات متعلمة</div>
        </motion.div>
      </div>

      {/* Activity Calendar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl"
      >
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="w-8 h-8 text-indigo-500" />
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
            نشاطك الأسبوعي
          </h3>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"].map(
            (day, index) => (
              <div key={day} className="text-center">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">{day}</div>
                <div
                  className={`w-full aspect-square rounded-xl ${
                    index < 5
                      ? "bg-gradient-to-br from-green-400 to-emerald-500"
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}
                />
              </div>
            )
          )}
        </div>
      </motion.div>

      {/* Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl"
      >
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">الإعدادات</h3>

        <div className="space-y-4">
          <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-right">
            <div className="flex items-center gap-3">
              <Settings className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              <span className="font-semibold text-gray-800 dark:text-white">
                إعدادات الحساب
              </span>
            </div>
          </button>

          <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-right">
            <div className="flex items-center gap-3">
              <Globe2 className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              <span className="font-semibold text-gray-800 dark:text-white">تغيير اللغة</span>
            </div>
          </button>

          <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-red-50 dark:bg-red-900/30 hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors text-right">
            <div className="flex items-center gap-3">
              <LogOut className="w-6 h-6 text-red-600 dark:text-red-400" />
              <span className="font-semibold text-red-600 dark:text-red-400">تسجيل الخروج</span>
            </div>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
