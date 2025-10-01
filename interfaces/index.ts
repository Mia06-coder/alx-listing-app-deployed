export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;// interfaces/index.ts
export interface Address {
  city: string;
  country: string;
}

export interface Review {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface PropertyProps {
  name: string;
  rating: number;
  address: Address;
  image: string;
  description: string;
  category: string[];
  price: number;
  reviews: Review[];
}

  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}
