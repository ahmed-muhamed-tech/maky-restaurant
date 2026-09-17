import { AnimatePresence, motion } from "motion/react";
import { ReactNode } from "react";

export default function Alert({
  message,
  icon,
}: {
  message: string;
  icon: ReactNode;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-5 py-2.5 rounded-full shadow-xl border border-slate-700 flex items-center gap-2 text-xs font-bold"
      >
        {icon}
        <span>{message}</span>
      </motion.div>
    </AnimatePresence>
  );
}
