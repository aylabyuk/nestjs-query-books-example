import { ObjectType, Field, Int } from '@nestjs/graphql'
import { FilterableField, Connection } from '@nestjs-query/query-graphql'
import { Book } from 'src/book/book.dto'

@ObjectType()
@Connection('books', () => Book)
export class Author {
  @FilterableField(type => Int)
  id!: number

  @FilterableField()
  email!: string

  @FilterableField()
  firstName!: string

  @FilterableField()
  lastName!: string

  @FilterableField()
  phone!: string

  @Field()
  createdAt!: Date

  @Field()
  updatedAt!: Date
}
