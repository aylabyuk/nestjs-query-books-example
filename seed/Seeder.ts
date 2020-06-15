import { Connection, EntityManager } from 'typeorm'
import * as faker from 'faker'
import { AuthorEntity } from '../src/author/author.entity'
import { PublisherEntity } from '../src/publisher/publisher.entity'
import { BookEntity } from '../src/book/book.entity'
import { ReviewEntity } from '../src/review/review.entity'

export class Seeder {
  private readonly NUM_AUTHORS = 10
  private readonly NUM_PUBLISHERS = 3
  private readonly NUM_BOOKS = 50
  private readonly NUM_REVIEWS = 100

  constructor(private conn: Connection) {}

  async seed() {
    await this.conn.transaction(async entityManager => {
      const authors = await this.seedAuthors(entityManager)
      const publishers = await this.seedPublishers(entityManager)
      const books = await this.seedBooks(entityManager, authors, publishers)
      await this.seedReviews(entityManager, books)
    })
  }

  private async seedAuthors(manager: EntityManager) {
    const authors: Array<Partial<AuthorEntity>> = [];
    for (let i = 0; i < this.NUM_AUTHORS; i++) {
      const author: Partial<AuthorEntity> = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumberFormat(),
      };
      authors.push(author)
    }
    await manager
      .createQueryBuilder()
      .insert()
      .into(AuthorEntity)
      .values(authors)
      .execute()

    return await manager.getRepository(AuthorEntity).find()
  }

  private async seedPublishers(manager: EntityManager) {
    const publishers: Array<Partial<PublisherEntity>> = [];
    for (let i = 0; i < this.NUM_PUBLISHERS; i++) {
      const publisher: Partial<PublisherEntity> = {
        name: faker.company.companyName(),
        address: faker.address.streetAddress(true)
      };
      publishers.push(publisher)
    }
    await manager
      .createQueryBuilder()
      .insert()
      .into(PublisherEntity)
      .values(publishers)
      .execute()
    return await manager.getRepository(PublisherEntity).find()
  }

  private async seedBooks(
    manager: EntityManager,
    authors: AuthorEntity[],
    publishers: PublisherEntity[]
  ) {
    const books: Array<Partial<BookEntity>> = [];
    for (let i = 1; i <= this.NUM_BOOKS; i++) {
      const book: Partial<BookEntity> = {
        title: faker.lorem.words(3),
        summary: faker.lorem.paragraph(2),
        publishedDate: faker.date.past(),
        author: authors[i % this.NUM_AUTHORS],
        isPublished: faker.random.number(10) < 2,
        publisher: publishers[i % this.NUM_PUBLISHERS]
      };
      books.push(book)
    }

    await manager
      .createQueryBuilder()
      .insert()
      .into(BookEntity)
      .values(books)
      .execute()
    return await manager.getRepository(BookEntity).find()
  }

  private async seedReviews(manager: EntityManager, books: BookEntity[]) {
    const reviews: Array<Partial<ReviewEntity>> = [];
    for (let i = 1; i <= this.NUM_REVIEWS; i++) {
      const review: Partial<ReviewEntity> = {
        title: faker.lorem.words(3),
        body: faker.lorem.paragraph(5),
        reviewDate: faker.date.past(),
        rating: faker.random.number({ min: 0, max: 10 }),
        reviewerName: faker.name.firstName() + ' ' + faker.name.lastName(),
        book: books[i % this.NUM_BOOKS]
      };
      reviews.push(review)
    }

    await manager
      .createQueryBuilder()
      .insert()
      .into(ReviewEntity)
      .values(reviews)
      .execute()
  }
}
