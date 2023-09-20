import { notFound } from 'next/navigation'
import { client } from '../config/sanity.client'

export async function getPostBySlug(slug: string) {
  const query = `*[_type == "post" && slug.current == '${slug}'][0] {_id, slug, title, coverImage, excerpt, content, author -> {name, picture}}`

  const post = await client.fetch(query)
  if (!post) return notFound()
  return post
}

export async function getPosts() {
  const query =
    '*[_type == "post"] {_id, _createdAt, slug, title, excerpt, coverImage, author-> {name,picture}}'

  const posts = await client.fetch(query)

  if (!posts) return notFound()
  return posts
}
