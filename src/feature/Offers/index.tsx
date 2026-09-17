"use client";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";

import GridOffers from "./components/GridOffers";
import Banner from "../Home/components/Banner";
import useController from "./hooks/useController";
import Alert from "@/components/UI/Alert";
import { Check } from "lucide-react";

export default function OffersPage() {
  const {
    copiedCode,
    addedOffer,
    copyToClipboard,
    handleAddOffer,
    offersList,
  } = useController();

  return (
    <div className="min-h-screen pt-12 bg-slate-50 text-slate-800 font-sans dir-rtl relative overflow-hidden">
      {/* خلفيات ضوئية ناعمة */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#F1531D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* الهيدر والعنوان الرئيسي */}
      <Header />

      {/* بنر العرض اليومي الخاطف (Flash Deal) */}
      <Banner />

      {/* شبكة العروض */}
      <GridOffers
        offersList={offersList}
        copiedCode={copiedCode}
        copyToClipboard={copyToClipboard}
        handleAddOffer={handleAddOffer}
      />

      {/* إشعار إضافة العرض للسلة */}
      <AnimatePresence>
        {addedOffer && (
          <Alert
            message="تم إضافة العرض إلى سلة طلباتك بنجاح!"
            icon={<Check className="w-4 h-4 text-emerald-400" />}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
