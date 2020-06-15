import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Author } from './author/author.entity'
import { Book } from './book/book.entity'
import { Publisher } from './publisher/publisher.entity'
import { Review } from './review/review.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
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
    }),
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: 'schema/schema.gql'
    })
  ],
})
export class AppModule {}
