import fs from 'fs'

import { Death } from './deaths'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Error on not POST
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed', success: false });
    return;
  }

  // Error on no Authorization header
  if (!req.headers.authorization) {
    res.status(401).json({ message: 'Unauthorized', success: false });
    return;
  }

  // Error on invalid Authorization header
  if (req.headers.authorization !== process.env.API_AUTH_KEY!) {
    res.status(401).json({ message: 'Unauthorized', success: false });
    return;
  }

  // Error on no body
  if (!req.body) {
    res.status(400).json({ message: 'Bad Request', success: false });
    return;
  }

  // Error on no body.name
  if (!req.body.name) {
    res.status(400).json({ message: 'Bad Request', success: false });
    return;
  }

  // Error on no body.death
  if (!req.body.death) {
    res.status(400).json({ message: 'Bad Request', success: false });
    return;
  }

  // Handle death

  const deathsExists = fs.existsSync('./deaths.json');

  if (!deathsExists) {
    // No deaths.json, create new
    const newDeath: Death = {
      name: req.body.name,
      deaths: 1,
      causes: [req.body.death],
    };

    fs.writeFileSync('./deaths.json', JSON.stringify([newDeath], null, 2));

    res.status(200).json({ message: 'Success', success: true });
    return;
  }

  // deaths.json exists, read and update
  const rawDeaths = fs.readFileSync('./deaths.json', 'utf8');

  const deaths = JSON.parse(rawDeaths) as Death[];

  const death = deaths.find((d) => d.name === req.body.name);

  if (!death) {
    // No user found, create new to add to deaths.json
    const newDeath: Death = {
      name: req.body.name,
      deaths: 1,
      causes: [req.body.death],
    };

    deaths.push(newDeath);
  } else {
    // User found, update deaths.json
    death.deaths++;
    death.causes.push(req.body.death);
  }

  // Write to deaths.json
  fs.writeFileSync('./deaths.json', JSON.stringify(deaths, null, 2));

  res.status(200).json({ message: 'Success', success: true });
}
