import { useParams, useNavigate } from "react-router-dom";
import { services } from "../utils/Services";

export default function Service_Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const category = services.find((item) => item.id === id);

  if (!category) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold">Service not found 😢</h2>
        <button
          onClick={() => navigate("/Services")}
          className="mt-4 text-primary"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="py-5 max-w-7xl mx-auto px-4">

      {/* Back */}
      <button
        onClick={() => navigate(-1)}

        className="mb-6 text-sm text-white p-3 rounded-2xl bg-primary hover:text-black text-[1.1rem] cursor-pointer"
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
          alt={category.category}
          className="w-full h-[350px] object-cover rounded-2xl"
        />
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {category.services.map((service, index) => {

          const isPopular = service.name === "HD"; // you can change logic

          return (
            <div
  key={index}
  className="relative bg-[#f8f6f6] rounded-3xl overflow-hidden border border-gray-200 hover:shadow-xl transition hover:scale-[1.02]"
>

  {/* Image */}
  {service.image && (
    <img
      src={service.image}
      alt={service.name}
      className="w-full h-[180px] object-cover"
    />
  )}

  <div className="p-6">

    {/* Popular Tag */}
    {isPopular && (
      <span className="absolute top-0 right-0 bg-yellow-500 text-white text-xs px-3 py-1 rounded-bl-2xl">
        ⭐ MOST POPULAR
      </span>
    )}

    {/* Title */}
    <p className="text-xs tracking-widest text-gray-500 uppercase mb-2">
      {service.name}
    </p>

    {/* Price */}
    {service.price && (
      <h2 className="text-3xl font-bold mb-4">
        ₹{service.price}
        <span className="text-sm text-gray-500 font-normal">
          {" "} / event
        </span>
      </h2>
    )}

    {/* Features */}
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

    {/* Button */}
    <button className="w-full border border-pink-500 text-primary py-3 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition cursor-pointer">
    
      BOOK NOW
    </button>

  </div>
</div>

          );
        })}
      </div>
    </div>



  );
};