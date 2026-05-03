import { memo, useCallback } from "react";

export const ServiceCard = memo(function ServiceCard({ cat, onNavigate }) {

  const handleNavigate = useCallback(() => {
    onNavigate(cat.id);
  }, [onNavigate, cat.id]);

  const handleButtonClick = useCallback((e) => {
    e.stopPropagation();
    onNavigate(cat.id);
  }, [onNavigate, cat.id]);

  return (
    <article
      className="group rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
      onClick={handleNavigate}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleNavigate();
      }}
    >
      {/* Image */}
      <div className="overflow-hidden relative">
        <img
          src={cat.image}
          alt={`${cat.category} service`}
          loading="lazy"
          decoding="async"
          className="h-64 w-full object-cover bg-gray-100 group-hover:scale-110 transition duration-500"
          onError={(e) => {
            e.currentTarget.src = "/fallback.jpg";
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-lg font-semibold mb-3">
          {cat.category}
        </h2>
        <button
  onClick={handleButtonClick}
  className="w-full flex items-center justify-center gap-2 
  bg-primary hover:bg-tertiary text-white 
  py-3 px-5 rounded-xl 
  text-base font-semibold tracking-wide 
  shadow-md hover:shadow-lg 
  transform hover:-translate-y-0.5 
  transition-all duration-300 
  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer"
>
  <span>View Services</span>
  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</button>

       
      </div>
    </article>
  );
});