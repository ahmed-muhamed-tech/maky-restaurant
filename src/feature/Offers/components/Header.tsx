import { motion } from "motion/react";

export default function Header() {
  return (
    <section className="pt-20 pb-12 px-6 md:px-12 max-w-7xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className="bg-[#F1531D]/10 border border-[#F1531D]/20 text-[#F1531D] text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider inline-block mb-3 shadow-sm">
          خصومات حصريّة 💥
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
          عروض <span className="text-[#F1531D]">MAKY</span> القوية
        </h1>
        <p className="text-slate-500 font-medium text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          استمتع بأفضل الوجبات بأسعار توفيرية خاصة جداً. اختر عرضك المفضل
          واستخدم كود الخصم فوراً عند الطلب!
        </p>
      </motion.div>
    </section>
  );
}
