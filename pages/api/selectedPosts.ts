import { NextApiRequest, NextApiResponse } from 'next';
import { getSelectedPosts } from '@lib/blog/api';



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const selectedPosts = getSelectedPosts();


  res.status(200).json(selectedPosts);
}
