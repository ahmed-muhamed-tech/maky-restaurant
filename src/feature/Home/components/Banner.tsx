"use client";

import { useState } from "react";
import { Zap, Copy, Check, Tag } from "lucide-react";
import ContainerSection from "@/components/ContainerSection";

export default function Banner() {
  const [copied, setCopied] = useState(false);
  const promoCode = "MAKY20";

  const handleCopyCode = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section>
      <ContainerSection>
        {/* ------------------- الحاوية الرئيسية باللون الرمادي الفاتح والـ Backdrop Blur ------------------- */}
        <div className="relative bg-slate-200/50 backdrop-blur-xl border border-slate-300/60 rounded-[2.5rem] p-8 md:p-14 overflow-hidden shadow-2xl shadow-slate-300/40 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* إضاءة خلفية ناعمة */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F1531D]/15 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-400/10 rounded-full blur-[90px] pointer-events-none"></div>

          {/* ==================== الجانب الأيمن: المحتوى والنصوص ==================== */}
          <div className="relative z-10 flex-1 text-right">
            {/* Badge */}
            <div className="bg-white/80 border border-orange-200/80 text-[#F1531D] backdrop-blur-md px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider mb-6 inline-flex items-center gap-2 shadow-sm">
              <Zap className="w-4 h-4 fill-current text-[#F1531D]" />
              <span>عرض حصري لفترة محدودة</span>
            </div>

            {/* العنوان الرئيسي */}
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-4 leading-tight">
              خصم <span className="text-[#F1531D]">20%</span> على وجبات العائلة
            </h2>

            {/* الوصف */}
            <p className="text-base md:text-lg text-slate-600 font-medium mb-6 max-w-lg leading-relaxed">
              استمتع بألذ مكس فرايد تشيكن مقرمش مع الصوصات والبطاطس بسعر خاص
              جداً عند الطلب أونلاين.
            </p>

            {/* كود الخصم */}
            <div className="inline-flex items-center gap-3 bg-white/70 border border-slate-300/80 p-2 pr-4 rounded-2xl backdrop-blur-md shadow-sm">
              <div className="flex items-center gap-2 text-slate-600 text-xs font-bold">
                <Tag className="w-4 h-4 text-[#F1531D]" />
                <span>كود الخصم:</span>
              </div>
              <span className="font-mono font-black text-slate-800 tracking-widest text-sm bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
                {promoCode}
              </span>
              <button
                type="button"
                onClick={handleCopyCode}
                className="bg-[#F1531D] hover:bg-[#d44315] active:scale-95 text-white p-2.5 rounded-xl transition-all shadow-md shadow-[#F1531D]/20 flex items-center justify-center"
                title="نسخ الكود"
              >
                {copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* ==================== الجانب الأيسر: كارت العداد المضيء ==================== */}
          <div className="relative z-10 w-full lg:w-auto flex-shrink-0">
            <div className="bg-white/70 border border-slate-300/80 p-6 md:p-8 rounded-3xl backdrop-blur-xl shadow-xl flex flex-col items-center text-center max-w-sm mx-auto">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                ينتهي العرض خلال
              </span>

              {/* العداد التنازلي */}
              <div className="flex gap-3 items-center text-slate-800 mb-6">
                <div className="flex flex-col items-center">
                  <span className="text-2xl md:text-3xl font-black bg-white border border-slate-200/80 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl shadow-sm text-[#F1531D]">
                    02
                  </span>
                  <span className="text-[11px] text-slate-500 mt-1.5 font-bold">
                    ساعات
                  </span>
                </div>

                <span className="text-xl font-bold text-slate-400 mb-5">:</span>

                <div className="flex flex-col items-center">
                  <span className="text-2xl md:text-3xl font-black bg-white border border-slate-200/80 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl shadow-sm text-[#F1531D]">
                    45
                  </span>
                  <span className="text-[11px] text-slate-500 mt-1.5 font-bold">
                    دقائق
                  </span>
                </div>

                <span className="text-xl font-bold text-slate-400 mb-5">:</span>

                <div className="flex flex-col items-center">
                  <span className="text-2xl md:text-3xl font-black bg-white border border-slate-200/80 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl shadow-sm text-[#F1531D]">
                    18
                  </span>
                  <span className="text-[11px] text-slate-500 mt-1.5 font-bold">
                    ثواني
                  </span>
                </div>
              </div>

              {/* شريط السعر */}
              <div className="w-full bg-slate-100/80 rounded-2xl p-3 border border-slate-200/60 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-bold">
                  السعر بعد الخصم:
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 line-through text-[11px] font-semibold">
                    240 ج.م
                  </span>
                  <span className="text-[#F1531D] font-black text-sm">
                    190 ج.م
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerSection>
    </section>
  );
}
