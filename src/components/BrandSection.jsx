import aflairza from "../assets/Aflairza.webp";
import charlotte from "../assets/Charlotte Tilbury.webp";
import forever52 from "../assets/Forever52.webp";
import huda from "../assets/HUDA_BEAUTY.webp";
import mac from "../assets/MAC.webp";
import recode from "../assets/Record (1).webp";
export default function BrandSection() {

 const brands = [
  {
    name: "Aflairza",
    image: aflairza,
  },
  {
    name: "Charlotte Tilbury",
    image: charlotte,
  },
  {
    name: "Forever52",
    image: forever52,
  },
  {
    name: "Huda Beauty",
    image: huda,
  },
  {
    name: "MAC",
    image: mac,
  },
  {
    name: "Recode Studios",
    image: recode,
  },
];

  return (
    <div className="py-12 bg-[#fafafa]">
      
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Our Trusted Brands
      </h2>

      {/* Logos */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">

        {brands.map((brands, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition"
          >
            <img
              src={brands.image}
              alt={`brand-${index}`}
              className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
              loading="lazy"
            />
          </div>
        ))}

      </div>
    </div>
  );
}