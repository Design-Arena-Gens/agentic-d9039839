"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { languages } from "@/data/languages";
import { useAppStore, Language } from "@/store/appStore";

interface LanguageSelectorProps {
  onComplete: () => void;
}

export default function LanguageSelector({ onComplete }: LanguageSelectorProps) {
  const [step, setStep] = useState<"native" | "learning">("native");
  const [searchQuery, setSearchQuery] = useState("");
  const { setNativeLanguage, setLearningLanguage, nativeLanguage } = useAppStore();

  const filteredLanguages = languages.filter(
    (lang) =>
      lang.name.includes(searchQuery) ||
      lang.nameEnglish.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLanguageSelect = (language: Language) => {
    if (step === "native") {
      setNativeLanguage(language);
      setStep("learning");
      setSearchQuery("");
    } else {
      setLearningLanguage(language);
      onComplete();
    }
  };

  const handleBack = () => {
    if (step === "learning") {
      setStep("native");
      setSearchQuery("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 py-12 px-4 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <Sparkles className="w-8 h-8 text-yellow-500" />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                  {step === "native" ? "ما هي لغتك الأم؟" : "ما اللغة التي تريد تعلمها؟"}
                </h2>
              </motion.div>

              {step === "learning" && (
                <button
                  onClick={handleBack}
                  className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                  <span>العودة</span>
                </button>
              )}

              {/* Progress Indicator */}
              <div className="flex items-center justify-center gap-2 mt-6">
                <div
                  className={`h-2 w-20 rounded-full transition-colors ${
                    step === "native"
                      ? "bg-indigo-600 dark:bg-indigo-400"
                      : "bg-green-500 dark:bg-green-400"
                  }`}
                />
                <div
                  className={`h-2 w-20 rounded-full transition-colors ${
                    step === "learning"
                      ? "bg-indigo-600 dark:bg-indigo-400"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              </div>
            </div>

            {/* Search Bar */}
            <div className="mb-8 relative max-w-2xl mx-auto">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="ابحث عن لغة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-12 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-lg focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none transition-colors"
              />
            </div>

            {/* Languages Grid */}
            <motion.div
              layout
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {filteredLanguages.map((language, index) => (
                <motion.button
                  key={language.code}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.02 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleLanguageSelect(language)}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-indigo-500 dark:hover:border-indigo-400 group"
                >
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                    {language.flag}
                  </div>
                  <div className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    {language.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {language.nameEnglish}
                  </div>
                </motion.button>
              ))}
            </motion.div>

            {filteredLanguages.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-xl text-gray-500 dark:text-gray-400">
                  لم يتم العثور على نتائج
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
