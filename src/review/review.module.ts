import { Module } from '@nestjs/common'
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'
import { ReviewEntity } from './review.entity'
import { Review } from './review.dto'

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ReviewEntity])],
      resolvers: [{
        DTOClass: Review,
        EntityClass: ReviewEntity
      }]
    })
  ]
})
export class ReviewModule {}