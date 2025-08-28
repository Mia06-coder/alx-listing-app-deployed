import { useEffect, useState } from "react";

const BookingSection: React.FC<{ price: number; discount: string }> = ({
  price,
  discount,
}) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [nights, setNights] = useState(0);
  const [dateError, setDateError] = useState("");

  useEffect(() => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
      const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

      if (dayDiff <= 0) {
        setDateError(
          "⚠️ Invalid date range: Check-out must be after check-in."
        );
        setNights(0);
      } else {
        setDateError("");
        setNights(dayDiff);
      }
    }
  }, [checkIn, checkOut]);

  const totalBeforeDiscount = price * nights;
  const discount_ =
    discount !== "" ? (totalBeforeDiscount * parseFloat(discount)) / 100 : 0;
  const serviceFee = nights > 0 ? 33 : 0;
  const totalPayment = totalBeforeDiscount - discount_ + serviceFee;

  const formatPrice = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);

  return (
    <>
      {/* Booking Section */}
      <form
        className="p-6 shadow-md border border-[var(--border-custom)] rounded-xl h-fit w-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <h3 className="font-bold text-2xl xl:text-3xl border-b border-b-[var(--border-custom)] pb-4">
          {formatPrice(price)}
          <span className="font-medium text-sm xl:text-xl ml-3 text-gray-500">
            /night
          </span>
        </h3>

        {/*Check-in and Check-out */}
        <div className="mt-7">
          <label htmlFor="check-in" className="font-bold">
            Check in
          </label>
          <input
            type="date"
            id="check-in"
            name="check-in"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="border border-[var(--border-custom)] p-2 rounded-md w-full mt-2 text-gray-400"
            required
          />
        </div>

        <div className="mt-4">
          <label htmlFor="check-out" className="font-bold">
            Check out
          </label>
          <input
            type="date"
            id="check-out"
            name="check-out"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="border border-[var(--border-custom)] p-2 rounded-md w-full mt-2 text-gray-400"
            required
          />
        </div>
        {dateError && <p className="text-red-500 text-sm mt-2">{dateError}</p>}

        {/* Booking Summary */}
        {nights > 0 && (
          <div>
            <p className="flex justify-between mt-8 text-sm xl:text-lg text-gray-400 font-bold">
              {formatPrice(price)} x {nights} night{nights > 1 ? "s" : ""}{" "}
              <span className="text-[var(--color-secondary-dark)]">
                {formatPrice(totalBeforeDiscount)}
              </span>
            </p>

            {/* Discount */}
            {discount_ > 0 && (
              <p className="flex justify-between mt-4 text-sm xl:text-lg text-gray-400 font-bold">
                Weekly discounts{" "}
                <span className="text-[var(--color-secondary-dark)]">
                  -{formatPrice(discount_)}
                </span>
              </p>
            )}
            <p className="flex justify-between mt-4 text-sm xl:text-lg text-gray-400 font-bold">
              Service fee{" "}
              <span className="text-[var(--color-secondary-dark)]">
                {formatPrice(serviceFee)}
              </span>
            </p>
          </div>
        )}

        {/* Total Payment */}
        {nights > 0 && (
          <div>
            <p className="flex justify-between mt-10 text-sm xl:text-lg text-gray-400 font-bold border-t border-t-[var(--border-custom)] pt-2">
              Total payment{" "}
              <span className="text-[var(--color-primary)]">
                {formatPrice(totalPayment)}
              </span>
            </p>
          </div>
        )}

        {/* Reserve Button */}
        <button
          type="submit"
          disabled={nights === 0}
          className={`bg-[var(--color-primary)] text-white py-3 px-4 rounded-xl mt-8 w-full ${
            nights == 0 ? "cursor-not-allowed" : ""
          }`}
        >
          Reserve Now
        </button>
      </form>
    </>
  );
};

export default BookingSection;
