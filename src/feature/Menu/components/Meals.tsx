import CardMeal from "@/components/UI/CardMeal";
import { Search } from "lucide-react";
import { MealProps } from "../types";

export default function Meals({
  filteredItems,
}: {
  filteredItems: MealProps[];
}) {
  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(
            ({
              id,
              isPopular,
              isSpicy,
              image,
              name,
              category,
              rating,
              description,
              price,
            }) => (
              <CardMeal
                key={id}
                isPopular={isPopular}
                isSpicy={isSpicy}
                image={image}
                name={name}
                category={category}
                rating={rating}
                description={description}
                price={price}
              />
            ),
          )}
        </div>
      ) : (
        <div className="text-center py-20 bg-white/50 border border-slate-200/60 rounded-3xl backdrop-blur-md">
          <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-700 mb-1">
            لم نجد أي وجبة تطابق بحثك
          </h3>
          <p className="text-slate-400 text-xs">
            جرب تغيير كلمة البحث أو اختيار قسم آخر من الأعلى.
          </p>
        </div>
      )}
    </section>
  );
}
