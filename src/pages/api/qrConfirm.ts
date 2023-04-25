// This is an example of to protect an API route
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const qrValue = "pncs";
  const hashed = await bcrypt.hash(qrValue, 10);
  res.send({
    qrvalue: hashed,
  });
}
