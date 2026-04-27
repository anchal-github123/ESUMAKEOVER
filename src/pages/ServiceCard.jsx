import { memo } from "react";
export const ServiceCard = memo(({ cat, onNavigate }) => {
  return (
    <div
      className="group rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer"
      onClick={() => onNavigate(cat.id)}
    >
      {/* Image */}
      <div className="overflow-hidden relative">
        <img
          src={cat.image}
          alt={cat.category}
          loading="lazy"
          className="h-64 w-full object-cover bg-gray-100 group-hover:scale-110 transition duration-500"
          onError={(e) => {
            e.target.src = "/fallback.jpg"; // optional fallback image
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-lg font-semibold mb-3">
          {cat.category}
        </h2>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(cat.id);
          }}
          className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-tertiary text-white py-2 rounded-lg text-lg font-medium transition"
        >
          View Services →
        </button>
      </div>
    </div>
  );
});