import { categoryAmenityMap } from "@/constants";
import { PropertyProps } from "@/interfaces/index";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const PropertyDetail: React.FC<{
  property: PropertyProps;
  booking: React.ReactNode;
  reviews: React.ReactNode;
}> = ({ property, booking, reviews }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div>
      <div className="flex gap-3 items-start justify-between md:justify-end mt-2">
        {/* Mobile Return Link */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold md:hidden"
        >
          <Image
            src="/assets/svg/icons/arrows/arrow_left.svg"
            alt="Rating star"
            width="24"
            height="24"
          />
          <span>Return</span>
        </Link>

        {/* Fav and share buttons */}
        <div className="flex gap-10 items-center md:gap-5">
          <div className="flex items-center gap-2 md:px-5 md:py-2 md:border md:border-[var(--border-custom)] md:rounded-full font-semibold">
            <Image
              src="/assets/svg/icons/Fav.svg"
              alt="Add to Favorites"
              width="24"
              height="24"
            />
            <span className="hidden md:block">Save</span>
          </div>
          <div className="flex items-center gap-2 md:px-5 md:py-2 md:border md:border-[var(--border-custom)] md:rounded-full text-[16.2px]/[1.5] font-semibold">
            <Image
              src="/assets/svg/icons/Share.svg"
              alt="Share Property"
              width="20"
              height="20"
            />
            <span className="hidden md:block">Share</span>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid md:grid-cols-2 gap-2 mt-4">
        {/* Main Image on Left */}
        <div className="relative aspect-[4/3] lg:row-span-2 w-full">
          <Image
            src={property.image}
            alt={property.name}
            fill
            className="object-cover rounded-3xl md:rounded-tr-none md:rounded-br-none"
          />
          <button className="absolute md:hidden bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
            1 / 6
          </button>
        </div>

        {/* Right Side Image Grid (Tablet and Up) */}
        <div className="hidden md:grid grid-rows-2 grid-cols-2 gap-2 aspect-[4/3] ]">
          {/* Top Right Full Width */}
          <div className="col-span-2 aspect-[8/3] relative w-full">
            <Image
              src={property.image}
              alt={property.name}
              fill
              className="object-cover rounded-tr-3xl"
            />
          </div>

          {/* Bottom Left */}
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={property.image}
              alt={property.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom Right with Button */}
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={property.image}
              alt={property.name}
              fill
              className="object-cover rounded-br-3xl"
            />
            <button
              className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur px-4 py-2 rounded-full border border-white text-white text-sm font-semibold whitespace-nowrap cursor-pointer"
              onClick={() => alert("More images coming soon!")}
            >
              Show all photos
            </button>
          </div>
        </div>
      </div>

      <h1 className=" text-2xl lg:text-4xl font-bold mt-4">{property.name}</h1>

      <div className="flex flex-wrap gap-3 items-center mt-2 text-xs lg:text-lg">
        {/* Rating and Reviews */}
        <div
          className="flex items-center gap-1.5 font-medium"
          role="img"
          aria-label={`Rated ${property.rating} out of 5 stars`}
        >
          <Image
            src="/assets/svg/icons/star.svg"
            alt="Rating star"
            width="12"
            height="12"
            className="h-full lg:w-5 lg:h-5"
          />
          <span>{property.rating}</span>
          <span className="text-[#929292]">(345 reviews)</span>
        </div>

        {/* Address */}
        <div className="flex items-center gap-1.5 font-medium">
          <Image
            src="/assets/svg/icons/Map_Point.svg"
            alt="Map Point"
            width="12"
            height="12"
            className="lg:w-5 lg:h-5"
          />
          <span>
            {property.address.state}, {property.address.city},{" "}
            {property.address.country}
          </span>
        </div>

        {/* Host Information */}
        <div className="flex items-center gap-1.5 font-medium">
          <Image
            src="/assets/svg/icons/profile_dark.svg"
            alt="Host Avatar"
            width="12"
            height="12"
            className="lg:w-5 lg:h-5"
          />
          <span>Mainstream </span>
        </div>
      </div>

      {/* Offers */}
      <div className="flex gap-2 flex-wrap w-fit mt-5">
        <div className="flex items-center gap-2 text-xs md:text-sm font-medium border border-[var(--border-custom)] px-4 py-2 md:px-6 md:py-2.5 rounded-full">
          <Image
            src="\assets\svg\icons\bed.svg"
            alt=""
            width="16"
            height="16"
            className="md:w-5 md:h-5"
          />{" "}
          {property.offers.bed} Bedrooms
        </div>
        <div className="flex items-center gap-2 text-xs md:text-sm font-medium border border-[var(--border-custom)] px-4 py-2 md:px-6 md:py-2.5 rounded-full">
          <Image
            src="\assets\svg\icons\bathtub.svg"
            alt=""
            width="16"
            height="16"
            className="md:w-5 md:h-5"
          />{" "}
          {property.offers.shower} Bathroom
        </div>
        <div className="flex items-center gap-2 text-xs md:text-sm font-medium border border-[var(--border-custom)] px-4 py-2 md:px-6 md:py-2.5 rounded-full">
          <Image
            src="\assets\svg\icons\people.svg"
            alt=""
            width="16"
            height="16"
            className="md:w-5 md:h-5"
          />{" "}
          {property.offers.occupants} guests
        </div>
      </div>

      <div className="lg:flex lg:items-start mt-10 gap-8">
        {/* Description and Tabs */}
        <div className="lg:w-3/5">
          {/* Tabs */}
          <Tabs>
            <div className="flex justify-between items-center border-b lg:border-t border-[var(--border-custom)] text-gray-400 mt-6 pt-5 mb-10 overflow-x-auto scrollbar-hide">
              <TabList className="flex">
                {["Description", "What we offer", "Reviews", "About host"].map(
                  (tab) => (
                    <Tab
                      key={tab}
                      className="py-2 px-4 cursor-pointer  font-medium focus:outline-none hover:text-[var(--color-primary)] transition-colors text-nowrap"
                      selectedClassName="border-b-3 border-[var(--color-primary)] text-[var(--color-primary)] "
                    >
                      {tab}
                    </Tab>
                  )
                )}
              </TabList>
              {/* Published Date */}
              <p className="min-w-max ml-10 whitespace-nowrap">
                Published July 01, 2024
              </p>
            </div>

            {/* Tab Panels */}
            {/* Description Tab */}
            <TabPanel>
              <p
                className={`text-[18px]/[35px] font-medium mb-3.5 ${
                  isExpanded ? "" : "line-clamp-8"
                }`}
              >
                {property.description}
              </p>
              {property.description.length > 0 && (
                <button
                  onClick={toggleExpand}
                  className="text-[var(--color-primary)] hover:underline text-[18px]/[1.5] font-medium flex items-center"
                >
                  {isExpanded ? "Show less" : "Read more"}
                  <Image
                    src="/assets/svg/icons/arrows/arrow_right.svg"
                    alt="Right arrow"
                    width={24}
                    height={24}
                    className="inline ml-1"
                  />
                </button>
              )}
            </TabPanel>

            {/* What we offer Tab */}
            <TabPanel>
              <p className="text-[18px]/[35px] font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora, molestiae blanditiis ad atque repellat deserunt. Fugiat
                autem similique, odit sunt hic ducimus velit sed facere aperiam
                quaerat dolores! Repudiandae, unde.
              </p>
            </TabPanel>

            {/* Reviews Tab */}
            <TabPanel>
              <p className="text-[18px]/[35px] font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae illo voluptatum sit. Eaque deleniti sunt quibusdam
                aspernatur aperiam fugit pariatur et illum! Provident ut impedit
                vero ducimus et labore. Impedit!
              </p>
            </TabPanel>

            {/* About Host Tab */}
            <TabPanel>
              <p className="text-[18px]/[35px] font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
                soluta ipsam exercitationem molestias ea, tempora iure voluptas
                eveniet consequuntur autem consequatur eligendi voluptatem quos
                laboriosam temporibus amet delectus asperiores alias!
              </p>
            </TabPanel>
          </Tabs>

          {/* Amenities */}
          <div className="mt-7 border-t border-t-[var(--border-custom)] pt-11">
            <h2 className="text-2xl font-semibold leading-[1.6]">
              What this place offers
            </h2>
            <p className=" mt-3 mb-4 md:mb-10">
              Each home is fully equipped to meet your needs, with ample space
              and privacy.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {property.category.map((key, index) => {
                const amenity = categoryAmenityMap[key];
                if (!amenity) return null; // skip if category isn't mapped

                return (
                  <li key={index} className="flex items-center space-x-3   ">
                    <Image
                      src={amenity.icon.src}
                      alt={amenity.icon.alt}
                      width={amenity.icon.width}
                      height={amenity.icon.height}
                    />
                    <span className="text-[22px]/[28.6px] font-medium ">
                      {amenity.label}
                    </span>
                  </li>
                );
              })}
            </ul>
            <button
              className={`${
                property.category.length > 5 ? "block" : "hidden"
              } border border-[var(--border-custom)] px-6 py-3 rounded-lg w-full mt-9`}
            >
              Show all amenities
            </button>
          </div>
          {/*Reviews*/}
          {reviews}
        </div>

        {/* Booking Section */}
        <div className="lg:w-2/5 mt-8 lg:mt-5 xl:w-full max-w-134 xl:ml-auto lg:sticky top-16">
          {booking}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
