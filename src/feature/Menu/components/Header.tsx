import { Search } from "lucide-react";
import { motion } from "motion/react";

const categories = [
  "الكل",
  "وجبات البرجر",
  "الدجاج المقرمش",
  "الساندوتشات",
  "الصوصات",
  "المشروبات",
];

export default function Header({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
}: {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}) {
  return (
    <section className="pt-20 pb-10 px-6 md:px-12 max-w-7xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className="bg-primary/10 border border-primary/20 text-primary text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider inline-block mb-3 shadow-sm">
           أهلا بيك في ماكي
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
          منيو مطاعم <span className="text-primary">MAKY</span>
        </h1>
        <p className="text-slate-500 font-medium text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          استكشف أشهى وجبات الدجاج المقرمش والبرجر المصنوعة يومياً بخلطاتنا
          السرية والمكونات الطازجة.
        </p>
      </motion.div>

      {/* شريط البحث وتصفية الفئات */}
      <div className="mt-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4 bg-white/80 p-3 rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-200/50 backdrop-blur-md">
        {/* حقل البحث */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="ابحث عن وجبتك المفضل..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200/80 rounded-xl pr-10 pl-4 py-2.5 text-xs font-medium focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* أزرار الفئات */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:flex-1 pb-1 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-[#0B132A] text-white shadow-md"
                  : "bg-slate-100 text-slate-500 hover:text-slate-900 border border-slate-200/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
