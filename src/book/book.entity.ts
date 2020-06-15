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
import { AuthorEntity } from '../author/author.entity'
import { PublisherEntity } from '../publisher/publisher.entity'
import { ReviewEntity } from '../review/review.entity'

@Entity({ name: 'book' })
export class BookEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column('boolean')
  isPublished!: boolean

  @Column('varchar')
  title!: string

  @Column('text')
  summary!: string

  @Column('date')
  publishedDate!: Date

  @ManyToOne(
    type => AuthorEntity,
    author => author.books
  )
  author!: AuthorEntity

  @ManyToOne(
    type => PublisherEntity,
    publisher => publisher.books
  )
  publisher!: PublisherEntity

  @OneToMany(
    t => ReviewEntity,
    review => review.book
  )
  reviews!: ReviewEntity[]

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}
