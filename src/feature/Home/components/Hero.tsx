"use client";

import {
  ChevronLeft,
  ChevronRight,
  Star,
  ShoppingBag,
  Clock,
} from "lucide-react";
import Button from "@/components/UI/Button";
import ContainerSection from "@/components/ContainerSection";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "motion/react";

const heroLeft = [
  {
    id: 1,
    name: "وجبة بروستد ميجا",
    rate: 4.9,
    time: "15 - 25 دقيقة",
    image: "/hero_char.webp",
    price: 212,
  },
  {
    id: 2,
    name: "وجبة بروستد ميجا",
    rate: 4.9,
    time: "15 - 25 دقيقة",
    image: "/hero_char_2.webp",
    price: 212,
  },
  {
    id: 3,
    name: "وجبة بروستد ميجا",
    rate: 4.9,
    time: "15 - 25 دقيقة",
    image: "/hero_char_3.webp",
    price: 212,
  },
];

export default function Hero() {
  const [character, setCharacter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCharacter((prev) => (prev + 1) % heroLeft.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white">
      <ContainerSection>
        <div className="min-h-dvh grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* ==================== الجانب الأيمن: النصوص والتفاعل ==================== */}
          <div className="lg:col-span-7 flex flex-col items-start text-right order-2 lg:order-1 pt-6 lg:pt-0">
            {/* Badge */}
            <div className="bg-orange-50 border border-orange-100 text-primary  font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 flex items-center gap-2 shadow-sm">
              <Star className="w-4 h-4 fill-current text-primary" />
              <span>الطعم الأصلي للفرايد تشيكن</span>
            </div>

            {/* العنوان الرئيسي */}
            <h1 className="text-4xl md:text-6xl font-black text-[#0B132A] mb-6 leading-tight tracking-tight">
              استمتع بأشهى <br />
              <span className="text-primary">وجبات الدجاج المقرمش</span>
            </h1>

            {/* الوصف */}
            <p className="text-base md:text-lg text-slate-600 font-medium max-w-xl mb-8 leading-relaxed">
              طازجة، مقرمشة، ومحضرة يومياً بأعلى جودة مع تشكيلة من الصوصات
              المبتكرة لتصلك ساخنة حتى باب بيتك.
            </p>

            <Button
              iconRight={<ShoppingBag className="w-5 h-5" />}
              title="اطلب الآن"
            />

            {/* مصغر الأقسام السريعة */}
            <div className="pt-6 border-t border-slate-100 w-full max-w-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  الأكثر طلباً اليوم
                </span>
                <div className="flex items-center gap-2">
                  <button className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {heroLeft.map((item) => (
                  <div
                    key={item.id}
                    className="bg-slate-50/80 hover:bg-white p-2.5 rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center group"
                  >
                    <div className="w-10 h-10 mb-1.5 rounded-full overflow-hidden bg-orange-100/50 p-1 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-800 mb-0.5">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-semibold text-primary">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ==================== الجانب الأيسر: الصورة والـ Cards العائمة ==================== */}
          <div className="lg:col-span-5 relative flex items-center justify-center order-1 lg:order-2 py-8 lg:py-0">
            {/* الصورة الرئيسية للدجاجة */}
            <AnimatePresence mode="wait">
              <motion.div
                key={heroLeft[character].id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative z-10 w-72 sm:w-80 md:w-96 lg:w-[420px] drop-shadow-2xl"
              >
                <img
                  src={heroLeft[character].image}
                  alt="Fried Chicken Dish"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                />
                {/* الكارت العائم السفلي (تفاصيل الوجبة والتقييم) */}
                <div className="absolute -bottom-4 right-2 sm:right-6 z-20 bg-white/95 backdrop-blur-md p-4 rounded-3xl shadow-xl border border-slate-100 flex flex-col gap-2.5 min-w-50">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-bold text-slate-900 text-sm">
                      {heroLeft[character].name}
                    </span>
                    <div className="flex items-center gap-1 bg-amber-50 text-amber-600 px-2 py-0.5 rounded-lg text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{heroLeft[character].rate}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    <span>توصيل: {heroLeft[character].time} دقيقة</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </ContainerSection>
    </section>
  );
}
