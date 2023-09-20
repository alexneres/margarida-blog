import { PostType } from '@/services/sanity/types'
import { Card } from '.'
import { HTMLAttributes } from 'react'
import { cn } from '../Shared/utils'

type ArticlesType = HTMLAttributes<HTMLUListElement> & {
  posts: PostType[]
}

export default function Articles({ className, posts }: ArticlesType) {
  return (
    <ul className={cn('flex flex-col gap-20', className)}>
      {posts.map((post) => (
        <Card
          key={post._id}
          title={post.title}
          overview={post.excerpt}
          slug={post.slug.current}
          imageCover={post.coverImage}
          author={post.author}
        />
      ))}
    </ul>
  )
}
