import type { NextApiRequest, NextApiResponse } from 'next';
// @ts-ignore
import prisma from "../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
  if (req.method === 'GET') {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const { name, email } = req.body;
    const newUser = await prisma.user.create({
      data: { name, email },
    });
    res.status(201).json(newUser);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
