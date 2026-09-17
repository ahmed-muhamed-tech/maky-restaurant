"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Flame,
  Star,
  Plus,
  Minus,
  ShoppingBag,
  Check,
  Clock,
  Sparkles,
  Info,
} from "lucide-react";

// بيانات محاكاة للوجبة (يمكن جلبها عبر API باستخدام الـ id)
const foodItem = {
  id: 1,
  name: "ماكي دبل بيجان برجر",
  category: "وجبات البرجر",
  rating: 4.9,
  reviewsCount: 128,
  prepTime: "15-20 دقيقة",
  calories: "780 سعرة",
  description:
    "قطعتين دجاج مقرمش حار مطهوة بعناية مع صوص الشيدر الذائب، شريحة جبنة ناعمة، خس طازج، وخيار مخلل مقرمش داخل خبز البريوش الذهبي المخبوز يومياً.",
  image: "/char_maky_2.webp",
  isSpicy: true,
  isPopular: true,
  basePrice: 185,
  sizes: [
    { id: "single", name: "سينجل (قطعة واحدة)", priceOffset: -35 },
    { id: "double", name: "دبل (قطعتين)", priceOffset: 0 },
    { id: "combo", name: "كومبو (مع بطاطس ومشروب)", priceOffset: 45 },
  ],
  extras: [
    { id: "sauce_cheddar", name: "صوص شيدر إضافي", price: 20 },
    { id: "extra_cheese", name: "شريحة جبنة إضافية", price: 15 },
    { id: "jalapeno", name: "قطع هلابينو حارة", price: 10 },
    { id: "fries_large", name: "ترقية البطاطس لحجم كبير", price: 25 },
  ],
};

export default function FoodDetailsPage() {
  const [selectedSize, setSelectedSize] = useState("double");
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");
  const [addedToast, setAddedToast] = useState(false);

  // حساب السعر الإجمالي ديناميكياً
  const currentSizeObj = foodItem.sizes.find((s) => s.id === selectedSize);
  const sizePrice = foodItem.basePrice + (currentSizeObj?.priceOffset || 0);
  
  const extrasTotalPrice = selectedExtras.reduce((sum, extraId) => {
    const extra = foodItem.extras.find((e) => e.id === extraId);
    return sum + (extra?.price || 0);
  }, 0);

  const unitPrice = sizePrice + extrasTotalPrice;
  const totalPrice = unitPrice * quantity;

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAddToCart = () => {
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  return (
    <div className="min-h-screen pt-8 lg:pt-28 bg-slate-50 text-slate-800 font-sans dir-rtl relative overflow-hidden">
      {/* خلفيات ضوئية ناعمة */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />


      {/* تفاصيل الوجبة الرئيسية */}
      <main className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* العمود الأيمن: معرض صورة الوجبة */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 bg-white/80 border border-slate-200/80 rounded-3xl p-8 backdrop-blur-xl shadow-xl shadow-slate-200/50 flex flex-col items-center justify-center relative min-h-95"
          >
            {/* الشارات العائمة */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
              {foodItem.isPopular && (
                <span className="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> الأكثر طلباً
                </span>
              )}
              {foodItem.isSpicy && (
                <span className="bg-red-500/10 border border-red-500/20 text-red-600 text-[10px] font-black px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Flame className="w-3 h-3 fill-current" /> حار جداً
                </span>
              )}
            </div>

            <img
              src={foodItem.image}
              alt={foodItem.name}
              className="w-full max-w-xs h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
            />

            {/* تفاصيل سريعة بالأسفل */}
            <div className="w-full flex items-center justify-around mt-8 pt-6 border-t border-slate-100 text-slate-500 text-xs font-bold">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" />
                <span>{foodItem.prepTime}</span>
              </div>
              <div className="h-4 w-px bg-slate-200" />
              <div className="flex items-center gap-1.5">
                <Info className="w-4 h-4 text-amber-500" />
                <span>{foodItem.calories}</span>
              </div>
            </div>
          </motion.div>

          {/* العمود الأيسر: خيارات التخصيص والشراء */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* الرأس والتقييم */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  {foodItem.category}
                </span>
                <div className="flex items-center gap-1 text-amber-500 text-xs font-extrabold bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{foodItem.rating}</span>
                  <span className="text-slate-400 font-medium">({foodItem.reviewsCount})</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
                {foodItem.name}
              </h1>

              <p className="text-slate-500 font-medium text-xs md:text-sm leading-relaxed">
                {foodItem.description}
              </p>
            </div>

            {/* اختيار الحجم */}
            <div className="bg-white/80 border border-slate-200/80 rounded-2xl p-5 backdrop-blur-md shadow-sm">
              <h3 className="text-xs font-extrabold text-slate-800 mb-3 uppercase tracking-wider">
                1. اختر الحجم / الوجبة
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {foodItem.sizes.map((size) => {
                  const isSelected = selectedSize === size.id;
                  const itemPrice = foodItem.basePrice + size.priceOffset;
                  return (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size.id)}
                      className={`p-3.5 rounded-xl border text-right transition-all flex flex-col justify-between ${
                        isSelected
                          ? "border-primary bg-primary/5 shadow-sm"
                          : "border-slate-200/80 bg-slate-50/50 hover:bg-slate-100/60"
                      }`}
                    >
                      <span className={`text-xs font-bold ${isSelected ? "text-primary" : "text-slate-700"}`}>
                        {size.name}
                      </span>
                      <span className="text-sm font-black text-slate-900 mt-2">
                        {itemPrice} <span className="text-[10px] text-primary">ج.م</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* الإضافات الاختيارية */}
            <div className="bg-white/80 border border-slate-200/80 rounded-2xl p-5 backdrop-blur-md shadow-sm">
              <h3 className="text-xs font-extrabold text-slate-800 mb-3 uppercase tracking-wider">
                2. إضافات حسب ذوقك (اختياري)
              </h3>
              <div className="space-y-2.5">
                {foodItem.extras.map((extra) => {
                  const isChecked = selectedExtras.includes(extra.id);
                  return (
                    <label
                      key={extra.id}
                      onClick={() => toggleExtra(extra.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                        isChecked
                          ? "border-[#0B132A] bg-slate-900 text-white shadow-sm"
                          : "border-slate-200/80 bg-slate-50/50 hover:bg-slate-100/60 text-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors ${
                            isChecked
                              ? "bg-primary border-primary text-white"
                              : "border-slate-300 bg-white"
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-3" />}
                        </div>
                        <span className="text-xs font-bold">{extra.name}</span>
                      </div>
                      <span className={`text-xs font-extrabold ${isChecked ? "text-primary" : "text-slate-900"}`}>
                        +{extra.price} ج.م
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* ملاحظات خاصة */}
            <div className="bg-white/80 border border-slate-200/80 rounded-2xl p-4 backdrop-blur-md shadow-sm">
              <textarea
                placeholder="أضف ملاحظات خاصة للمطبخ (مثلاً: بدون خيار مخلل)..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-primary transition-colors resize-none h-20"
              />
            </div>

            {/* شريط الشراء والتحكم بالكمية */}
            <div className="bg-[#0B132A] text-white p-5 rounded-3xl shadow-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* التحكم بالكمية */}
              <div className="flex items-center gap-3 bg-slate-800/80 border border-slate-700 p-1.5 rounded-2xl w-full sm:w-auto justify-between sm:justify-start">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-9 h-9 rounded-xl bg-slate-700 hover:bg-slate-600 text-white flex items-center justify-center transition-colors"
                  aria-label="تقليل الكمية"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-mono font-black text-base px-3">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-9 h-9 rounded-xl bg-primary hover:bg-primary/80 text-white flex items-center justify-center transition-colors"
                  aria-label="زيادة الكمية"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* السعر الإجمالي وزر الإضافة */}
              <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 font-bold block">الإجمالي</span>
                  <span className="text-2xl font-black text-white">
                    {totalPrice} <span className="text-xs text-primary">ج.م</span>
                  </span>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="bg-primary hover:bg-primary/80 text-white px-7 py-3.5 rounded-2xl text-xs font-extrabold transition-all shadow-lg shadow-[#F1531D]/30 flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>إضافة للسلة</span>
                </button>
              </div>
            </div>

          </motion.div>
        </div>
      </main>

      {/* اشعار إضافة سريعة (Toast) */}
      <AnimatePresence>
        {addedToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl border border-slate-700 flex items-center gap-2 text-xs font-bold"
          >
            <Check className="w-4 h-4 text-emerald-400 stroke-3" />
            <span>تم إضافة الوجبة بجميع تفاصيلها إلى سلة طلباتك!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}