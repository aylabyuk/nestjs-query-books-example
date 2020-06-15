import { createConnection } from 'typeorm'
import { Seeder } from './Seeder'
import { Author } from '../src/author/author.entity'
import { Book } from '../src/book/book.entity'
import { Publisher } from '../src/publisher/publisher.entity'
import { Review } from '../src/review/review.entity'

export async function startSeed() {
  const connection = await createConnection({
    name: 'datab',
    type: 'sqlite',
    database: 'datab.sqlite3',
    synchronize: true,
    dropSchema: true,
    entities: [
      Author,
      Book, 
      Publisher,
      Review
    ],
    logging: true
  })

  const seeder = new Seeder(connection)
  await seeder.seed()
}

startSeed()