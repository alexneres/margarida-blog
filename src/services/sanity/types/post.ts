import { TypedObject } from 'sanity'
import { AuthorType } from './author'

export type PostType = {
  _id: string
  _createdAt: string
  title: string
  coverImage: { _type: 'image' }
  slug: {
    current: string
  }
  content: TypedObject
  excerpt: string
  author: AuthorType
}
