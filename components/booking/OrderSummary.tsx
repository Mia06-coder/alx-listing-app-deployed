import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const OrderSummary: React.FC<{ bookingDetails: any }> = ({
  bookingDetails,
}) => (
  <div className="bg-white p-6 shadow-md rounded-lg h-max">
    <h2 className="text-xl font-semibold">Review Order Details</h2>
    <div className="md:flex gap-4 items-center mt-4">
      <div className="relative w-32 h-32 rounded-md overflow-hidden">
        <Image
          src="/assets/images/listing-images/List_1.png"
          alt="Property"
          fill
          className="object-cover absolute"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
        <p className="text-sm text-gray-500">4.76 (345 reviews)</p>
        <p className="text-sm text-gray-500">
          {bookingDetails.startDate} • {bookingDetails.totalNights} Nights
        </p>
      </div>
    </div>

    {/* Price Breakdown */}
    <div className="mt-6">
      <div className="flex justify-between">
        <p>Booking Fee</p>
        <p>${bookingDetails.bookingFee}</p>
      </div>
      <div className="flex justify-between mt-2">
        <p>Subtotal</p>
        <p>${bookingDetails.price}</p>
      </div>
      <div className="flex justify-between mt-2 font-semibold">
        <p>Grand Total</p>
        <p>${bookingDetails.bookingFee + bookingDetails.price}</p>
      </div>
    </div>
  </div>
);

export default OrderSummary;
