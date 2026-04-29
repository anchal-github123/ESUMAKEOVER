import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { services } from "../utils/Services";
import { ServiceCard } from "./ServiceCard";

function Services() {
  const navigate = useNavigate();

  const handleNavigate = useCallback((id) => {
    navigate(`/services/${id}`);
  }, [navigate]);

  return (
    <section className="services font-heading px-4 py-8">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Our Services
      </h1>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services?.length > 0 ? (
          services.map((cat) => (
            <ServiceCard
              key={cat.id}
              cat={cat}
              onNavigate={handleNavigate}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No services available right now.
          </p>
        )}
      </div>

    </section>
  );
}

export default memo(Services);