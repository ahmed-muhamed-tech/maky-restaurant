"use client";
import MenuIcon from "@/components/UI/ManuIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "../UI/Button";
import { ShoppingCart } from "lucide-react";
import ContainerSection from "../ContainerSection";

const navLinks = [
  {
    id: 1,
    title: "الرئيسية",
    href: "/",
  },
  {
    id: 2,
    title: "المنيو",
    href: "/menu",
  },
  {
    id: 3,
    title: "العروض",
    href: "/offers",
  },
  {
    id: 4,
    title: "فروعنا",
    href: "/branches",
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const path = usePathname();
  return (
    <>
      <header className="fixed top-0 w-full left-0 right-0 h-24 bg-white/20 backdrop-blur-md border-b border-slate-100 z-50">
       

       <ContainerSection>

        <div className=" flex items-center justify-between ">
           <div className="flex items-center gap-4">
          <img src="/maky_logo.webp" alt="maky logo" className="w-12 h-12 " />
          <span className="text-3xl font-extrabold tracking-tight text-slate-900">
            MAKY
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-10 text-base font-bold text-slate-600">
          {navLinks.map(({ id, href, title }) => (
            <Link
              href={href}
              key={id}
              className={`hover:text-[#F1531D] transition-colors ${path === href && "text-[#F1531D]"}`}
            >
              {title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            title="السلة (3)"
            iconLeft={<ShoppingCart className="w-5 h-5" />}
            color="bg-slate-900 hover:bg-slate-800 text-white "
            className=" py-1 px-2 rounded-xl text-sm lg:text-lg items-center flex  gap-2"
          />
          <MenuIcon openMenu={openMenu} toggle={() => setOpenMenu(!openMenu)} />
        </div>
        </div>
       </ContainerSection>
      </header>

      {openMenu && (
        <nav className="fixed inset-0 backdrop-blur-2xl flex flex-col justify-center items-center gap-2 text-2xl z-60 lg:hidden">
          {navLinks.map(({ id, href, title }) => (
            <Link
              onClick={() => setOpenMenu(false)}
              href={href}
              key={id}
              className={`hover:text-[#F1531D] transition-colors ${path === href && "text-[#F1531D]"} bg-white/70 rounded-xl w-54 text-center py-2`}
            >
              {title}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
