"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Crown, Check, Sparkles, Zap, Star, Users, Brain } from "lucide-react";
import { useAppStore } from "@/store/appStore";

interface PremiumModalProps {
  onClose: () => void;
}

export default function PremiumModal({ onClose }: PremiumModalProps) {
  const { setPremium } = useAppStore();

  const features = [
    {
      icon: Brain,
      title: "مدرب AI شخصي",
      description: "احصل على تدريب مخصص من الذكاء الاصطناعي المتقدم",
    },
    {
      icon: Sparkles,
      title: "محتوى حصري",
      description: "الوصول إلى آلاف الدروس والتمارين المتقدمة",
    },
    {
      icon: Zap,
      title: "تعلم أسرع",
      description: "خوارزميات متقدمة لتسريع عملية التعلم",
    },
    {
      icon: Star,
      title: "بدون إعلانات",
      description: "استمتع بتجربة خالية من الإعلانات",
    },
    {
      icon: Users,
      title: "مجتمع VIP",
      description: "انضم لمجتمع المتعلمين المميزين",
    },
    {
      icon: Crown,
      title: "شهادات معتمدة",
      description: "احصل على شهادات احترافية معتمدة",
    },
  ];

  const plans = [
    {
      id: "monthly",
      name: "شهري",
      price: "29",
      period: "شهر",
      popular: false,
    },
    {
      id: "yearly",
      name: "سنوي",
      price: "199",
      period: "سنة",
      popular: true,
      savings: "وفر 45%",
    },
    {
      id: "lifetime",
      name: "مدى الحياة",
      price: "499",
      period: "مرة واحدة",
      popular: false,
    },
  ];

  const handleUpgrade = (planId: string) => {
    setPremium(true);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 left-6 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors z-10"
          >
            <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Header */}
          <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 p-12 text-white text-center rounded-t-3xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <Crown className="w-96 h-96 absolute -top-20 -right-20 animate-pulse-slow" />
              <Sparkles className="w-64 h-64 absolute -bottom-10 -left-10 animate-float" />
            </div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="relative"
            >
              <Crown className="w-20 h-20 mx-auto mb-6 drop-shadow-2xl" />
              <h2 className="text-5xl font-bold mb-4">ارتقِ للمستوى المميز</h2>
              <p className="text-2xl opacity-90">
                استمتع بتجربة تعليمية متكاملة مع جميع المميزات الحصرية
              </p>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="p-12">
            <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
              مميزات الاشتراك المميز
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl p-6"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Pricing Plans */}
            <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
              اختر الخطة المناسبة لك
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl transition-all ${
                    plan.popular
                      ? "ring-4 ring-yellow-400 transform scale-105"
                      : "ring-2 ring-gray-200 dark:ring-gray-700"
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full font-bold shadow-lg">
                        الأكثر شعبية
                      </div>
                    </div>
                  )}

                  {/* Savings Badge */}
                  {plan.savings && (
                    <div className="absolute top-4 left-4">
                      <div className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-bold">
                        {plan.savings}
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                      {plan.name}
                    </h4>
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-5xl font-bold text-indigo-600 dark:text-indigo-400">
                        ${plan.price}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">/ {plan.period}</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleUpgrade(plan.id)}
                    className={`w-full py-4 rounded-2xl font-bold shadow-lg transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:shadow-xl"
                        : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-xl"
                    }`}
                  >
                    اشترك الآن
                  </motion.button>
                </motion.div>
              ))}
            </div>

            {/* Guarantee */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-50 dark:bg-green-900/30 rounded-2xl">
                <Check className="w-6 h-6 text-green-600 dark:text-green-400" />
                <span className="text-lg font-semibold text-green-700 dark:text-green-300">
                  ضمان استرجاع المال خلال 30 يوم
                </span>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                جرّب بدون مخاطرة. إذا لم تكن راضياً، نعيد لك أموالك بالكامل
              </p>
            </motion.div>

            {/* Testimonials */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
                ماذا يقول المستخدمون
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: "أحمد محمد",
                    country: "🇸🇦",
                    text: "أفضل تطبيق لتعلم اللغات! المحتوى المميز يستحق كل ريال",
                  },
                  {
                    name: "فاطمة علي",
                    country: "🇪🇬",
                    text: "مدرب الـ AI الشخصي غيّر طريقة تعلمي بالكامل. ممتاز!",
                  },
                  {
                    name: "يوسف حسن",
                    country: "🇦🇪",
                    text: "استثمار رائع في مستقبلي. تعلمت 3 لغات في سنة واحدة!",
                  },
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.name[0]}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800 dark:text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.country}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{testimonial.text}</p>
                    <div className="flex gap-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
