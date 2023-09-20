'use client'

import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { client } from '../../../sanity/lib/client'
import { UseNextSanityImageProps, useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'
import { HTMLAttributes } from 'react'
import { cn } from './utils'

type SanityImageProps = HTMLAttributes<HTMLImageElement> & {
  src: SanityImageSource
}

export function SanityImage({ className, src }: SanityImageProps) {
  const sanityImage: UseNextSanityImageProps | null = useNextSanityImage(
    client,
    src,
  )
  if (!sanityImage) return <Image src={'/broken-image.svg'} alt="" />

  return <Image {...sanityImage} alt="" className={cn('', className)} />
}
