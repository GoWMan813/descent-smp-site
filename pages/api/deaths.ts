import fs from 'fs'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
export type Death = {
  name: string;
  deaths: number;
  causes: string[];
};

type Data = {
  message: string;
  success: boolean;
  data?: Death[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method Not Allowed', success: false });
    return;
  }

  // Check for deaths.json

  const deathsExists = fs.existsSync('./deaths.json');

  if (!deathsExists) {
    res.status(500).json({ message: 'Success', success: true, data: [] });
    return;
  }

  const deaths = fs.readFileSync('./deaths.json', 'utf8');
  const deathsJson = JSON.parse(deaths) as Death[];

  res.status(200).json({ message: 'Success', success: true, data: deathsJson });
}
