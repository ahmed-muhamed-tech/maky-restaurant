import { AnimatePresence, motion } from "framer-motion";

interface CardCharacterProps {
  char: {
    id: number;
    name: string;
    role: string;
    description: string;
    image: string;
    icon: any;
    accentColor: string;
  };
  isHovered: boolean;
  isBlurred: boolean;
  setHoveredId: (id: number | null) => void;
  Icon: any;
}

export default function CardCharacter({
  char,
  isHovered,
  isBlurred,
  setHoveredId,
  Icon,
}: CardCharacterProps) {
  return (
    <motion.div
      key={char.id}
      onMouseEnter={() => setHoveredId(char.id)}
      onMouseLeave={() => setHoveredId(null)}
      animate={{
        scale: isHovered ? 1.05 : 1,
        opacity: isBlurred ? 0.4 : 1,
        filter: isBlurred ? "blur(3px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative flex flex-col items-center text-center group cursor-pointer"
    >
      {/* صورة الشخصية العائمة بدون مربع */}
      <div className="relative w-48 h-56 md:w-56 md:h-64 lg:w-80 lg:h-96 flex items-center justify-center -mb-8 z-20">
        {/* ظلال توهج خلف الشخصية عند الـ Hover */}
        <div
          className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
          style={{ backgroundColor: char.accentColor }}
        />

        <img
          src={char.image}
          alt={char.name}
          className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-3 group-hover:scale-110"
        />
      </div>

      {/* كارت التفاصيل السفلية (Glassmorphism) */}
      <div className="w-full bg-white/70 border border-slate-200/80 rounded-3xl p-6 pt-10 backdrop-blur-xl shadow-lg shadow-slate-200/50 flex flex-col items-center transition-all duration-300 group-hover:bg-white group-hover:shadow-xl">
        {/* الشارة والعنوان */}
        <div className="flex items-center gap-1.5 mb-2">
          <div
            className="p-1.5 rounded-lg text-white"
            style={{ backgroundColor: `${char.accentColor}20` }}
          >
            <Icon className="w-4 h-4" style={{ color: char.accentColor }} />
          </div>
          <span className="text-xs lg:text-sm font-bold text-slate-500">
            {char.role}
          </span>
        </div>

        <h3 className="text-xl lg:text-3xl font-black text-slate-800 mb-2">
          {char.name}
        </h3>

        {/* الوصف مع حركة انسيابية */}
        <AnimatePresence>
          {isHovered ? (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="text-xs lg:text-2xl text-slate-600 leading-relaxed font-medium overflow-hidden"
            >
              {char.description}
            </motion.p>
          ) : (
            <p className="text-xs lg:text-sm text-slate-400 font-medium line-clamp-2 leading-relaxed">
              {char.description}
            </p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
