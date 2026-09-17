import { Check, Copy, Plus, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function GridOffers({ offersList, copiedCode, copyToClipboard, handleAddOffer }: { offersList: any[]; copiedCode: string | null; copyToClipboard: (code: string) => void; handleAddOffer: (title: string) => void; }) {
  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offersList.map((offer) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/80 border border-slate-200/80 rounded-3xl p-6 backdrop-blur-xl shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:border-[#F1531D]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* رأس كارت العرض */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#F1531D]/10 text-[#F1531D] border border-[#F1531D]/20 text-xs font-black px-3 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    {offer.badge}
                  </span>

                  {offer.code && (
                    <button
                      onClick={() => copyToClipboard(offer.code!)}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-200 transition-colors flex items-center gap-1.5"
                      title="نسخ كود الخصم"
                    >
                      {copiedCode === offer.code ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600">تم النسخ</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>
                            كود:{" "}
                            <strong className="text-slate-900 font-mono">
                              {offer.code}
                            </strong>
                          </span>
                        </>
                      )}
                    </button>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-5 mb-6">
                  <div className="w-28 h-28 bg-slate-100/80 rounded-2xl flex-shrink-0 flex items-center justify-center p-2">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="max-h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-[#F1531D] transition-colors">
                      {offer.title}
                    </h3>
                    <p className="text-slate-500 font-medium text-xs leading-relaxed">
                      {offer.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* السعر وزر الإضافة */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div>
                  <span className="text-slate-400 text-xs font-bold line-through ml-2">
                    {offer.originalPrice} ج.م
                  </span>
                  <span className="text-2xl font-black text-slate-900">
                    {offer.discountPrice}{" "}
                    <span className="text-xs font-bold text-[#F1531D]">
                      ج.م
                    </span>
                  </span>
                </div>

                <button
                  onClick={() => handleAddOffer(offer.title)}
                  className="bg-[#0B132A] hover:bg-[#F1531D] text-white px-5 py-2.5 rounded-2xl text-xs font-extrabold transition-colors shadow-md flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>أضف للطلب</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
  )
}
