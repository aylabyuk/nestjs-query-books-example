import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthorEntity } from './author/author.entity'
import { BookEntity } from './book/book.entity'
import { PublisherEntity } from './publisher/publisher.entity'
import { ReviewEntity } from './review/review.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
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
    }),
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: 'schema/schema.gql'
    })
  ],
})
export class AppModule {}
