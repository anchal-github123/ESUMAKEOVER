import { memo, useMemo, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { services } from "../utils/Services";

function ServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Memoize category lookup
  const category = useMemo(
    () => services.find((item) => item.id === id),
    [id]
  );

  const handleBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const goToServices = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  if (!category) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold">Service not found 😢</h2>
        <button onClick={goToServices} className="mt-4 text-primary">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="py-6 max-w-7xl mx-auto px-4">

      {/* Back */}
      <button
        onClick={handleBack}
        className="mb-6 bg-primary text-white px-4 py-2 rounded-xl hover:opacity-90 transition"
      >
        ← Back
      </button>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">
        {category.category}
      </h1>

      {/* Image */}
      <div className="mb-10">
        <img
          src={category.image}
          alt={`${category.category} service`}
          className="w-full h-[350px] object-cover rounded-2xl"
          loading="lazy"
        />
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.services?.map((service) => (
          <ServiceItem key={service.id || service.name} service={service} />
        ))}
      </div>

    </section>
  );
}

export default memo(ServiceDetails);