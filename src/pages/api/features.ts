import type { NextApiRequest, NextApiResponse } from 'next';
import featuresData from '@/data/features.data';
import { Feature } from '@/types/Feature';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Feature[]>,
) {
  res.status(200).send(featuresData);
}
