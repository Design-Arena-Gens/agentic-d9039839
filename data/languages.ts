import { Language } from "@/store/appStore";

export const languages: Language[] = [
  // Most Popular Languages
  { code: "ar", name: "العربية", nameEnglish: "Arabic", flag: "🇸🇦", rtl: true },
  { code: "en", name: "الإنجليزية", nameEnglish: "English", flag: "🇬🇧" },
  { code: "es", name: "الإسبانية", nameEnglish: "Spanish", flag: "🇪🇸" },
  { code: "fr", name: "الفرنسية", nameEnglish: "French", flag: "🇫🇷" },
  { code: "de", name: "الألمانية", nameEnglish: "German", flag: "🇩🇪" },
  { code: "it", name: "الإيطالية", nameEnglish: "Italian", flag: "🇮🇹" },
  { code: "pt", name: "البرتغالية", nameEnglish: "Portuguese", flag: "🇵🇹" },
  { code: "ru", name: "الروسية", nameEnglish: "Russian", flag: "🇷🇺" },
  { code: "zh", name: "الصينية", nameEnglish: "Chinese", flag: "🇨🇳" },
  { code: "ja", name: "اليابانية", nameEnglish: "Japanese", flag: "🇯🇵" },
  { code: "ko", name: "الكورية", nameEnglish: "Korean", flag: "🇰🇷" },
  { code: "tr", name: "التركية", nameEnglish: "Turkish", flag: "🇹🇷" },
  { code: "hi", name: "الهندية", nameEnglish: "Hindi", flag: "🇮🇳" },
  { code: "id", name: "الإندونيسية", nameEnglish: "Indonesian", flag: "🇮🇩" },
  { code: "nl", name: "الهولندية", nameEnglish: "Dutch", flag: "🇳🇱" },
  { code: "pl", name: "البولندية", nameEnglish: "Polish", flag: "🇵🇱" },
  { code: "sv", name: "السويدية", nameEnglish: "Swedish", flag: "🇸🇪" },
  { code: "no", name: "النرويجية", nameEnglish: "Norwegian", flag: "🇳🇴" },
  { code: "da", name: "الدنماركية", nameEnglish: "Danish", flag: "🇩🇰" },
  { code: "fi", name: "الفنلندية", nameEnglish: "Finnish", flag: "🇫🇮" },

  // European Languages
  { code: "el", name: "اليونانية", nameEnglish: "Greek", flag: "🇬🇷" },
  { code: "cs", name: "التشيكية", nameEnglish: "Czech", flag: "🇨🇿" },
  { code: "ro", name: "الرومانية", nameEnglish: "Romanian", flag: "🇷🇴" },
  { code: "hu", name: "المجرية", nameEnglish: "Hungarian", flag: "🇭🇺" },
  { code: "uk", name: "الأوكرانية", nameEnglish: "Ukrainian", flag: "🇺🇦" },
  { code: "bg", name: "البلغارية", nameEnglish: "Bulgarian", flag: "🇧🇬" },
  { code: "hr", name: "الكرواتية", nameEnglish: "Croatian", flag: "🇭🇷" },
  { code: "sk", name: "السلوفاكية", nameEnglish: "Slovak", flag: "🇸🇰" },
  { code: "sl", name: "السلوفينية", nameEnglish: "Slovenian", flag: "🇸🇮" },
  { code: "et", name: "الإستونية", nameEnglish: "Estonian", flag: "🇪🇪" },
  { code: "lv", name: "اللاتفية", nameEnglish: "Latvian", flag: "🇱🇻" },
  { code: "lt", name: "الليتوانية", nameEnglish: "Lithuanian", flag: "🇱🇹" },

  // Asian Languages
  { code: "th", name: "التايلاندية", nameEnglish: "Thai", flag: "🇹🇭" },
  { code: "vi", name: "الفيتنامية", nameEnglish: "Vietnamese", flag: "🇻🇳" },
  { code: "ms", name: "الماليزية", nameEnglish: "Malay", flag: "🇲🇾" },
  { code: "tl", name: "الفلبينية", nameEnglish: "Tagalog", flag: "🇵🇭" },
  { code: "bn", name: "البنغالية", nameEnglish: "Bengali", flag: "🇧🇩" },
  { code: "ur", name: "الأوردو", nameEnglish: "Urdu", flag: "🇵🇰", rtl: true },
  { code: "ta", name: "التاميلية", nameEnglish: "Tamil", flag: "🇮🇳" },
  { code: "te", name: "التيلوجو", nameEnglish: "Telugu", flag: "🇮🇳" },
  { code: "mr", name: "الماراثية", nameEnglish: "Marathi", flag: "🇮🇳" },
  { code: "kn", name: "الكانادا", nameEnglish: "Kannada", flag: "🇮🇳" },

  // Middle Eastern Languages
  { code: "fa", name: "الفارسية", nameEnglish: "Persian", flag: "🇮🇷", rtl: true },
  { code: "he", name: "العبرية", nameEnglish: "Hebrew", flag: "🇮🇱", rtl: true },

  // African Languages
  { code: "sw", name: "السواحيلية", nameEnglish: "Swahili", flag: "🇰🇪" },
  { code: "am", name: "الأمهرية", nameEnglish: "Amharic", flag: "🇪🇹" },
  { code: "zu", name: "الزولو", nameEnglish: "Zulu", flag: "🇿🇦" },
  { code: "xh", name: "الخوسا", nameEnglish: "Xhosa", flag: "🇿🇦" },
  { code: "yo", name: "اليوروبا", nameEnglish: "Yoruba", flag: "🇳🇬" },
  { code: "ig", name: "الإيجبو", nameEnglish: "Igbo", flag: "🇳🇬" },
  { code: "ha", name: "الهوسا", nameEnglish: "Hausa", flag: "🇳🇬" },

  // Other Languages
  { code: "af", name: "الأفريقانية", nameEnglish: "Afrikaans", flag: "🇿🇦" },
  { code: "sq", name: "الألبانية", nameEnglish: "Albanian", flag: "🇦🇱" },
  { code: "eu", name: "الباسكية", nameEnglish: "Basque", flag: "🇪🇸" },
  { code: "be", name: "البيلاروسية", nameEnglish: "Belarusian", flag: "🇧🇾" },
  { code: "ca", name: "الكتالانية", nameEnglish: "Catalan", flag: "🇪🇸" },
  { code: "gl", name: "الجاليكية", nameEnglish: "Galician", flag: "🇪🇸" },
  { code: "is", name: "الآيسلندية", nameEnglish: "Icelandic", flag: "🇮🇸" },
  { code: "ga", name: "الأيرلندية", nameEnglish: "Irish", flag: "🇮🇪" },
  { code: "mk", name: "المقدونية", nameEnglish: "Macedonian", flag: "🇲🇰" },
  { code: "mt", name: "المالطية", nameEnglish: "Maltese", flag: "🇲🇹" },
  { code: "sr", name: "الصربية", nameEnglish: "Serbian", flag: "🇷🇸" },
  { code: "cy", name: "الويلزية", nameEnglish: "Welsh", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿" },
];
