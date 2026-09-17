"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  Plus,
  Heart,
  Star,
  Clock,
  Flame,
  Check,
  Sparkles,
} from "lucide-react";
import ContainerSection from "@/components/ContainerSection";

const categories = ["الكل", "برجر دجاج", "وجبات عائلية", "مقبلات وصوصات"];

interface MenuItem {
  id: number;
  title: string;
  category: string;
  price: number;
  rating: number;
  prepTime: string;
  cals: string;
  image: string;
  isPopular?: boolean;
  isSpicy?: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "ماكي دبل دراما",
    category: "برجر دجاج",
    price: 160,
    rating: 4.8,
    prepTime: "15 دقيقة",
    cals: "850 كالوري",
    image: "/char_maky_2.webp",
    isPopular: true,
  },
  {
    id: 2,
    title: "وجبة التوفير العائلية",
    category: "وجبات عائلية",
    price: 380,
    rating: 4.9,
    prepTime: "25 دقيقة",
    cals: "2100 كالوري",
    image: "/char_maky_2.webp",
    isPopular: true,
  },
  {
    id: 3,
    title: "تويستر الشوارع الحار",
    category: "برجر دجاج",
    price: 95,
    rating: 4.6,
    prepTime: "12 دقيقة",
    cals: "650 كالوري",
    image: "/maky_logo.webp",
    isSpicy: true,
  },
  {
    id: 4,
    title: "بركان الشيدر الساخن",
    category: "مقبلات وصوصات",
    price: 25,
    rating: 4.9,
    prepTime: "5 دقائق",
    cals: "150 كالوري",
    image: "/maky_logo.webp",
  },
];

export default function PinterestStyleMenu() {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [addedItemToast, setAddedItemToast] = useState<string | null>(null);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleAddToCart = (title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setAddedItemToast(title);
    setTimeout(() => setAddedItemToast(null), 2000);
  };

  const filteredItems =
    activeCategory === "الكل"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-slate-50 py-20 px-6 font-sans dir-rtl relative overflow-hidden">
      {/* خلفيات ضوئية ناعمة */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#F1531D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      <ContainerSection>
        <div className="relative z-10">
          {/* Dynamic Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="inline-block bg-[#F1531D]/10 border border-[#F1531D]/20 text-[#F1531D] font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-3 shadow-sm">
                قائمتنا المميزة ✨
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-[#0B132A] tracking-tight">
                الأكثر مبيعاً واستكشافاً
              </h2>
            </div>

            <button className="group text-slate-600 font-extrabold text-xs flex items-center gap-2 hover:text-[#F1531D] transition-all bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-200/80 hover:shadow-md">
              <span>عرض كل المنيو</span>
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-12 scrollbar-none justify-start md:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-black whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-[#0B132A] text-white shadow-lg scale-105"
                    : "bg-white/80 backdrop-blur-md text-slate-600 hover:text-slate-900 border border-slate-200/80 shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => {
              const isFav = favorites.includes(item.id);

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/80 border border-slate-200/80 rounded-3xl p-5 backdrop-blur-xl shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:border-[#F1531D]/40 transition-all flex flex-col justify-between group relative overflow-hidden"
                >
                  <div>
                    {/* حاوي صورة الوجبة مع الزر والشارات */}
                    <div className="relative w-full h-48 bg-slate-100/70 rounded-2xl flex items-center justify-center p-4 mb-4 overflow-hidden">
                      {/* الشارات العائمة */}
                      <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10">
                        {item.isPopular && (
                          <span className="bg-[#F1531D] text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> الأكثر طلباً
                          </span>
                        )}
                        {item.isSpicy && (
                          <span className="bg-red-500/10 border border-red-500/20 text-red-600 text-[10px] font-black px-2.5 py-1 rounded-full flex items-center gap-1 backdrop-blur-md">
                            <Flame className="w-3 h-3 fill-current" /> حار
                          </span>
                        )}
                      </div>

                      {/* زر المفضلة */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(item.id);
                        }}
                        className={`absolute top-3 left-3 p-2 rounded-xl backdrop-blur-md transition-all z-10 border ${
                          isFav
                            ? "bg-white text-red-500 border-red-100 shadow-sm"
                            : "bg-white/80 text-slate-400 hover:text-slate-600 border-slate-200/60 hover:bg-white"
                        }`}
                      >
                        <Heart
                          className={`w-4 h-4 ${isFav ? "fill-red-500" : ""}`}
                        />
                      </button>

                      {/* صورة الوجبة */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* تقييم وفئة الوجبة */}
                    <div className="flex items-center justify-between text-xs font-bold mb-2">
                      <span className="text-[#F1531D] bg-[#F1531D]/10 px-2.5 py-0.5 rounded-md">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="text-slate-700 font-extrabold">
                          {item.rating}
                        </span>
                      </div>
                    </div>

                    {/* عنوان الوجبة */}
                    <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-[#F1531D] transition-colors line-clamp-1">
                      {item.title}
                    </h3>

                    {/* الوقت والسعرات */}
                    <div className="flex items-center gap-3 text-slate-400 text-[11px] font-bold mb-6">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {item.prepTime}
                      </span>
                      <span>•</span>
                      <span>{item.cals}</span>
                    </div>
                  </div>

                  {/* الجزء السفلي: السعر وزر الإضافة */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
                    <div>
                      <span className="text-xs font-bold text-slate-400 block -mb-1">
                        السعر
                      </span>
                      <span className="text-xl font-black text-slate-900">
                        {item.price}{" "}
                        <span className="text-xs font-bold text-[#F1531D]">
                          ج.م
                        </span>
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => handleAddToCart(item.title, e)}
                      className="bg-[#0B132A] hover:bg-[#F1531D] text-white p-3 rounded-2xl transition-all shadow-md hover:shadow-lg hover:shadow-[#F1531D]/20 flex items-center justify-center active:scale-95"
                      aria-label="إضافة للطلب"
                    >
                      <Plus className="w-5 h-5 stroke-[2.5]" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </ContainerSection>

      {/* إشعار عند الإضافة للسلة */}
      <AnimatePresence>
        {addedItemToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-5 py-2.5 rounded-full shadow-2xl border border-slate-700 flex items-center gap-2 text-xs font-bold"
          >
            <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
            <span>تم إضافة ({addedItemToast}) لطلبك!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
