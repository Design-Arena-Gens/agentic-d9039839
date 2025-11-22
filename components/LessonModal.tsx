"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Volume2, CheckCircle, XCircle, ArrowRight, Trophy, Sparkles } from "lucide-react";
import { useAppStore } from "@/store/appStore";

type Lesson = {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: number;
  xp: number;
  completed: boolean;
  locked: boolean;
  isPremium: boolean;
};

interface LessonModalProps {
  lesson: Lesson;
  onClose: () => void;
}

type Question = {
  id: string;
  type: "multiple_choice" | "translation" | "listening";
  question: string;
  audio?: string;
  options?: string[];
  correctAnswer: string;
};

export default function LessonModal({ lesson, onClose }: LessonModalProps) {
  const [currentStep, setCurrentStep] = useState<"intro" | "learning" | "complete">("intro");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const { updateProgress, unlockAchievement, progress } = useAppStore();

  const questions: Question[] = [
    {
      id: "q1",
      type: "multiple_choice",
      question: 'ما معنى "Hello" باللغة العربية؟',
      options: ["مرحباً", "وداعاً", "شكراً", "من فضلك"],
      correctAnswer: "مرحباً",
    },
    {
      id: "q2",
      type: "translation",
      question: "كيف تقول 'Thank you'؟",
      options: ["Hello", "Goodbye", "Thank you", "Please"],
      correctAnswer: "Thank you",
    },
    {
      id: "q3",
      type: "multiple_choice",
      question: "اختر الترجمة الصحيحة لـ 'Good morning'",
      options: ["صباح الخير", "مساء الخير", "تصبح على خير", "أهلاً"],
      correctAnswer: "صباح الخير",
    },
    {
      id: "q4",
      type: "listening",
      question: "اختر المعنى الصحيح لما سمعته:",
      audio: "How are you?",
      options: ["كيف حالك؟", "ما اسمك؟", "من أين أنت؟", "كم عمرك؟"],
      correctAnswer: "كيف حالك؟",
    },
    {
      id: "q5",
      type: "translation",
      question: 'كيف تقول "My name is..."؟',
      options: ["My name is...", "I am...", "Hello...", "Nice to meet you..."],
      correctAnswer: "My name is...",
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];
  const progress_percent = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    const correct = answer === currentQuestion.correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      setScore(score + 20);
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        completeLesson();
      }
    }, 1500);
  };

  const completeLesson = () => {
    const earnedXP = Math.floor((score / 100) * lesson.xp);
    updateProgress({
      xp: progress.xp + earnedXP,
      lessonsCompleted: progress.lessonsCompleted + 1,
    });

    if (progress.lessonsCompleted === 0) {
      unlockAchievement("first_lesson");
    }

    setCurrentStep("complete");
  };

  const playAudio = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 left-6 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>

          {currentStep === "intro" && (
            <div className="p-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-center"
              >
                <Sparkles className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                  {lesson.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  {lesson.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-2xl">
                    <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                      {questions.length}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">أسئلة</div>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-2xl">
                    <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                      {lesson.xp} XP
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">نقاط</div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-2xl">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {lesson.duration} د
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">المدة</div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentStep("learning")}
                  className="px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xl font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  ابدأ الدرس
                </motion.button>
              </motion.div>
            </div>
          )}

          {currentStep === "learning" && (
            <div className="p-8">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                    السؤال {currentQuestionIndex + 1} من {questions.length}
                  </span>
                  <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    {Math.round(progress_percent)}%
                  </span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress_percent}%` }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                  />
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <div className="flex items-start gap-4 mb-6">
                  {currentQuestion.type === "listening" && (
                    <button
                      onClick={() => playAudio(currentQuestion.audio!)}
                      className="p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors"
                    >
                      <Volume2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                    </button>
                  )}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {currentQuestion.question}
                    </h3>
                  </div>
                </div>

                {/* Answer Feedback */}
                <AnimatePresence>
                  {isCorrect !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`p-4 rounded-2xl mb-6 flex items-center gap-3 ${
                        isCorrect
                          ? "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                          : "bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300"
                      }`}
                    >
                      {isCorrect ? (
                        <>
                          <CheckCircle className="w-6 h-6" />
                          <span className="font-semibold">ممتاز! إجابة صحيحة</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-6 h-6" />
                          <span className="font-semibold">
                            الإجابة الصحيحة: {currentQuestion.correctAnswer}
                          </span>
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Options */}
                <div className="grid grid-cols-1 gap-3">
                  {currentQuestion.options?.map((option, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: selectedAnswer ? 1 : 1.02 }}
                      whileTap={{ scale: selectedAnswer ? 1 : 0.98 }}
                      onClick={() => !selectedAnswer && handleAnswer(option)}
                      disabled={selectedAnswer !== null}
                      className={`p-4 rounded-2xl text-right font-semibold transition-all ${
                        selectedAnswer === option
                          ? isCorrect
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                          : selectedAnswer
                          ? "bg-gray-100 dark:bg-gray-700 text-gray-400"
                          : "bg-indigo-50 dark:bg-indigo-900/30 text-gray-800 dark:text-white hover:bg-indigo-100 dark:hover:bg-indigo-900/50"
                      }`}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Score */}
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-600 dark:text-gray-400">
                  النقاط: <span className="text-yellow-500">{score}</span> / 100
                </div>
              </div>
            </div>
          )}

          {currentStep === "complete" && (
            <div className="p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.6 }}
              >
                <Trophy className="w-24 h-24 text-yellow-500 mx-auto mb-6" />
              </motion.div>

              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                أحسنت! 🎉
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                لقد أكملت الدرس بنجاح
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-2xl">
                  <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                    {score}%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">النتيجة</div>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-2xl">
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                    +{Math.floor((score / 100) * lesson.xp)}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">XP</div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xl font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                إنهاء
              </motion.button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
