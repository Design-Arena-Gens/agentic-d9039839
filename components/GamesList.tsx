"use client";

import { motion } from "framer-motion";
import { Gamepad2, Puzzle, Zap, Target, Brain, Sparkles, Trophy, Crown } from "lucide-react";

export default function GamesList() {
  const games = [
    {
      id: "word_match",
      title: "مطابقة الكلمات",
      description: "طابق الكلمات مع معانيها",
      icon: Puzzle,
      color: "blue",
      difficulty: "سهل",
      players: "12.5K",
      isPremium: false,
    },
    {
      id: "speed_translate",
      title: "الترجمة السريعة",
      description: "ترجم الكلمات بأسرع وقت",
      icon: Zap,
      color: "yellow",
      difficulty: "متوسط",
      players: "8.3K",
      isPremium: false,
    },
    {
      id: "sentence_builder",
      title: "بناء الجمل",
      description: "رتب الكلمات لتكوين جمل صحيحة",
      icon: Target,
      color: "green",
      difficulty: "متوسط",
      players: "15.2K",
      isPremium: false,
    },
    {
      id: "memory_game",
      title: "لعبة الذاكرة",
      description: "اختبر ذاكرتك للمفردات",
      icon: Brain,
      color: "purple",
      difficulty: "متوسط",
      players: "9.8K",
      isPremium: true,
    },
    {
      id: "word_race",
      title: "سباق الكلمات",
      description: "تنافس مع اللاعبين حول العالم",
      icon: Trophy,
      color: "red",
      difficulty: "صعب",
      players: "25.7K",
      isPremium: true,
    },
    {
      id: "story_mode",
      title: "وضع القصة",
      description: "تعلم من خلال قصص تفاعلية",
      icon: Sparkles,
      color: "indigo",
      difficulty: "متنوع",
      players: "18.4K",
      isPremium: true,
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: any = {
      blue: { bg: "from-blue-500 to-cyan-500", text: "text-blue-600" },
      yellow: { bg: "from-yellow-500 to-orange-500", text: "text-yellow-600" },
      green: { bg: "from-green-500 to-emerald-500", text: "text-green-600" },
      purple: { bg: "from-purple-500 to-violet-500", text: "text-purple-600" },
      red: { bg: "from-red-500 to-pink-500", text: "text-red-600" },
      indigo: { bg: "from-indigo-500 to-blue-500", text: "text-indigo-600" },
    };
    return colors[color] || colors.blue;
  };

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty === "سهل") return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
    if (difficulty === "متوسط") return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300";
    if (difficulty === "صعب") return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300";
    return "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300";
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
            الألعاب التفاعلية
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            تعلم من خلال اللعب والمتعة
          </p>
        </div>
        <Gamepad2 className="w-12 h-12 text-indigo-500 animate-bounce-slow" />
      </div>

      {/* Featured Game */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden group cursor-pointer"
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <Sparkles className="w-64 h-64 absolute -top-10 -right-10 animate-pulse-slow" />
          <Trophy className="w-48 h-48 absolute -bottom-8 -left-8 animate-float" />
        </div>

        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1 bg-yellow-400 text-yellow-900 rounded-full text-sm font-bold">
              جديد
            </span>
            <span className="px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              الأكثر شعبية
            </span>
          </div>

          <h3 className="text-4xl font-bold mb-4">بطولة اللغات العالمية 🏆</h3>
          <p className="text-xl mb-6 max-w-2xl">
            انضم إلى البطولة الشهرية وتنافس مع ملايين المتعلمين حول العالم للفوز بجوائز قيمة!
          </p>

          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6" />
              <span className="font-semibold">جوائز نقدية</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              <span className="font-semibold">شهادات حصرية</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all"
          >
            اشترك الآن
          </motion.button>
        </div>
      </motion.div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game, index) => {
          const Icon = game.icon;
          const colors = getColorClasses(game.color);

          return (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
            >
              {/* Premium Badge */}
              {game.isPremium && (
                <div className="absolute top-4 left-4">
                  <Crown className="w-5 h-5 text-yellow-500" />
                </div>
              )}

              {/* Icon */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <span className={`text-xs px-3 py-1 rounded-full font-semibold ${getDifficultyColor(game.difficulty)}`}>
                  {game.difficulty}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {game.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {game.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Gamepad2 className="w-4 h-4" />
                  <span>{game.players} لاعب</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`px-5 py-2 bg-gradient-to-r ${colors.bg} text-white rounded-xl font-semibold shadow-md text-sm`}
                >
                  العب
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Leaderboard */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Trophy className="w-8 h-8 text-yellow-500" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              لوحة المتصدرين
            </h3>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">هذا الأسبوع</span>
        </div>

        <div className="space-y-4">
          {[
            { rank: 1, name: "أحمد محمد", score: 15420, flag: "🇸🇦" },
            { rank: 2, name: "فاطمة علي", score: 14850, flag: "🇪🇬" },
            { rank: 3, name: "يوسف حسن", score: 13990, flag: "🇦🇪" },
            { rank: 4, name: "مريم خالد", score: 12760, flag: "🇰🇼" },
            { rank: 5, name: "عبدالله سعيد", score: 11540, flag: "🇶🇦" },
          ].map((player, index) => (
            <motion.div
              key={player.rank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center justify-between p-4 rounded-2xl ${
                player.rank <= 3
                  ? "bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20"
                  : "bg-gray-50 dark:bg-gray-700"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    player.rank === 1
                      ? "bg-yellow-400 text-yellow-900"
                      : player.rank === 2
                      ? "bg-gray-300 text-gray-700"
                      : player.rank === 3
                      ? "bg-orange-400 text-orange-900"
                      : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200"
                  }`}
                >
                  {player.rank}
                </div>
                <span className="text-2xl">{player.flag}</span>
                <span className="font-semibold text-gray-800 dark:text-white">
                  {player.name}
                </span>
              </div>
              <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                {player.score.toLocaleString()}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
