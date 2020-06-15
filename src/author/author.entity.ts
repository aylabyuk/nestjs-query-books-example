import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { BookEntity } from '../book/book.entity'

@Entity({ name: 'author' })
export class AuthorEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column('varchar')
  email!: string

  @Column('varchar')
  firstName!: string

  @Column('varchar')
  lastName!: string

  @Column('varchar', { name: 'mobile' })
  phone!: string

  @OneToMany(
    type => BookEntity,
    book => book.author
  )
  books!: BookEntity[]

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}
