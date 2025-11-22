"use client";

import { motion } from "framer-motion";
import { Dumbbell, Pencil, Mic, Headphones, MessageSquare, BookText, Crown } from "lucide-react";

export default function ExercisesList() {
  const exercises = [
    {
      id: "writing",
      title: "تمارين الكتابة",
      description: "تدرب على الكتابة والإملاء",
      icon: Pencil,
      color: "blue",
      count: 45,
      isPremium: false,
    },
    {
      id: "speaking",
      title: "تمارين النطق",
      description: "حسّن نطقك مع الذكاء الاصطناعي",
      icon: Mic,
      color: "red",
      count: 38,
      isPremium: true,
    },
    {
      id: "listening",
      title: "تمارين الاستماع",
      description: "تدرب على فهم المحادثات",
      icon: Headphones,
      color: "green",
      count: 52,
      isPremium: false,
    },
    {
      id: "conversation",
      title: "محادثات AI",
      description: "تحدث مع الذكاء الاصطناعي",
      icon: MessageSquare,
      color: "purple",
      count: 30,
      isPremium: true,
    },
    {
      id: "vocabulary",
      title: "بناء المفردات",
      description: "وسّع قاموسك اللغوي",
      icon: BookText,
      color: "yellow",
      count: 100,
      isPremium: false,
    },
    {
      id: "grammar",
      title: "تمارين القواعد",
      description: "أتقن قواعد اللغة",
      icon: Dumbbell,
      color: "indigo",
      count: 42,
      isPremium: false,
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: any = {
      blue: "from-blue-500 to-cyan-500",
      red: "from-red-500 to-pink-500",
      green: "from-green-500 to-emerald-500",
      purple: "from-purple-500 to-violet-500",
      yellow: "from-yellow-500 to-orange-500",
      indigo: "from-indigo-500 to-blue-500",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
          التمارين التفاعلية
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          تدرب وحسّن مهاراتك مع تمارين متنوعة
        </p>
      </div>

      {/* Exercises Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((exercise, index) => {
          const Icon = exercise.icon;
          return (
            <motion.div
              key={exercise.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all cursor-pointer overflow-hidden group"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(
                  exercise.color
                )} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Premium Badge */}
              {exercise.isPremium && (
                <div className="absolute top-4 left-4">
                  <Crown className="w-6 h-6 text-yellow-500" />
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getColorClasses(
                  exercise.color
                )} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                {exercise.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {exercise.description}
              </p>

              {/* Count */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {exercise.count} تمرين متاح
                </span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`px-6 py-2 bg-gradient-to-r ${getColorClasses(
                    exercise.color
                  )} text-white rounded-xl font-semibold shadow-lg`}
                >
                  ابدأ
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Daily Challenge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 opacity-20">
          <Dumbbell className="w-64 h-64" />
        </div>
        <div className="relative">
          <h3 className="text-3xl font-bold mb-4">تحدي اليوم 🔥</h3>
          <p className="text-xl mb-6">
            أكمل 5 تمارين اليوم واحصل على مكافأة مضاعفة!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-orange-600 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all"
          >
            ابدأ التحدي
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
