import { ReactNode } from "react";

export interface CardProps {
  title: string;
  description: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  style: string;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface PropertyProps {
  id: string | number;
  name: string;
  address: Address;
  rating: number;
  description: string;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
}

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PillProps {
  title: string;
  icon?: React.ReactNode;
  selected?: boolean;
  onClick: (title: string) => void;
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  memberSince: string;
  date: string;
  tripType: string;
  comment: string;
}

export interface Amenity {
  label: string;
  icon: AmenityIcon;
}

export interface AmenityIcon {
  src: string;
  alt: string;
  width: number;
  height: number;
}
