import { ObjectType, Field, Int } from '@nestjs/graphql'
import { AuthorEntity } from '../author/author.entity'
import { PublisherEntity } from '../publisher/publisher.entity'
import { ReviewEntity } from '../review/review.entity'
import { FilterableField } from '@nestjs-query/query-graphql'

@ObjectType()
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

  @FilterableField(type => AuthorEntity)
  author!: AuthorEntity

  @FilterableField(type => PublisherEntity)
  publisher!: PublisherEntity

  @Field()
  createdAt!: Date

  @Field()
  updatedAt!: Date
}
