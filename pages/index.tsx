import { PROPERTYLISTINGSAMPLE } from "@/constants";
import PropertyCard from "@/components/common/PropertyCard";
import Pill from "@/components/common/Pill";
import { useState } from "react";

const filters = ["Luxury Villa", "Mountain View", "Beachfront", "City Center", "Self Checkin"];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProperties = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter((p) => p.category.includes(activeFilter))
    : PROPERTYLISTINGSAMPLE;

  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-64 flex flex-col justify-center items-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('https://example.com/hero.jpg')" }}
      >
        <h1 className="text-3xl font-bold">Find your favorite place here!</h1>
        <p>The best prices for over 2 million properties worldwide.</p>
      </section>

      {/* Filter Section */}
      <section className="p-4 flex space-x-2 overflow-x-auto">
        {filters.map((filter) => (
          <Pill key={filter} label={filter} onClick={() => setActiveFilter(filter)} />
        ))}
        <Pill label="All" onClick={() => setActiveFilter(null)} />
      </section>

      {/* Listing Section */}
      <section className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.name} {...property} />
        ))}
      </section>
    </div>
  );
}
