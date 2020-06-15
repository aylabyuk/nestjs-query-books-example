import { ObjectType, Field, Int } from '@nestjs/graphql'
import { FilterableField, Relation } from '@nestjs-query/query-graphql'
import { Author } from 'src/author/author.dto'

@ObjectType()
@Relation('author', () => Author)
export class Book {
  @FilterableField(type => Int)
  id!: number

  @FilterableField(type => Boolean)
  isPublished!: boolean

  @FilterableField()
  title!: string

  @FilterableField()
  summary!: string

  @FilterableField(type => String)
  publishedDate!: Date

  @Field()
  createdAt!: Date

  @Field()
  updatedAt!: Date
}
