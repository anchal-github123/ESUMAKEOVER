import { useNavigate } from "react-router-dom";
import { services } from "../utils/Services";
import { ServiceCard } from "./ServiceCard";
import { memo } from "react";

const Services = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/services/${id}`);
  };

  return (
    <div className="services font-heading">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Our Services
      </h1>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((cat) => (
          <ServiceCard key={cat.id} cat={cat} onNavigate={handleNavigate} />
        ))}
      </div>
    </div>
  );
};

export default Services;
