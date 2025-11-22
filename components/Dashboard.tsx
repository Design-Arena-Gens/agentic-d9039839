"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Dumbbell,
  Gamepad2,
  Trophy,
  User,
  Crown,
  Flame,
  Star,
  TrendingUp,
  Settings,
  LogOut,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useAppStore } from "@/store/appStore";
import LessonsList from "./LessonsList";
import ExercisesList from "./ExercisesList";
import GamesList from "./GamesList";
import AchievementsPanel from "./AchievementsPanel";
import ProfilePanel from "./ProfilePanel";
import PremiumModal from "./PremiumModal";

type Tab = "lessons" | "exercises" | "games" | "achievements" | "profile";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("lessons");
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { nativeLanguage, learningLanguage, progress, isPremium } = useAppStore();

  const tabs = [
    { id: "lessons" as Tab, label: "الدروس", icon: BookOpen, color: "indigo" },
    { id: "exercises" as Tab, label: "التمارين", icon: Dumbbell, color: "purple" },
    { id: "games" as Tab, label: "الألعاب", icon: Gamepad2, color: "pink" },
    { id: "achievements" as Tab, label: "الإنجازات", icon: Trophy, color: "yellow" },
    { id: "profile" as Tab, label: "الملف الشخصي", icon: User, color: "green" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "lessons":
        return <LessonsList />;
      case "exercises":
        return <ExercisesList />;
      case "games":
        return <GamesList />;
      case "achievements":
        return <AchievementsPanel />;
      case "profile":
        return <ProfilePanel />;
      default:
        return <LessonsList />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo & Language Info */}
            <div className="flex items-center gap-6">
              <motion.h1
                whileHover={{ scale: 1.05 }}
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent cursor-pointer"
              >
                PolyglotAcademy
              </motion.h1>
              <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl">
                <span className="text-2xl">{nativeLanguage?.flag}</span>
                <span className="text-gray-400">→</span>
                <span className="text-2xl">{learningLanguage?.flag}</span>
                <span className="font-semibold text-gray-700 dark:text-gray-200">
                  {learningLanguage?.name}
                </span>
              </div>
            </div>

            {/* Stats & Actions */}
            <div className="flex items-center gap-4">
              {/* Streak */}
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-orange-50 dark:bg-orange-900/30 rounded-xl">
                <Flame className="w-5 h-5 text-orange-500" />
                <span className="font-bold text-orange-600 dark:text-orange-400">
                  {progress.streak}
                </span>
              </div>

              {/* XP */}
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-yellow-50 dark:bg-yellow-900/30 rounded-xl">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-bold text-yellow-600 dark:text-yellow-400">
                  {progress.xp} XP
                </span>
              </div>

              {/* Premium Button */}
              {!isPremium && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowPremiumModal(true)}
                  className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  <Crown className="w-5 h-5" />
                  <span>احصل على المميز</span>
                </motion.button>
              )}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-indigo-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white dark:bg-gray-800 shadow-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto py-2 scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </main>

      {/* Premium Modal */}
      {showPremiumModal && (
        <PremiumModal onClose={() => setShowPremiumModal(false)} />
      )}
    </div>
  );
}
