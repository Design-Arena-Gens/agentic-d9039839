import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Language = {
  code: string;
  name: string;
  nameEnglish: string;
  flag: string;
  rtl?: boolean;
};

export type UserLevel = "beginner" | "intermediate" | "advanced" | "expert";

export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  date?: string;
};

export type UserProgress = {
  level: UserLevel;
  xp: number;
  streak: number;
  lessonsCompleted: number;
  exercisesCompleted: number;
  gamesPlayed: number;
  wordsLearned: number;
};

interface AppState {
  currentUser: string | null;
  nativeLanguage: Language | null;
  learningLanguage: Language | null;
  isPremium: boolean;
  progress: UserProgress;
  achievements: Achievement[];
  setCurrentUser: (userId: string) => void;
  setNativeLanguage: (language: Language) => void;
  setLearningLanguage: (language: Language) => void;
  setPremium: (isPremium: boolean) => void;
  updateProgress: (progress: Partial<UserProgress>) => void;
  unlockAchievement: (achievementId: string) => void;
}

const initialProgress: UserProgress = {
  level: "beginner",
  xp: 0,
  streak: 0,
  lessonsCompleted: 0,
  exercisesCompleted: 0,
  gamesPlayed: 0,
  wordsLearned: 0,
};

const initialAchievements: Achievement[] = [
  {
    id: "first_lesson",
    title: "الدرس الأول",
    description: "أكمل أول درس لك",
    icon: "🎓",
    unlocked: false,
  },
  {
    id: "week_streak",
    title: "أسبوع متواصل",
    description: "حافظ على سلسلة لمدة 7 أيام",
    icon: "🔥",
    unlocked: false,
  },
  {
    id: "fast_learner",
    title: "متعلم سريع",
    description: "أكمل 10 دروس في يوم واحد",
    icon: "⚡",
    unlocked: false,
  },
  {
    id: "vocabulary_master",
    title: "سيد المفردات",
    description: "تعلم 100 كلمة جديدة",
    icon: "📚",
    unlocked: false,
  },
  {
    id: "game_champion",
    title: "بطل الألعاب",
    description: "العب 50 لعبة",
    icon: "🏆",
    unlocked: false,
  },
];

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      currentUser: null,
      nativeLanguage: null,
      learningLanguage: null,
      isPremium: false,
      progress: initialProgress,
      achievements: initialAchievements,

      setCurrentUser: (userId) => set({ currentUser: userId }),

      setNativeLanguage: (language) => set({ nativeLanguage: language }),

      setLearningLanguage: (language) => set({ learningLanguage: language }),

      setPremium: (isPremium) => set({ isPremium }),

      updateProgress: (newProgress) =>
        set((state) => ({
          progress: { ...state.progress, ...newProgress },
        })),

      unlockAchievement: (achievementId) =>
        set((state) => ({
          achievements: state.achievements.map((achievement) =>
            achievement.id === achievementId
              ? { ...achievement, unlocked: true, date: new Date().toISOString() }
              : achievement
          ),
        })),
    }),
    {
      name: "polyglot-academy-storage",
    }
  )
);
