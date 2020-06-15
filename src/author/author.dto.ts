import { ObjectType, Field, Int } from '@nestjs/graphql'
import { BookEntity } from '../book/book.entity'

@ObjectType()
export class Author {
  @Field(type => Int)
  id!: number

  @Field()
  email!: string

  @Field()
  firstName!: string

  @Field()
  lastName!: string

  @Field()
  phone!: string

  @Field(type => [BookEntity])
  books!: BookEntity[]

  @Field()
  createdAt!: Date

  @Field()
  updatedAt!: Date
}
