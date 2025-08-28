import { PROPERTYLISTINGSAMPLE } from "@/constants";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(PROPERTYLISTINGSAMPLE);
  }
  return res.status(405).json({ message: "Method not allowed" });
}
