// constants/index.ts
import { PropertyProps } from "@/interfaces/index";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Ocean View Villa",
    rating: 5,
    address: { city: "Kigali", country: "Rwanda" },
    image: "/villa.jpg",
    description: "A beautiful villa with amazing views of the ocean.",
    category: ["WiFi", "Swimming Pool", "Air Conditioning"],
    price: 120,
    reviews: [
      {
        name: "John Doe",
        avatar: "/avatar1.jpg",
        rating: 5,
        comment: "Amazing place! Loved it.",
      },
      {
        name: "Jane Smith",
        avatar: "/avatar2.jpg",
        rating: 4,
        comment: "Great stay but could improve on cleanliness.",
      },
    ],
  },
];
