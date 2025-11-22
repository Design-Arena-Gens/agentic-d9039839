"use client";

import { motion } from "framer-motion";
import { Trophy, Lock, CheckCircle, Star, Zap, Target, Award } from "lucide-react";
import { useAppStore } from "@/store/appStore";

export default function AchievementsPanel() {
  const { achievements, progress } = useAppStore();

  const stats = [
    { label: "الدروس المكتملة", value: progress.lessonsCompleted, icon: CheckCircle, color: "green" },
    { label: "التمارين المنجزة", value: progress.exercisesCompleted, icon: Target, color: "blue" },
    { label: "الألعاب الملعوبة", value: progress.gamesPlayed, icon: Zap, color: "purple" },
    { label: "الكلمات المتعلمة", value: progress.wordsLearned, icon: Star, color: "yellow" },
  ];

  const unlockedCount = achievements.filter((a) => a.unlocked).length;
  const totalCount = achievements.length;
  const completionPercent = (unlockedCount / totalCount) * 100;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
          الإنجازات والجوائز
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          تتبع تقدمك واحصل على شارات الإنجاز
        </p>
      </div>

      {/* Progress Overview */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 opacity-20">
          <Trophy className="w-64 h-64" />
        </div>
        <div className="relative">
          <div className="flex items-center gap-4 mb-6">
            <Trophy className="w-12 h-12" />
            <div>
              <h3 className="text-3xl font-bold">تقدمك الإجمالي</h3>
              <p className="text-xl opacity-90">
                {unlockedCount} من {totalCount} إنجازات مفتوحة
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-white/20 backdrop-blur-sm rounded-full h-4 overflow-hidden mb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${completionPercent}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bg-white h-full rounded-full"
            />
          </div>
          <p className="text-lg font-semibold">{Math.round(completionPercent)}% مكتمل</p>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const colors: any = {
            green: "from-green-500 to-emerald-500",
            blue: "from-blue-500 to-cyan-500",
            purple: "from-purple-500 to-violet-500",
            yellow: "from-yellow-500 to-orange-500",
          };

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[stat.color]} flex items-center justify-center mb-4`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Achievements List */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          شارات الإنجاز
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={achievement.unlocked ? { scale: 1.05, y: -5 } : {}}
              className={`relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg transition-all ${
                achievement.unlocked
                  ? "ring-2 ring-yellow-400"
                  : "opacity-60"
              }`}
            >
              {/* Badge Icon */}
              <div
                className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-5xl ${
                  achievement.unlocked
                    ? "bg-gradient-to-br from-yellow-400 to-orange-500 shadow-xl"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                {achievement.unlocked ? achievement.icon : <Lock className="w-8 h-8 text-gray-400" />}
              </div>

              {/* Content */}
              <h4 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-2">
                {achievement.title}
              </h4>
              <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-4">
                {achievement.description}
              </p>

              {/* Status */}
              {achievement.unlocked && achievement.date && (
                <div className="flex items-center justify-center gap-2 text-xs text-green-600 dark:text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  <span>تم الفتح في {new Date(achievement.date).toLocaleDateString("ar")}</span>
                </div>
              )}

              {!achievement.unlocked && (
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <Lock className="w-4 h-4" />
                  <span>مقفل</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Coming Soon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl p-8 text-white text-center shadow-xl"
      >
        <Award className="w-16 h-16 mx-auto mb-4 animate-pulse-slow" />
        <h3 className="text-2xl font-bold mb-2">المزيد قريباً!</h3>
        <p className="text-lg opacity-90">
          سنضيف المزيد من الإنجازات والتحديات قريباً. ترقبوا!
        </p>
      </motion.div>
    </div>
  );
}
