export default function ManuIcon({
  toggle,
  openMenu,
}: {
  toggle: () => void;
  openMenu: boolean;
}) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle Menu"
      className="relative z-70 flex flex-col justify-center items-center w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors lg:hidden focus:outline-none"
    >
      <span
        className={`h-0.5 w-5 bg-slate-900 rounded-full transition-all duration-300 ease-in-out ${
          openMenu ? "rotate-45 translate-y-0.75" : "-translate-y-1"
        }`}
      />

      <span
        className={`h-0.5 w-5 bg-slate-900 rounded-full transition-all duration-300 ease-in-out ${
          openMenu ? "opacity-0" : "opacity-100"
        }`}
      />

      <span
        className={`h-0.5 w-5 bg-slate-900 rounded-full transition-all duration-300 ease-in-out ${
          openMenu ? "-rotate-45 -translate-y-0.75" : "translate-y-1"
        }`}
      />
    </button>
  );
}
