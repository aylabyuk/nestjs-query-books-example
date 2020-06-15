import { Module } from '@nestjs/common'
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'
import { PublisherEntity } from './publisher.entity'
import { Publisher } from './publisher.dto'

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([PublisherEntity])],
      resolvers: [{
        DTOClass: Publisher,
        EntityClass: PublisherEntity
      }]
    })
  ]
})
export class PublisherModule {}