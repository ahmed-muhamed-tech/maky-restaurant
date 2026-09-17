import { motion } from "framer-motion";
import { Flame, Plus, Star } from "lucide-react";


type CardMealProps = {
  isPopular: boolean | undefined;
  isSpicy: boolean | undefined;
  image: string;
  name: string;
  category: string;
  rating: number;
  description: string;
  price: number;
}

export default function CardMeal({
  isPopular,
  isSpicy,
  image,
  name,
  category,
  rating,
  description,
  price,
}:CardMealProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white/80 border border-slate-200/80 rounded-3xl p-5 backdrop-blur-xl shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:border-[#F1531D]/40 transition-all flex flex-col justify-between group cursor-pointer"
    >
      <div>
        {/* صورة الوجبة والشارات */}
        <div className="relative w-full h-48 bg-slate-100/70 rounded-2xl overflow-hidden mb-4 flex items-center justify-center p-4">
          {isPopular && (
            <span className="absolute top-3 right-3 bg-[#F1531D] text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-md z-10">
              الأكثر طلباً 🔥
            </span>
          )}
          {isSpicy && (
            <span className="absolute top-3 left-3 bg-red-500/10 border border-red-500/20 text-red-600 text-[10px] font-black px-2 py-0.5 rounded-full z-10 flex items-center gap-1">
              <Flame className="w-3 h-3 fill-current" /> حار
            </span>
          )}
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* التفاصيل والتقييم */}
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="text-[11px] font-bold text-slate-400">
            {category}
          </span>
          <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>{rating}</span>
          </div>
        </div>

        <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-[#F1531D] transition-colors">
          {name}
        </h3>

        <p className="text-slate-500 font-medium text-xs leading-relaxed line-clamp-2 mb-4">
          {description}
        </p>
      </div>

      {/* السعر وزر الإضافة */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
        <div>
          <span className="text-xs font-bold text-slate-400">السعر</span>
          <div className="text-xl font-black text-slate-900">
            {price}{" "}
            <span className="text-xs font-bold text-[#F1531D]">ج.م</span>
          </div>
        </div>

        <button
          className="bg-[#0B132A] hover:bg-[#F1531D] text-white p-3 rounded-2xl transition-colors shadow-md flex items-center justify-center gap-1.5"
          aria-label="إضافة للسلة"
        >
          <Plus className="w-4 h-4" />
          <span className="text-xs font-bold pl-1">إضافة</span>
        </button>
      </div>
    </motion.div>
  );
}
