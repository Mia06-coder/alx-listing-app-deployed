import BookingForm from "@/components/booking/BookingForm";
import CancellationPolicy from "@/components/booking/CancellationPolicy";
import OrderSummary from "@/components/booking/OrderSummary";
import axios from "axios";
import { FormEvent, useState } from "react";
import type { BookingFormData } from "@/types/booking";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  const [formData, setFormData] = useState<BookingFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    streetAdress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings`,
        formData
      );
      alert("Booking confirmed!");
      console.log(`Booking confirmed! ID: ${response.data}`);
    } catch (error) {
      setError("Failed to submit booking.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Contact Detail</h2>

          <form onSubmit={handleSubmit}>
            {/* Form fields for booking details */}
            <BookingForm formData={formData} setFormData={setFormData} />

            <button
              type="submit"
              disabled={loading}
              className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full"
            >
              {loading ? "Processing..." : "Confirm & Pay"}
            </button>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>

        <OrderSummary bookingDetails={bookingDetails} />
        <CancellationPolicy />
      </div>
    </div>
  );
}
