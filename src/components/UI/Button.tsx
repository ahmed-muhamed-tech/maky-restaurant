export default function Button({
  title,
  iconRight,
  iconLeft,
  color,
  className
}: {
  title: string;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <button
      className={`${color ? color : "bg-[#F1531D] hover:bg-[#d44315] shadow-[#F1531D]/30  text-white "} ${className ? className : "active:scale-95 font-bold rounded-2xl px-8 py-3.5 shadow-lg transition-all flex items-center gap-2.5"} `}
     
    >
      {iconRight}
      <span>{title}</span>
      {iconLeft}
    </button>
  );
}
