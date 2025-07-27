import React from "react";
import { PropertyProps } from "@/interfaces";
import Image from "next/image";

interface Props {
  property: PropertyProps;
}

const PropertyCard: React.FC<Props> = ({ property }) => {
  return (
    <div className="bg-white  overflow-hidden flex flex-col gap-4.5 text-[#161117] ">
      <Image
        src={property.image}
        alt={property.name}
        width="390"
        height="262"
        className="w-full h-auto object-cover rounded-[17px]"
      />

      {/* Tags */}
      <div className="flex flex-wrap gap-2.5 ">
        {property.category.map((tag, index) => (
          <span
            key={index}
            className="text-[13px]/[1.5] bg-[#f9f9f9]  px-3.5 py-1.5  rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Name + Rating */}
      <div className="flex justify-between ">
        <div>
          <h2 className="font-semibold text-[22px]/[1.5]">{property.name}</h2>
          <p className="text-[18px]/[1.5] md:text[20px]  font-medium ">
            {property.address.city}, {property.address.country}
          </p>
        </div>
        <div className="flex items-start gap-1.5">
          <Image
            src="/assets/svg/icons/star.svg"
            alt="Rating star"
            width="18"
            height="18"
            className="w-auto h-auto"
          />{" "}
          <span className="text-[18px]/[1.5] md:text[20px] lg:text-[17px] font-medium">
            {property.rating}
          </span>
        </div>
      </div>

      {/* Offers + Price */}
      <div className="flex justify-between">
        {/* Offers */}
        <div className="flex gap-3  flex-wrap border border-[#E9E9E9] px-3 py-2 md:px-6 md:py-2.5 rounded-full w-fit">
          <div className="flex items-center gap-2  text-[14px]/[1.5] md:text-[16px] lg:text-[13px] font-medium">
            <Image
              src="\assets\svg\icons\bed 1.svg"
              alt=""
              width="20"
              height="20"
              className="md:w-6 md:h-6"
            />{" "}
            {property.offers.bed}
          </div>
          <div className="flex items-center gap-2  text-[14px]/[1.5] md:text-[16px] lg:text-[13px] font-medium">
            <Image
              src="\assets\svg\icons\bathtub 1.svg"
              alt=""
              width="20"
              height="20"
              className="md:w-6 md:h-6"
            />{" "}
            {property.offers.shower}
          </div>
          <div className="flex items-center gap-2  text-[14px]/[1.5] md:text-[16px] lg:text-[13px] font-medium">
            <Image
              src="\assets\svg\icons\people 1.svg"
              alt=""
              width="20"
              height="20"
              className="md:w-6 md:h-6"
            />{" "}
            {property.offers.occupants}
          </div>
        </div>

        {/* Price */}
        <div className="text-right font-semibold text-[22px]/[1.5] md:text-[26px] lg:text-[22px]">
          ${property.price}
          <span className="text-[14px]/[1.5] md:text-[16px] lg:text-[14px]">
            /n
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
