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
