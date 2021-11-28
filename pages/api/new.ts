import type { NextApiRequest, NextApiResponse } from 'next'
import { post } from '../../api'

export type Data = {
  originUrl: string,
  shortUrl: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { url } = JSON.parse(req.body)
  const short = await post(url)
  res.status(200).json({ originUrl: url, shortUrl: short })
}
