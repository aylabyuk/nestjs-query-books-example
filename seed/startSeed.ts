import { createConnection } from 'typeorm'
import { Seeder } from './Seeder'
import { AuthorEntity } from '../src/author/author.entity'
import { BookEntity } from '../src/book/book.entity'
import { PublisherEntity } from '../src/publisher/publisher.entity'
import { ReviewEntity } from '../src/review/review.entity'

export async function startSeed() {
  const connection = await createConnection({
    name: 'datab',
    type: 'sqlite',
    database: 'datab.sqlite3',
    synchronize: true,
    dropSchema: true,
    entities: [
      AuthorEntity,
      BookEntity, 
      PublisherEntity,
      ReviewEntity
    ],
    logging: true
  })

  const seeder = new Seeder(connection)
  await seeder.seed()
}

startSeed()