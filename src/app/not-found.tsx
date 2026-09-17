"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, UtensilsCrossed, ArrowRight, Flame } from "lucide-react";
import Button from "@/components/UI/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-200 flex flex-col justify-between relative overflow-hidden font-sans dir-rtl">
      {/* خلفيات ضوئية ناعمة */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

      {/* المحتوى الرئيسي */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center relative z-10 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto flex flex-col items-center"
        >
          {/* رقم 404 مع أيقونة تفاعلية */}
          <div className="relative mb-6">
            <span className="text-8xl md:text-9xl font-black text-slate-600 select-none tracking-widest">
              404
            </span>
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 flex items-center justify-center text-primary">
                <UtensilsCrossed className="w-10 h-10 md:w-12 md:h-12" />
              </div>
            </motion.div>
          </div>

          {/* الشارة والعنوان */}
          <span className="bg-primary/10 border border-primary/20 text-primary text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider inline-block mb-4 shadow-sm">
            عذراً، الوجبة غير موجودة! 🍔
          </span>

          <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
            الصفحة التي تبحث عنها غير متاحة
          </h1>

          <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed mb-8 max-w-md">
            يبدو أن الرابط الذي حاولت الوصول إليه قد تم تحريكه أو حذفه، أو ربما
            كتبت العنوان بشكل غير صحيح.
          </p>

          {/* أزرار التنقل */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link href="/">
              <Button
                iconRight={<Home className="w-4 h-4" />}
                title="الرئيسية"
              />
            </Link>

            <Link href="/menu">
              <Button
                color="bg-white hover:bg-slate-100 text-slate-80 border-slate-200 "
                iconLeft={
                  <ArrowRight className="w-4 h-4 rotate-180 text-slate-400" />
                }
                title="المنيو"
              />
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
