import { memo } from "react";
import HeroImage from "../assets/HeroImg.webp";
import BrandSection from "../components/BrandSection";
import Button from "../components/Button";
import About from "./About";

function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4">

      {/* HERO SECTION */}
      <section className="grid md:grid-cols-2 gap-6 items-center py-6">

        {/* Left Content */}
        <div className="flex flex-col gap-4">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-tight">
            <span className="text-primary block">Esumakeover</span>
            Bridal Makeup, Party Makeup & Beauty Services
          </h1>

          <p className="text-gray-600 text-sm md:text-base max-w-md">
            From bridal makeup to party glam, our expert beauty services help you
            look confident and beautiful on your special day.
          </p>

          {/* CTA Button */}
          <Button />
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[400px] md:h-[450px] lg:h-[520px] overflow-hidden rounded-2xl">
          <img
            src={HeroImage}
            alt="Professional bridal makeup service by Esumakeover"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>

      </section>

      {/* ABOUT */}
      <section className="mt-12">
        <About />
      </section>

      {/* BRANDS */}
      <section className="mt-12">
        <BrandSection />
      </section>

    </main>
  );
}

export default memo(Home);