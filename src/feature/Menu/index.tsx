"use client";

import Alert from "@/components/UI/Alert";
import Header from "./components/Header";
import Meals from "./components/Meals";
import useController from "./hooks/useController";
import ContainerSection from "@/components/ContainerSection";
import { Check } from "lucide-react";

export default function MenuPage() {
  const {
    filteredItems,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    addedToast,
  } = useController();

  return (
    <div className="min-h-screen pt-12 bg-slate-50 text-slate-800 font-sans dir-rtl relative overflow-hidden">
    
      <ContainerSection>
        {/* الهيدر والعنوان الرئيسي */}
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* شبكة وجبات المنيو */}
        <Meals filteredItems={filteredItems} />

        {addedToast && (
          <Alert
            message="تم إضافة الوجبة إلى سلة طلباتك بنجاح!"
            icon={<Check className="w-4 h-4 text-emerald-400" />}
          />
        )}
      </ContainerSection>
    </div>
  );
}
