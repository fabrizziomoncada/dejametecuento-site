import type { NextApiRequest, NextApiResponse } from 'next'
import { fetchAPI } from '@lib/api'

export default async function articlePreview(
  req: NextApiRequest,
  res: NextApiResponse<{
    message: string
  }>
) {
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== process.env.PREVIEW_SECRET || !req.query.id) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // This will work only on development, set the env variable on development
  // or simple test with plan text variables e.g.
  // if (req.query.secret !== 'SECRET' || !req.query.id)

  // Fetch the headless CMS to check if the provided `id` exists
  const article: TArticle = (
    await fetchAPI(`/articles?id=${req.query.id}&_publicationState=preview`)
  )[0]

  // If the id doesn't exist prevent preview mode from being enabled
  if (!article) {
    return res.status(401).json({ message: 'Invalid id' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({
    maxAge: 60 * 60, // The preview mode cookies expire in 1 hour
  })

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.id as that might lead to open redirect vulnerabilities
  res.redirect(`/articles/${article.slug}`)
  res.end()
}
