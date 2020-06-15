import { ObjectType, Field, Int } from '@nestjs/graphql'
import { BookEntity } from '../book/book.entity'
import { FilterableField } from '@nestjs-query/query-graphql'

@ObjectType()
export class Review {
  @FilterableField(type => Int)
  id!: number

  @FilterableField()
  title!: string

  @FilterableField()
  body!: string

  @FilterableField(type => String)
  reviewDate!: Date

  @FilterableField()
  rating!: number

  @FilterableField()
  reviewerName!: string
}
