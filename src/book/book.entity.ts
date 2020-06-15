import {
  CreateDateColumn,
  Column,
  ManyToOne,
  BaseEntity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  Entity
} from 'typeorm'
import { ObjectType, Field, Int } from '@nestjs/graphql'
import { Author } from '../author/author.entity'
import { Publisher } from '../publisher/publisher.entity'
import { Review } from '../review/review.entity'

@ObjectType()
@Entity()
export class Book extends BaseEntity {
  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id!: number

  @Field(type => Boolean)
  @Column('boolean')
  isPublished!: boolean

  @Field()
  @Column('varchar')
  title!: string

  @Field()
  @Column('text')
  summary!: string

  @Field(type => String)
  @Column('date')
  publishedDate!: Date

  @Field(type => Author)
  @ManyToOne(
    type => Author,
    author => author.books
  )
  author!: Author

  @Field(type => Publisher)
  @ManyToOne(
    type => Publisher,
    publisher => publisher.books
  )
  publisher!: Publisher

  @Field(type => [Review])
  @OneToMany(
    t => Review,
    review => review.book
  )
  reviews!: Review[]

  @Field()
  @CreateDateColumn()
  createdAt!: Date

  @Field()
  @UpdateDateColumn()
  updatedAt!: Date
}
