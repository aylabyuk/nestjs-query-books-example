import { ObjectType, Field, Int } from '@nestjs/graphql'
import { BookEntity } from '../book/book.entity'
import { FilterableField } from '@nestjs-query/query-graphql'

@ObjectType()
export class Publisher {
  @FilterableField(type => Int)
  id!: number

  @FilterableField()
  name!: string

  @FilterableField()
  address!: string
}
