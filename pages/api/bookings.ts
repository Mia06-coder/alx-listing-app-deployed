import type { NextApiRequest, NextApiResponse } from "next";

// Define the booking type for type safety
interface Booking {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  billingAddress: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const booking: Booking = req.body;

    // For now, just log the booking (you could save it to a DB here)
    console.log("📌 New Booking:", booking);

    // Return success
    return res.status(200).json({
      message: "Booking successful!",
      booking,
    });
  }

  // Handle other methods
  return res.status(405).json({ message: "Method not allowed" });
}
