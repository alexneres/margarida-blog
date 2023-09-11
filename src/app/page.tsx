import { client } from '@/lib/sanity.client'
import Link from 'next/link'
import { TypedObject } from 'sanity'

export type PostType = {
  title: string
  overview: string
  content: TypedObject
  _id: string
  slug: {
    current: string
  }
  _createdAt: string
}

async function getPosts() {
  const query = '*[_type == "post"]'

  const posts = await client.fetch(query)

  return posts
}

export default async function Home() {
  const posts = (await getPosts()) as PostType[]
  return (
    <main>
      {posts.map((post) => (
        <li key={post._id}>
          <article>
            <Link href={`/post/${post.slug.current}`}>
              <div>
                <h3>{post.title}</h3>
              </div>

              <p>{post.overview}</p>
            </Link>
          </article>
        </li>
      ))}
    </main>
  )
}
