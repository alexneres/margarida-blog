import { notFound } from 'next/navigation'

import { client } from '../../../sanity/lib/client'

export async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]`

  const post = await client.fetch(query)
  if (!post) return notFound()
  return post
}
