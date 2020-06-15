import { ObjectType, Field, Int } from '@nestjs/graphql'
import { AuthorEntity } from '../author/author.entity'
import { PublisherEntity } from '../publisher/publisher.entity'
import { ReviewEntity } from '../review/review.entity'

@ObjectType()
export class Book {
  @Field(type => Int)
  id!: number

  @Field(type => Boolean)
  isPublished!: boolean

  @Field()
  title!: string

  @Field()
  summary!: string

  @Field(type => String)
  publishedDate!: Date

  @Field(type => AuthorEntity)
  author!: AuthorEntity

  @Field(type => PublisherEntity)
  publisher!: PublisherEntity

  @Field(type => [ReviewEntity])
  reviews!: ReviewEntity[]

  @Field()
  createdAt!: Date

  @Field()
  updatedAt!: Date
}
