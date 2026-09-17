import { useEffect, useState } from "react";

interface Offer {
  id: number;
  title: string;
  badge: string;
  description: string;
  originalPrice: number;
  discountPrice: number;
  code?: string;
  expireTime?: string;
  image: string;
  isFlashDeal?: boolean;
}

const offersList: Offer[] = [
  {
    id: 1,
    title: "عزومة العيلة الموفرة",
    badge: "وفر 30%",
    description:
      "12 قطعة دجاج مقرمش + 2 برجر سنجل + بطاطس حجم عائلي + 1.5 لتر كولا + 4 صوصات من اختيارك.",
    originalPrice: 520,
    discountPrice: 365,
    code: "MAKY30",
    image: "/char_maky_2.webp",
    isFlashDeal: true,
  },
  {
    id: 2,
    title: "عرض الويك إند السريع",
    badge: "خصم 50 ج.م",
    description: "2 ساندوتش ماكي دبل بيجان + بطاطس مقلية + 2 صوص شيدر مذاب.",
    originalPrice: 280,
    discountPrice: 230,
    code: "WEEKEND",
    image: "/maky_logo.webp",
  },
  {
    id: 3,
    title: "كومبو الصحاب (3 ساندوتشات)",
    badge: "الأكثر مبيعاً 🔥",
    description: "3 ساندوتش كرانشي تشيكن + 3 بطاطس وسط + 3 كانز كولا.",
    originalPrice: 420,
    discountPrice: 320,
    image: "/char_maky_2.webp",
  },
  {
    id: 4,
    title: "عرض البركان الحار",
    badge: "للشجاعة فقط 🌶️",
    description:
      "ساندوتش كابتن سبايسي + صوص بركان الشيدر + بطاطس متبلة + مشروب غازي.",
    originalPrice: 195,
    discountPrice: 150,
    code: "SPICY15",
    image: "/maky_logo.webp",
  },
];

export default function useController() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [addedOffer, setAddedOffer] = useState<string | null>(null);

  // حساب العداد التنازلي للعرض اليومي
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0)
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleAddOffer = (title: string) => {
    setAddedOffer(title);
    setTimeout(() => setAddedOffer(null), 2000);
  };

  return {
    copiedCode,
    addedOffer,
    copyToClipboard,
    handleAddOffer,
    offersList,
  };
}
