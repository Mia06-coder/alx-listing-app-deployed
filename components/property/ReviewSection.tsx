import { Review } from "@/interfaces";
import Image from "next/image";

const ReviewsSection: React.FC<{ reviews: Review[]; rating: number }> = ({
  reviews,
  rating,
}) => {
  return (
    <>
      <div className="mt-12 mb-24 pt-8 pb-12 border-t border-b border-[var(--border-custom)]">
        {/* Header for the reviews section */}
        <div
          className="flex items-center gap-1.5 text-2xl font-bold"
          role="img"
          aria-label={`Rated ${rating} out of 5 stars`}
        >
          <Image
            src="/assets/svg/icons/star.svg"
            alt="Rating star"
            width="22"
            height="22"
            className="w-auto h-auto"
          />
          <span>{rating}</span>
          <span className="text-gray-400">(345 reviews)</span>
        </div>

        {/* Reviews list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10 mt-15">
          {reviews?.map((review, index) => (
            <div key={index} className="space-y-4">
              {/*Reviewer info */}
              <div className="flex items-center gap-3">
                <Image
                  src={review.avatar || "/assets/images/svg/profile.png"}
                  width={76}
                  height={76}
                  alt={review.name}
                  className="rounded-full"
                />
                <div className="flex flex-col font-semibold text-2xl">
                  {review.name}
                  <span className="font-medium text-xl text-gray-500">
                    {review.memberSince}
                  </span>
                </div>
              </div>

              {/* Review date and trip type */}
              <div className="flex items-center gap-3">
                <p className="font-semibold">{review.date}</p>
                <p className="w-1 h-1 rounded-full bg-[#6C6C6C]"></p>
                <p className="text-gray-500 font-medium">{review.tripType}</p>
              </div>

              {/* Review comment */}
              <p className="font-medium">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReviewsSection;
