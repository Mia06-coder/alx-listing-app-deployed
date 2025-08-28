import { NextApiRequest, NextApiResponse } from "next";

interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

// Record<string, Review[]> allows any propertyId as key
const reviews: Record<string, Review[]> = {
  "1": [
    {
      id: "r1",
      user: "Alice Johnson",
      rating: 5,
      comment: "Amazing property! Super clean and in a great location.",
      date: "2025-08-01",
    },
    {
      id: "r2",
      user: "Mark Thompson",
      rating: 4,
      comment: "Very comfortable stay, but WiFi could be faster.",
      date: "2025-08-10",
    },
  ],
  "2": [
    {
      id: "r3",
      user: "Sophia Lee",
      rating: 5,
      comment: "Loved the view from the balcony. Would definitely book again!",
      date: "2025-07-22",
    },
    {
      id: "r4",
      user: "James Carter",
      rating: 3,
      comment: "Decent stay, but the check-in process was a bit confusing.",
      date: "2025-08-12",
    },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === "GET") {
    const propertyReviews = reviews[id as string] || [];
    return res.status(200).json(propertyReviews);
  }

  if (req.method === "POST") {
    const { user, rating, comment } = req.body;
    if (!user || !rating || !comment) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const newReview: Review = {
      id: `r${Date.now()}`,
      user,
      rating,
      comment,
      date: new Date().toISOString().split("T")[0],
    };

    if (!reviews[id as string]) {
      reviews[id as string] = [];
    }
    reviews[id as string].push(newReview);

    return res.status(201).json(newReview);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
