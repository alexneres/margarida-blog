import ImageUrlBuilder from '@sanity/image-url'
import { client } from './sanity.client'

const builder = ImageUrlBuilder(client)

export function urlFor(source: string) {
  return builder.image(source)
}
