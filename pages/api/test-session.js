import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ error: "Harus Login" });
  } else {
    res.status(200).json({ message: "Succes", session });
  }
}
