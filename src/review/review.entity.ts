import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Book } from '../book/book.entity';

@ObjectType()
@Entity()
export class Review extends BaseEntity {
  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column('varchar')
  title!: string;

  @Field()
  @Column('text')
  body!: string;

  @Field(type => String)
  @Column('date')
  reviewDate!: Date;

  @Field()
  @Column('int')
  rating!: number;

  @Field()
  @Column('varchar')
  reviewerName!: string;

  @Field(type => Book)
  @ManyToOne(
    type => Book,
    book => book.reviews
  )
  book!: Book;
}
