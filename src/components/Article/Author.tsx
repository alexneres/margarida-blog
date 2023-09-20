import { AuthorType } from '@/services/sanity/types'
import { SanityImage } from '../Shared/SanityImage'

export default function Author({ name, picture }: AuthorType) {
  return (
    <div className="flex items-center gap-2">
      <SanityImage src={picture} className="w-5" />
      <span>{name}</span>
    </div>
  )
}
