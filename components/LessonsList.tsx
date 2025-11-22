"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Play,
  Lock,
  CheckCircle,
  Star,
  Clock,
  TrendingUp,
  Sparkles,
  Crown,
} from "lucide-react";
import { useAppStore } from "@/store/appStore";
import LessonModal from "./LessonModal";

type LessonCategory = {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  lessons: Lesson[];
};

type Lesson = {
  id: string;
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
  duration: number;
  xp: number;
  completed: boolean;
  locked: boolean;
  isPremium: boolean;
};

export default function LessonsList() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const { isPremium, learningLanguage } = useAppStore();

  const categories: LessonCategory[] = [
    {
      id: "basics",
      title: "الأساسيات",
      description: "ابدأ رحلتك من هنا",
      icon: "🌟",
      color: "blue",
      lessons: [
        {
          id: "greetings",
          title: "التحيات والترحيب",
          description: "تعلم كيفية إلقاء التحية والترحيب بالآخرين",
          level: "beginner",
          duration: 15,
          xp: 50,
          completed: false,
          locked: false,
          isPremium: false,
        },
        {
          id: "alphabet",
          title: "الحروف والأصوات",
          description: "تعرف على الحروف الأبجدية وكيفية نطقها",
          level: "beginner",
          duration: 20,
          xp: 60,
          completed: false,
          locked: false,
          isPremium: false,
        },
        {
          id: "numbers",
          title: "الأرقام",
          description: "تعلم الأرقام من 1 إلى 100",
          level: "beginner",
          duration: 15,
          xp: 50,
          completed: false,
          locked: false,
          isPremium: false,
        },
        {
          id: "colors",
          title: "الألوان",
          description: "اكتشف أسماء الألوان المختلفة",
          level: "beginner",
          duration: 10,
          xp: 40,
          completed: false,
          locked: false,
          isPremium: false,
        },
      ],
    },
    {
      id: "daily",
      title: "الحياة اليومية",
      description: "عبارات تستخدمها كل يوم",
      icon: "☀️",
      color: "yellow",
      lessons: [
        {
          id: "family",
          title: "العائلة",
          description: "تعرف على مفردات العائلة والأقارب",
          level: "beginner",
          duration: 15,
          xp: 55,
          completed: false,
          locked: false,
          isPremium: false,
        },
        {
          id: "food",
          title: "الطعام والشراب",
          description: "تعلم أسماء الأطعمة والمشروبات الشائعة",
          level: "beginner",
          duration: 20,
          xp: 60,
          completed: false,
          locked: false,
          isPremium: false,
        },
        {
          id: "shopping",
          title: "التسوق",
          description: "عبارات مفيدة للتسوق والشراء",
          level: "intermediate",
          duration: 25,
          xp: 80,
          completed: false,
          locked: true,
          isPremium: false,
        },
        {
          id: "restaurant",
          title: "في المطعم",
          description: "كيف تطلب الطعام في المطاعم",
          level: "intermediate",
          duration: 20,
          xp: 75,
          completed: false,
          locked: true,
          isPremium: true,
        },
      ],
    },
    {
      id: "grammar",
      title: "القواعد",
      description: "أتقن قواعد اللغة",
      icon: "📚",
      color: "indigo",
      lessons: [
        {
          id: "present",
          title: "الزمن المضارع",
          description: "تعلم كيفية تكوين الجمل في الزمن المضارع",
          level: "intermediate",
          duration: 30,
          xp: 100,
          completed: false,
          locked: true,
          isPremium: false,
        },
        {
          id: "past",
          title: "الزمن الماضي",
          description: "كيفية التحدث عن الماضي",
          level: "intermediate",
          duration: 30,
          xp: 100,
          completed: false,
          locked: true,
          isPremium: true,
        },
        {
          id: "future",
          title: "الزمن المستقبل",
          description: "تعلم كيفية التحدث عن المستقبل",
          level: "intermediate",
          duration: 25,
          xp: 90,
          completed: false,
          locked: true,
          isPremium: true,
        },
      ],
    },
    {
      id: "conversation",
      title: "المحادثة",
      description: "حوارات واقعية",
      icon: "💬",
      color: "green",
      lessons: [
        {
          id: "intro",
          title: "التعريف بالنفس",
          description: "كيف تقدم نفسك للآخرين",
          level: "beginner",
          duration: 15,
          xp: 60,
          completed: false,
          locked: false,
          isPremium: false,
        },
        {
          id: "weather",
          title: "الحديث عن الطقس",
          description: "عبارات شائعة عن الطقس",
          level: "beginner",
          duration: 10,
          xp: 45,
          completed: false,
          locked: false,
          isPremium: false,
        },
        {
          id: "hobbies",
          title: "الهوايات والاهتمامات",
          description: "تحدث عن ما تحب القيام به",
          level: "intermediate",
          duration: 20,
          xp: 70,
          completed: false,
          locked: true,
          isPremium: true,
        },
      ],
    },
    {
      id: "advanced",
      title: "متقدم",
      description: "للمتعلمين المتقدمين",
      icon: "🎓",
      color: "purple",
      lessons: [
        {
          id: "business",
          title: "لغة الأعمال",
          description: "مفردات وعبارات احترافية",
          level: "advanced",
          duration: 40,
          xp: 150,
          completed: false,
          locked: true,
          isPremium: true,
        },
        {
          id: "idioms",
          title: "التعابير الاصطلاحية",
          description: "تعلم التعابير والأمثال الشائعة",
          level: "advanced",
          duration: 35,
          xp: 140,
          completed: false,
          locked: true,
          isPremium: true,
        },
        {
          id: "literature",
          title: "الأدب والثقافة",
          description: "استكشف الأدب والثقافة",
          level: "expert",
          duration: 45,
          xp: 200,
          completed: false,
          locked: true,
          isPremium: true,
        },
      ],
    },
  ];

  const getLevelBadge = (level: string) => {
    const badges = {
      beginner: { text: "مبتدئ", color: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" },
      intermediate: { text: "متوسط", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300" },
      advanced: { text: "متقدم", color: "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300" },
      expert: { text: "خبير", color: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300" },
    };
    return badges[level as keyof typeof badges];
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
            دروس {learningLanguage?.name}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            اختر درسًا وابدأ التعلم الآن
          </p>
        </div>
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-5xl"
        >
          <Sparkles className="w-12 h-12 text-yellow-500" />
        </motion.div>
      </div>

      {/* Categories */}
      {categories.map((category, categoryIndex) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: categoryIndex * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl"
        >
          {/* Category Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="text-4xl">{category.icon}</div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                {category.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {category.description}
              </p>
            </div>
          </div>

          {/* Lessons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.lessons.map((lesson, lessonIndex) => {
              const levelBadge = getLevelBadge(lesson.level);
              const canAccess = !lesson.locked && (!lesson.isPremium || isPremium);

              return (
                <motion.button
                  key={lesson.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: lessonIndex * 0.05 }}
                  whileHover={canAccess ? { scale: 1.03, y: -5 } : {}}
                  whileTap={canAccess ? { scale: 0.98 } : {}}
                  onClick={() => canAccess && setSelectedLesson(lesson)}
                  disabled={!canAccess}
                  className={`relative p-6 rounded-2xl text-right transition-all ${
                    canAccess
                      ? "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 hover:shadow-xl"
                      : "bg-gray-100 dark:bg-gray-700 opacity-60 cursor-not-allowed"
                  }`}
                >
                  {/* Premium Badge */}
                  {lesson.isPremium && (
                    <div className="absolute top-3 left-3">
                      <Crown className="w-5 h-5 text-yellow-500" />
                    </div>
                  )}

                  {/* Status Icon */}
                  <div className="absolute top-3 right-3">
                    {lesson.completed ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : lesson.locked ? (
                      <Lock className="w-6 h-6 text-gray-400" />
                    ) : (
                      <Play className="w-6 h-6 text-indigo-500" />
                    )}
                  </div>

                  <div className="mt-8">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {lesson.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      {lesson.description}
                    </p>

                    {/* Metadata */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>{lesson.duration} د</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-yellow-600 dark:text-yellow-400">
                          <Star className="w-4 h-4" />
                          <span>{lesson.xp} XP</span>
                        </div>
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full font-semibold ${levelBadge.color}`}>
                        {levelBadge.text}
                      </span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      ))}

      {/* Lesson Modal */}
      {selectedLesson && (
        <LessonModal
          lesson={selectedLesson}
          onClose={() => setSelectedLesson(null)}
        />
      )}
    </div>
  );
}
