import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<PropertyProps> = ({
  name,
  address,
  rating,
  price,
  image,
  discount,
}) => {
  return (
    <div className="bg-white shadow rounded overflow-hidden hover:shadow-lg transition">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-lg">{name}</h2>
        <p className="text-gray-500 text-sm">{address.city}, {address.state}</p>
        <p className="mt-1 text-yellow-500">⭐ {rating}</p>
        <p className="mt-2 font-semibold">${price}</p>
        {discount && <p className="text-red-500">-{discount}%</p>}
      </div>
    </div>
  );
};

export default PropertyCard;
