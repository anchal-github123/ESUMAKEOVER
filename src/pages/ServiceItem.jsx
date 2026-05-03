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
  <a
  href="tel:+916372294113"
  className="flex justify-center items-center w-full px-4 py-3 mt-2 mb-3 bg-primary hover:bg-tertiary text-white rounded-3xl md:text-xl"
>
   Call Now
</a>

      </div>
    </div>
  );

})