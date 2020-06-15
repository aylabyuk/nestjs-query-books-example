import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BookEntity } from '../book/book.entity';

@ObjectType()
export class Review {
  @Field(type => Int)
  id!: number;

  @Field()
  title!: string;

  @Field()
  body!: string;

  @Field(type => String)
  reviewDate!: Date;

  @Field()
  rating!: number;

  @Field()
  reviewerName!: string;

  @Field(type => BookEntity)
  book!: BookEntity;
}
