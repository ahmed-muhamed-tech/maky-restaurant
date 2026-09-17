import { CheckCircle2, Clock, MapPin, Navigation, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function Branches({filteredBranches}: {filteredBranches: {id: number, name: string, city: string, address: string, phone: string, hours: string, status: string, mapUrl: string, features: string[]}[]}) {
  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        {filteredBranches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBranches.map((branch) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white/80 border border-slate-200/80 rounded-3xl p-6 backdrop-blur-xl shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:border-[#F1531D]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* الرأس والحالة */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-emerald-50 border border-emerald-200 text-emerald-600 text-[11px] font-black px-3 py-1 rounded-full flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      {branch.status}
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      {branch.city}
                    </span>
                  </div>

                  {/* اسم الفرع */}
                  <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-[#F1531D] transition-colors">
                    {branch.name}
                  </h3>

                  {/* معلومات التفاصيل */}
                  <div className="space-y-2.5 text-xs font-medium text-slate-600 mb-6">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#F1531D] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{branch.address}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>ساعات العمل: {branch.hours}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="font-mono dir-ltr">{branch.phone}</span>
                    </div>
                  </div>

                  {/* المميزات */}
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-100">
                    {branch.features.map((feat) => (
                      <span
                        key={feat}
                        className="bg-slate-100/80 text-slate-500 text-[10px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#F1531D]" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* أزرار الإجراءات */}
                <div className="flex items-center gap-2 pt-2">
                  <a
                    href={`tel:${branch.phone}`}
                    className="flex-1 bg-slate-900 hover:bg-[#F1531D] text-white py-3 rounded-2xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>اتصل بالفرع</span>
                  </a>

                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-2xl transition-colors shadow-sm"
                    title="الاتجاهات عبر الخريطة"
                  >
                    <Navigation className="w-4 h-4 text-[#F1531D]" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/50 border border-slate-200/60 rounded-3xl backdrop-blur-md">
            <MapPin className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-700 mb-1">
              لم يتم العثور على فروع
            </h3>
            <p className="text-slate-400 text-xs">
              جرب البحث باسم فرع آخر أو اختر محافظة مختلفة.
            </p>
          </div>
        )}
      </section>
  )
}
