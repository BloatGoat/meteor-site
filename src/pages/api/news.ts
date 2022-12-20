import type { NextApiRequest, NextApiResponse } from 'next';
import newsData from '@/data/news.data';
import { News } from '@/types/News';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<News[]>,
) {
  res.status(200).send(newsData);
}
