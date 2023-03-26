import { NextApiRequest, NextApiResponse } from 'next';
import { getPostsPaginated } from '@lib/blog/api';



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { page, size, collection, searchValue } = req.query;
  
  const { data, total, pageCount, categories } = getPostsPaginated(
    typeof page === 'string' ? parseInt(page, 10) : 1,
    typeof size === 'string' ? parseInt(size, 10) : 10,
    typeof collection === 'string' ? collection : undefined,
    typeof searchValue === 'string' ? searchValue : undefined
  );

  const response = { data, total, pageCount, categories };

  res.status(200).json(response);
}
