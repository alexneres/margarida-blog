import Container from '@/components/Shared/Container'
import { getPosts } from '@/services/sanity'
import Link from 'next/link'
import { TypedObject } from 'sanity'

export const revalidate = 0

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

export default async function Home() {
  const posts = (await getPosts()) as PostType[]
  console.log(posts)
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <Container>
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
      </Container>
    </main>
  )
}
