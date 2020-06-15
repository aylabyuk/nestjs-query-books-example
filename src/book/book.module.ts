import { Module } from '@nestjs/common'
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'
import { BookEntity } from './book.entity'
import { Book } from './book.dto'

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([BookEntity])],
      resolvers: [{
        DTOClass: Book,
        EntityClass: BookEntity
      }]
    })
  ]
})
export class BookModule {}