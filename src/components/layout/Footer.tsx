"use client";

import Link from "next/link";
import { ChevronLeft, Flame, PhoneCall, Globe, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 px-6 md:px-12 border-t border-slate-200/80 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* العمود الأول: الهوية والوصف */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-100/80 rounded-xl flex items-center justify-center text-[#F1531D]">
                <Flame className="w-6 h-6 fill-current" />
              </div>
              <span className="text-2xl font-black text-slate-900 tracking-tight">
                MAKY
              </span>
            </div>
            <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6 max-w-sm">
              نقدم أفضل تجربة لتناول الدجاج المقرمش بمعايير عالمية وجودة لا
              تضاهى. نعتني بكل التفاصيل لنضمن لك وجبة مميزة دائماً.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-500 hover:text-[#F1531D] hover:border-[#F1531D]/40 hover:shadow-sm transition-all border border-slate-200/80"
              >
                <span className="font-extrabold text-xs">IG</span>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-500 hover:text-[#F1531D] hover:border-[#F1531D]/40 hover:shadow-sm transition-all border border-slate-200/80"
              >
                <span className="font-extrabold text-xs">FB</span>
              </a>
            </div>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div>
            <h4 className="text-base font-extrabold text-slate-900 mb-6">
              روابط سريعة
            </h4>
            <ul className="space-y-3 font-medium text-sm text-slate-500">
              <li>
                <Link
                  href="/menu"
                  className="hover:text-[#F1531D] transition-colors"
                >
                  المنيو
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#F1531D] transition-colors"
                >
                  عن ماكي
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-[#F1531D] transition-colors"
                >
                  الوظائف
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#F1531D] transition-colors"
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* العمود الثالث: السياسات والشروط */}
          <div>
            <h4 className="text-base font-extrabold text-slate-900 mb-6">
              السياسات والأحكام
            </h4>
            <ul className="space-y-3 font-medium text-sm text-slate-500">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#F1531D] transition-colors"
                >
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#F1531D] transition-colors"
                >
                  الشروط والأحكام
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="hover:text-[#F1531D] transition-colors"
                >
                  سياسة الاسترجاع
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-[#F1531D] transition-colors"
                >
                  الأسئلة الشائعة
                </Link>
              </li>
            </ul>
          </div>

          {/* العمود الرابع: الاتصال والنشرة البريدية */}
          <div>
            <h4 className="text-base font-extrabold text-slate-900 mb-6">
              اتصل بنا
            </h4>
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col gap-1 mb-6">
              <p className="text-slate-400 text-xs font-bold">الخط الساخن</p>
              <a
                href="tel:17893"
                className="text-[#F1531D] font-black text-2xl flex items-center justify-between"
              >
                <span>17893</span>
                <PhoneCall className="w-5 h-5" />
              </a>
            </div>

            <h5 className="text-xs font-bold text-slate-800 mb-3">
              النشرة البريدية
            </h5>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="w-full bg-white border border-slate-200/80 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#F1531D] transition-colors"
              />
              <button
                type="submit"
                className="bg-slate-900 text-white rounded-xl px-3 py-2 hover:bg-[#F1531D] transition-colors"
                aria-label="اشتراك"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* الشريط السفلي للحقوق والتطوير */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 font-medium text-xs">
          <div>© 2026 مطاعم ماكي. جميع الحقوق محفوظة.</div>

          {/* توقيع المطور بروابط معرض الأعمال */}
          <div className="flex  items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200/80 shadow-sm">
            <Code2 className="w-4 h-4 text-[#F1531D]" />
            <span>تم التطوير بواسطة</span>
            <a
              href="https://apex-flow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-slate-900 hover:text-[#F1531D] transition-colors flex items-center gap-1"
            >
              Apex Flow
              <Globe className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
