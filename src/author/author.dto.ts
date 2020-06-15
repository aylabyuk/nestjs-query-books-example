import { ObjectType, Field, Int } from '@nestjs/graphql'
import { FilterableField } from '@nestjs-query/query-graphql'

@ObjectType()
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
