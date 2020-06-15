import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { BookEntity } from '../book/book.entity'

@Entity({ name: 'publisher' })
export class PublisherEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column('varchar')
  name!: string

  @Column('varchar')
  address!: string

  @OneToMany(
    type => BookEntity,
    book => book.publisher
  )
  books!: BookEntity[]
}
