import { HTMLAttributes } from 'react'
import { cn } from '../Shared/utils'
import Link from 'next/link'
import { SanityImage } from '../Shared/SanityImage'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import Author from './Author'
import { AuthorType } from '@/services/sanity/types'
import { Typography } from '../Shared/Typography'

type CardProps = HTMLAttributes<HTMLElement> & {
  title: string
  overview: string
  slug: string
  imageCover: SanityImageSource
  author: AuthorType
}

export default function Card({
  className,
  title,
  overview,
  slug,
  imageCover,
  author,
}: CardProps) {
  return (
    <article className={cn('h-32 ', className)}>
      <div className="flex items-center gap-6">
        <div>
          <Link href={`/post/${slug}`} className="flex max-w-sm flex-col gap-1">
            <div className="py-1 text-sm font-medium">
              <Author name={author.name} picture={author.picture} />
            </div>

            <div className="flex flex-col gap-1">
              <Typography variant={'h3'}>{title}</Typography>
              <Typography variant={'h4'}>{overview}</Typography>
            </div>
          </Link>
        </div>

        <Link href={`/post/${slug}`}>
          <SanityImage
            src={imageCover}
            className="hidden max-h-[8.375rem] max-w-[12.5rem] object-cover md:block lg:max-h-40 lg:max-w-[16rem]"
          />
        </Link>
      </div>
    </article>
  )
}
