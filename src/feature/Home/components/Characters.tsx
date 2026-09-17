"use client";

import { useState } from "react";
import { Sparkles, Shield, Zap, Flame } from "lucide-react";
import ContainerSection from "@/components/ContainerSection";
import CardCharacter from "./CardCharacter";

interface Character {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  icon: typeof Sparkles;
  accentColor: string;
}

const characters: Character[] = [
  {
    id: 1,
    name: "ماكي المبتكر",
    role: "الشيف الرئيسي",
    description:
      "عقل المطبخ والمبتكر للخلطات السرية. يمتلك خبرة 10 سنوات في ابتكار أطعمة البرجر المقرمش.",
    image: "/char_1.png",
    icon: Flame,
    accentColor: "#F1531D",
  },
  {
    id: 2,
    name: "كابتن سبايسي",
    role: "خبير الصوصات",
    description:
      "مسؤول عن درجة الحرارة والنكهات القوية. محترف في صناعة بركان الشيدر وصوص الهلابينو.",
    image: "/char_2.png",
    icon: Zap,
    accentColor: "#E11D48",
  },
  {
    id: 3,
    name: "سريع الصاروخ",
    role: "قائد التوصيل",
    description:
      "يضمن وصول طلبك ساخناً وطازجاً في وقت قياسي. يعرف كل اختصارات المدينة.",
    image: "/char_3.png",
    icon: Shield,
    accentColor: "#10B981",
  },
  {
    id: 4,
    name: "جودة القمة",
    role: "مسؤول الجودة",
    description:
      "يشرف على اختيار أفضل مكونات الدجاج والخضار الطازج يومياً لضمان أعلى معايير.",
    image: "/char_4.png",
    icon: Sparkles,
    accentColor: "#8B5CF6",
  },
  {
    id: 5,
    name: "جودة القمة",
    role: "مسؤول الجودة",
    description:
      "يشرف على اختيار أفضل مكونات الدجاج والخضار الطازج يومياً لضمان أعلى معايير.",
    image: "/char_5.png",
    icon: Sparkles,
    accentColor: "#8B5CF6",
  },
];

export default function CharactersSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden">
      {/* خلفية ضوئية ناعمة */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-orange-300/10 rounded-full blur-3xl pointer-events-none" />

      <ContainerSection>
        {/* الهيدر */}
        <div className="text-center relative z-10">
          <span className="bg-primary/10 border border-primary/20 text-primary text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider inline-block mb-3 shadow-sm">
            فريق العمل ✨
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight mb-4">
            تعرّف على شخصيات MAKY
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
            حرك الماوس على أي شخصية للتركيز عليها واكتشاف دورها السرّي في إعداد
            وجبتك!
          </p>
        </div>

        <div className="flex mt-12  flex-col  gap-8 lg:gap-0 lg:flex-row mb-8 justify-between items-center">
          <CardCharacter
            char={characters[0]}
            isHovered={false}
            isBlurred={false}
            setHoveredId={setHoveredId}
            Icon={characters[0].icon}
          />
          <div></div>

          <CardCharacter
            char={characters[1]}
            isHovered={false}
            isBlurred={false}
            setHoveredId={setHoveredId}
            Icon={characters[1].icon}
          />
        </div>

        <div className="flex justify-center mb-8 items-center">
          <CardCharacter
            char={characters[2]}
            isHovered={false}
            isBlurred={false}
            setHoveredId={setHoveredId}
            Icon={characters[2].icon}
          />
        </div>

        <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between items-center">
          <CardCharacter
            char={characters[3]}
            isHovered={false}
            isBlurred={false}
            setHoveredId={setHoveredId}
            Icon={characters[3].icon}
          />
          <div></div>

          <CardCharacter
            char={characters[4]}
            isHovered={false}
            isBlurred={false}
            setHoveredId={setHoveredId}
            Icon={characters[4].icon}
          />
        </div>
      </ContainerSection>
    </section>
  );
}
