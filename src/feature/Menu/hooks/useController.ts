import { useMemo, useState } from "react";

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  description: string;
  image: string;
  isSpicy?: boolean;
  isPopular?: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "ماكي دبل بيجان برجر",
    category: "وجبات البرجر",
    price: 185,
    rating: 4.9,
    description:
      "قطعتين دجاج مقرمش حار مع صوص الشيدر الذائب، خس طازج، وخيار مخلل في خبز البريوش الهش.",
    image: "/maky_logo.png",
    isSpicy: true,
    isPopular: true,
  },
  {
    id: 2,
    name: "وجبة السوبر ماكي 12 قطعة",
    category: "الدجاج المقرمش",
    price: 340,
    rating: 4.8,
    description:
      "12 قطعة دجاج كريسبي مع البطاطس المقلية الحجم العائلي، 3 صوصات من اختيارك وخبز ناعم.",
    image: "/char_maky_2.png",
    isPopular: true,
  },
  {
    id: 3,
    name: "ساندوتش كرانشي تشيكن",
    category: "الساندوتشات",
    price: 110,
    rating: 4.7,
    description:
      "صدر دجاج مقرمش ذهبي مع صوص ماكي الخاص، المايونيز بالثوم، والشرائح الطازجة.",
    image: "/maky_logo.png",
  },
  {
    id: 4,
    name: "بركان الشيدر والهلابينو",
    category: "الصوصات",
    price: 25,
    rating: 4.9,
    description:
      "جبنة شيدر غنية ومذابة مع قطع الهلابينو الحارة لإضافة نكهة قوية لوجبتك.",
    image: "/char_maky_2.png",
    isSpicy: true,
  },
  {
    id: 5,
    name: "وجبة ماكي كيدز",
    category: "وجبات البرجر",
    price: 95,
    rating: 4.6,
    description:
      "ساندوتش دجاج صغير مع بطاطس، عصير طازج، ولعبة هدايا من شخصيات ماكي.",
    image: "/maky_logo.png",
  },
  {
    id: 6,
    name: "عصير برتقال طازج",
    category: "المشروبات",
    price: 35,
    rating: 4.5,
    description: "برتقال طبيعي 100% بدون إضافات سكر، منعش مع الوجبات المقرمشة.",
    image: "/char_maky_2.png",
  },
];

export default function useController() {
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<{ item: MenuItem; quantity: number }[]>([]);
  const [addedToast, setAddedToast] = useState(false);

  // الفلترة الذكية بدون الحساسية لحالة الحروف
  const filteredItems = useMemo(() => {

    return menuItems.filter((item) => {
      const matchesCategory =
        selectedCategory === "الكل" || item.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
    
  }, [selectedCategory, searchQuery]);

  return {
    filteredItems,
    selectedCategory,
    searchQuery,
    setCart,
    addedToast,
    setSelectedCategory,
    setSearchQuery,
    setAddedToast,
  };
}
