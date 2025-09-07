import Head from "next/head";
import Button from "../components/common/Button";
import { FILTER_PILLS, HERO_IMAGE } from "@/constants";
import PropertyCard from "@/components/property/PropertyCard";
import Pill from "@/components/common/Pill";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { PropertyProps } from "@/interfaces";

export default function Home() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["All"]);

  const handleToggleFilter = (title: string) => {
    if (title === "All") {
      setSelectedFilters(["All"]);
    } else {
      setSelectedFilters((prev) => {
        const newFilters = prev.includes(title)
          ? prev.filter((f) => f !== title)
          : [...prev.filter((f) => f !== "All"), title];

        return newFilters.length === 0 ? ["All"] : newFilters;
      });
    }
  };

  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/properties`
        );
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <div className="pt-8 px-5 lg:px-10 xl:px-15 max-w-[1600px] m-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-9 gap-4">
          {/* === MOBILE: Filter Icon + Scrollable Pills === */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Filter Icon Only on Mobile */}
            <button
              className="flex items-center justify-center w-10 h-10 border border-[#e9e9e9] rounded-full"
              onClick={() => alert("Clicked Filter")}
            >
              <Image
                src="/assets/svg/icons/Filter.svg"
                alt=""
                width="20"
                height="20"
              />
            </button>

            {/* Scrollable Pills on Mobile */}
            <div className="flex gap-2.5 overflow-x-auto scrollbar-hide whitespace-nowrap w-full">
              {FILTER_PILLS.map((title) => (
                <Pill
                  key={title}
                  title={title}
                  selected={selectedFilters.includes(title)}
                  onClick={handleToggleFilter}
                />
              ))}
            </div>
          </div>

          {/* === TABLET AND UP: Pills Left, Filter + Sort Right === */}
          <div className="hidden md:flex w-full justify-between items-center">
            {/* Pills Left - restrict width or show few */}
            <div className="flex items-center gap-2.5 max-w-fit overflow-x-hidden whitespace-nowrap xl:hidden">
              {FILTER_PILLS.slice(0, 3).map((title) => (
                <Pill
                  key={title}
                  title={title}
                  selected={selectedFilters.includes(title)}
                  onClick={handleToggleFilter}
                />
              ))}
              {/* Dropdown pill to show more */}
              <div className="relative xl:hidden">
                <button
                  className="p-4  text-sm border border-[#e9e9e9] rounded-full"
                  onClick={() => alert("Show more pills")}
                >
                  &gt;
                </button>
              </div>
            </div>

            <div className="hidden xl:flex items-center gap-2.5 max-w-fit overflow-x-hidden flex-wrap">
              {FILTER_PILLS.map((title) => (
                <Pill
                  key={title}
                  title={title}
                  selected={selectedFilters.includes(title)}
                  onClick={handleToggleFilter}
                />
              ))}
            </div>
            {/* Right Side: Filter + Sort Buttons */}
            <div className="flex flex-nowrap gap-4 items-center">
              {/* Filter Button */}
              <Pill
                title="Filter"
                icon={
                  <Image
                    src="/assets/svg/icons/Filter.svg"
                    alt=""
                    width="20"
                    height="20"
                  />
                }
                onClick={() => alert("Clicked Filter")}
              />

              {/* Sort Button */}

              <button
                className="text-[13px]/[1.5] md:text-[15px] lg:text-[19px] text-nowrap px-6 py-2.5 rounded-4xl border text-[#8C8C8C] border-[#e9e9e9] font-semibold transition flex flex-row gap-2 items-center"
                onClick={() => alert("Clicked Sort")}
              >
                Sort by: <span className="text-[#161117]">Highest Price</span>
              </button>
            </div>
          </div>

          {/* === DESKTOP ONLY: Pills floated to right (optional override) === */}
          <div className="hidden  w-full gap-2.5">
            {/* You can show full pills list or adjust here */}
          </div>
        </div>

        {/* HERO */}
        <section
          className={`relative bg-cover bg-center w-full h-75 lg:h-105 xl:h-120 flex items-center justify-center text-white px-4 rounded-xl md:rounded-[27px]
          `}
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        >
          <div className=" text-center w-2/3 text-white">
            <h1 className="text-[28px]/7.5 font-semibold md:text-[40px]/13 lg:text-[68px]/18  xl:text-[94px]/25 text-shadow-[0_4_19_rgb(0_0_0_/_0.25)]">
              Find your favorite place here!
            </h1>
            <p className="text-[8px]/[1.5] font-medium md:text-[18px]/[1.5] lg:text-[24px]/[1.5] text-shadow-[0_4_7_rgb(0_0_0_/_0.25)">
              The best prices for over 2 million properties worldwide.
            </p>
          </div>
        </section>

        <div className="py-8 px-0 grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 ">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="flex flex-col gap-4.5 items-center mt-16 mb-16">
          {" "}
          <Button
            label="Book Now"
            onClick={() => alert("Clicked!")}
            style="bg-[#161117] text-white"
          />
          <p className="font-medium text-[20px]/[1.5] text-black">
            Click to see more listings
          </p>
        </div>
      </div>
    </>
  );
}
