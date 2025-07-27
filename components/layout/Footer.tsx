import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer2: React.FC = () => {
  return (
    <footer className="bg-[#222222] text-[#cacaca]   text-[16px] leading-[26px] ">
      {/* Top Divider */}
      <div className="w-full h-7.25 bg-[#34967C]"></div>

      <div className="max-w-[1608px] mx-auto px-6.5 pt-6.5 md:pt-11 lg:pt-9 pb-13">
        <div className="mx-auto grid grid-cols-1 xl:grid-cols-2  gap-8 md:gap-17.5 xl:justify-between   xl:w-full">
          <div className="max-w-161">
            <Image
              src="/assets/svg/ALX-LOGO.svg"
              alt="LOGO"
              width="58"
              height="30"
            />

            <p className="mt-9.5 md:mt-6.5 font-medium leading-5 md:leading-6.5">
              ALX is a platform where travelers can discover and book unique,
              comfortable, and affordable lodging options worldwide. From cozy
              city apartments and tranquil countryside retreats to exotic
              beachside villas, ALX connects you with the perfect place to stay
              for any trip.
            </p>
          </div>

          <div className="grid grid-cols-2 auto-cols-min md:grid-cols-3  px-5.5 md:px-0">
            {" "}
            {/* Navigation Sections */}
            {[
              {
                title: "Explore",
                links: [
                  "Apartments in Dubai",
                  "Hotels in New York",
                  "Villa in Spain",
                  "Mansion in Indonesia",
                ],
              },
              {
                title: "Company",
                links: ["About us", "Blog", "Career", "Customers", "Brand"],
              },
              {
                title: "Help",
                links: ["Support", "Cancel booking", "Refunds Process"],
              },
            ].map((section, idx) => (
              <div
                key={idx}
                className="leading-normal flex flex-col gap-4.5 md:gap-7.5"
              >
                <h3 className="font-semibold md:text-[25px]">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-[9px]">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href="#"
                        className="text-[12px] md:text-[16px] font-medium hover:underline"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-[100px] md:mt-14 xl:mt-21.5  mb-8 md:mb-11 xl:mb-4 border-t border-white opacity-10" />

        {/* Bottom Info */}
        <div className="flex flex-col xl:flex-row xl:justify-between items-center gap-8 md:gap-9 px-5.5 text-center font-medium text-[12px] md:text-[16px]">
          <p>
            Some hotel requires you to cancel more than 24 hours before
            check-in. Details{" "}
            <Link href="#" className="text-[#34967c] underline">
              here
            </Link>
            .
          </p>

          <div className="flex flex-wrap justify-center gap-6 ">
            {[
              "Terms of Service",
              "Policy service",
              "Cookies Policy",
              "Partners",
            ].map((item, idx) => (
              <Link key={idx} href="#" className="font-medium hover:underline">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
