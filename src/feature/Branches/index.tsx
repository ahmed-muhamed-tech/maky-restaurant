"use client";

import Header from "./components/Header";
import Branches from "./components/Branches";
import useController from "./hooks/useController";

export default function BranchesPage() {
  const {
    selectedCity,
    setSelectedCity,
    searchQuery,
    setSearchQuery,
    filteredBranches,
    cities,
  } = useController();

  return (
    <div className="min-h-screen bg-slate-50 pt-12 text-slate-800 font-sans dir-rtl relative overflow-hidden pb-20">
      {/* خلفيات ضوئية ناعمة */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#F1531D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* الهيدر العلوي */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cities={cities}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />

      {/* قائمة الفروع */}
      <Branches filteredBranches={filteredBranches} />
    </div>
  );
}
