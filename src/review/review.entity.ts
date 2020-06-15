import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { BookEntity } from '../book/book.entity'

@Entity({ name: 'review' })
export class ReviewEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column('varchar')
  title!: string

  @Column('text')
  body!: string

  @Column('date')
  reviewDate!: Date

  @Column('int')
  rating!: number

  @Column('varchar')
  reviewerName!: string

  @ManyToOne(
    type => BookEntity,
    book => book.reviews
  )
  book!: BookEntity
}
