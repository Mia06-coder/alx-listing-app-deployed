import { REVIEWS } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewsSection from "@/components/property/ReviewSection";
import { useEffect, useState } from "react";
import axios from "axios";
import { PropertyProps } from "@/interfaces";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<PropertyProps>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
      } catch (error) {
        setError("Failed to fetch property details.");
        console.error("Error fetching property details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) return <p className="text-red-500">{error}</p>;

  if (!property) return <p className="p-6">Property not found</p>;

  return (
    <div className="container mx-auto p-6 text-[var(--color-secondary-dark)]">
      <PropertyDetail
        property={property}
        reviews={<ReviewsSection reviews={REVIEWS} rating={property.rating} />}
        booking={
          <BookingSection price={property.price} discount={property.discount} />
        }
      />
    </div>
  );
}
