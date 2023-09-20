import Container from '@/components/Shared/Container'
import { SanityImage } from '@/components/Shared/SanityImage'
import { urlFor } from '@/services/sanity/config/sanity-image-url'
import { getPostBySlug, getPosts } from '@/services/sanity/controllers/post'
import { PostType } from '@/services/sanity/types'
import { PortableText } from '@portabletext/react'
import type { Metadata } from 'next'
import Image from 'next/image'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = (await getPostBySlug(params.slug)) as PostType

  const metadata: Metadata = {
    title: post.title,
  }

  return metadata
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = (await getPostBySlug(params.slug)) as PostType

  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: string }) => (
        <Image src={urlFor(value).url()} alt="Image" />
      ),
    },
  }

  return (
    <main className="flex flex-col items-center justify-center">
      <Container className="prose mt-10">
        <h1>{post.title}</h1>
        <span>{post.excerpt}</span>
        <SanityImage src={post.coverImage} />
        <PortableText value={post.content} components={PortableTextComponent} />
      </Container>
    </main>
  )
}

export async function generateStaticParams() {
  const posts = (await getPosts()) as PostType[]

  return posts.map((post) => ({ slug: post.slug.current }))
}
