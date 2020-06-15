import { Module } from '@nestjs/common'
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'
import { AuthorEntity } from './author.entity'
import { Author } from './author.dto'

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([AuthorEntity])],
      resolvers: [{
        DTOClass: Author,
        EntityClass: AuthorEntity
      }]
    })
  ]
})
export class AuthorModule {}