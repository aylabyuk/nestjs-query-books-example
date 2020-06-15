import { ObjectType, Field, Int } from '@nestjs/graphql'
import { BookEntity } from '../book/book.entity'

@ObjectType()
export class Publisher {
  @Field(type => Int)
  id!: number

  @Field()
  name!: string

  @Field()
  address!: string

  @Field(type => [BookEntity], { nullable: true })
  books!: BookEntity[]
}
