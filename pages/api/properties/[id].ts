import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === "GET") {
    const property = PROPERTYLISTINGSAMPLE.find((p) => p.name === id);

    if (property) {
      return res.status(200).json(property);
    } else {
      return res.status(404).json({ message: "Property not found" });
    }
  }
  return res.status(405).json({ message: "Method not allowed" });
}
