import { useState } from "react";
interface Branch {
  id: number;
  name: string;
  city: string;
  address: string;
  phone: string;
  hours: string;
  status: "مفتوح الان" | "مغلق";
  mapUrl: string;
  features: string[];
}

const cities = ["الكل", "القاهرة", "الجيزة", "بني سويف"];

const branches: Branch[] = [
  {
    id: 1,
    name: "فرع مدينة نصر",
    city: "القاهرة",
    address: "شارع عباس العقاد، بجوار الحديقة الدولية",
    phone: "01012345678",
    hours: "10:00 ص - 02:00 ص",
    status: "مفتوح الان",
    mapUrl: "https://maps.google.com",
    features: ["توصيل سريع", "صالة طعام", "خدمة السيارة (Drive-thru)"],
  },
  {
    id: 2,
    name: "فرع التجمع الخامس",
    city: "القاهرة",
    address: "شارع التسعين الشمالي، داون تاون مول",
    phone: "01087654321",
    hours: "11:00 ص - 03:00 ص",
    status: "مفتوح الان",
    mapUrl: "https://maps.google.com",
    features: ["توصيل سريع", "منطقة أطفال", "صالة طعام مكيفة"],
  },
  {
    id: 3,
    name: "فرع الشيخ زايد",
    city: "الجيزة",
    address: "وصلة دهشور، أركان مول",
    phone: "01112223334",
    hours: "10:00 ص - 02:00 ص",
    status: "مفتوح الان",
    mapUrl: "https://maps.google.com",
    features: ["توصيل سريع", "جلسات خارجية", "Valet Parking"],
  },
  {
    id: 4,
    name: "فرع بني سويف الرئيسية",
    city: "بني سويف",
    address: "ش الكورنيش، بجوار البنك الأهلي المصري",
    phone: "01234567890",
    hours: "10:00 ص - 01:00 ص",
    status: "مفتوح الان",
    mapUrl: "https://maps.google.com",
    features: ["توصيل سريع", "صالة عائلية", "تيك أواي"],
  },
];

export default function useController() {
  const [selectedCity, setSelectedCity] = useState("الكل");
    const [searchQuery, setSearchQuery] = useState("");
  
    const filteredBranches = branches.filter((branch) => {
      const matchesCity = selectedCity === "الكل" || branch.city === selectedCity;
  
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        branch.name.toLowerCase().includes(query) ||
        branch.address.toLowerCase().includes(query);
  
      return matchesCity && matchesSearch;
    });
  
    return {
      selectedCity,
      setSelectedCity,
      searchQuery,
      setSearchQuery,
      filteredBranches,
      cities
    };
}
