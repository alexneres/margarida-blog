import { PostType } from '@/app/page'
import { urlFor } from '@/lib/sanity-image-url'
import { client } from '@/lib/sanity.client'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
export const revalidate = 30

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]`

  const post = await client.fetch(query)

  return post
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
    <div>
      <h1>{post.title}</h1>
      <PortableText value={post.content} components={PortableTextComponent} />
    </div>
  )
}
