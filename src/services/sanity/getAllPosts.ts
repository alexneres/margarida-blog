import { notFound } from 'next/navigation'
import { client } from '../../../sanity/lib/client'

export async function getPosts() {
  const query = '*[_type == "post"]'

  const posts = await client.fetch(query)

  if (!posts) return notFound()
  return posts
}
