import { Search } from "lucide-react";
import { motion } from "motion/react";

export default function Header({searchQuery , setSearchQuery , cities , selectedCity , setSelectedCity}: {searchQuery:string , setSearchQuery:(e:any)=>void , cities:string[] , selectedCity:string , setSelectedCity:(e:any)=>void}) {
  return (
    <section className="pt-20 pb-12 px-6 md:px-12 max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="bg-[#F1531D]/10 border border-[#F1531D]/20 text-[#F1531D] text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider inline-block mb-4 shadow-sm">
            أقرب مما تتخيل 📍
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            فروع مطاعم <span className="text-[#F1531D]">MAKY</span>
          </h1>
          <p className="text-slate-500 font-medium text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            ابحث عن أحدث فروعنا واستمتع بالدجاج المقرمش الساخن بالقرب منك، أو
            استخدم زر الاتصال للطلب المباشر.
          </p>
        </motion.div>

        {/* أشرطة الفلترة والبحث */}
        <div className="mt-10 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-4 bg-white/80 p-3 rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-200/50 backdrop-blur-md">
          {/* حقل البحث */}
          <div className="relative w-full md:flex-1">
            <Search className="w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="ابحث باسم الفرع أو المنطقة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pr-10 pl-4 py-2.5 text-xs font-medium focus:outline-none focus:border-[#F1531D] transition-colors"
            />
          </div>

          {/* أزرار المحافظات */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap ${
                  selectedCity === city
                    ? "bg-[#0B132A] text-white shadow-md"
                    : "bg-slate-100 text-slate-500 hover:text-slate-900 border border-slate-200/60"
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </section>
  )
}
