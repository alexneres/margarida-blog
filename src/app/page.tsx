import { Articles } from '@/components/Article'
import Aside from '@/components/Layout/Aside'
import Container from '@/components/Shared/Container'
import { getPosts } from '@/services/sanity/controllers/post'
import { PostType } from '@/services/sanity/types'

export const revalidate = 0

export default async function Home() {
  const posts = (await getPosts()) as PostType[]

  return (
    <main className="flex flex-col">
      <div className="h-[500px] w-full bg-zinc-300"></div>
      <Container className="mt-20 flex flex-col items-center justify-between gap-24 lg:flex-row lg:items-start">
        <Articles posts={posts} className="" />
        <Aside />
      </Container>
    </main>
  )
}
