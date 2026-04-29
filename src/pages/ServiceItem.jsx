import { memo } from "react";

export const ServiceItem = memo(({ service }) => {
    const isPopular = service.name === "HD";

  return (
    <div className="relative bg-[#f8f6f6] rounded-3xl overflow-hidden border border-gray-200 hover:shadow-xl transition hover:scale-[1.02]">

      {service.image && (
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-[180px] object-cover"
          loading="lazy"
        />
      )}

      {isPopular && (
        <span className="absolute top-0 right-0 bg-yellow-500 text-white text-xs px-3 py-1 rounded-bl-2xl">
          ⭐ MOST POPULAR
        </span>
      )}

      <div className="p-6">
        <p className="text-xs tracking-widest text-gray-500 uppercase mb-2">
          {service.name}
        </p>

        {service.price && (
          <h2 className="text-3xl font-bold mb-4">
            ₹{service.price}
            <span className="text-sm text-gray-500"> / event</span>
          </h2>
        )}

        {service.includes && (
          <div className="space-y-3 mb-6">
            {service.includes.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-primary">✔</span>
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        )}

        <button className="w-full border border-pink-500 text-primary py-3 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition">
          BOOK NOW
        </button>
      </div>
    </div>
  );

})