import { PostType } from '@/app/page'
import Container from '@/components/Shared/Container'
import { urlFor } from '@/lib/sanity-image-url'
import { getPost, getPosts } from '@/services/sanity'
import { PortableText } from '@portabletext/react'
import type { Metadata } from 'next'
import Image from 'next/image'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = (await getPost(params.slug)) as PostType

  const metadata: Metadata = {
    title: post.title,
  }

  return metadata
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = (await getPost(params.slug)) as PostType

  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: string }) => (
        <Image src={urlFor(value).url()} alt="Image" />
      ),
    },
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <Container>
        <h1>{post.title}</h1>
        <PortableText value={post.content} components={PortableTextComponent} />
      </Container>
    </main>
  )
}

export async function generateStaticParams() {
  const posts = (await getPosts()) as PostType[]

  return posts.map((post) => ({ slug: post.slug.current }))
}
