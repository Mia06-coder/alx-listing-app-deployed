import React from "react";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="border p-4 rounded shadow-sm">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
