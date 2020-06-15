import { QueryService, InjectQueryService } from '@nestjs-query/core'
import { CRUDResolver } from '@nestjs-query/query-graphql'
import { Resolver, Query, Args, Int, ResolveField } from '@nestjs/graphql'
import { Author } from './author.dto'
import { AuthorEntity } from './author.entity'

@Resolver(() => Author)
export class AuthorResolver extends CRUDResolver(Author, {
  read: { one: { disabled: true } }, // disabling read one
}) {
  constructor(
    @InjectQueryService(AuthorEntity)
    readonly service: QueryService<AuthorEntity>,
  ) {
    super(service)
  }


  // returning plain JSON
  // I want to override the default (read one) resolver, and I dont want to invoke any database request. 
  @Query(() => Author)
  async author(@Args('id', { type: () => Int }) id: number) {
    console.log('custom resolver running')
    return {
      "id": 7,
      "email": "Hortense84@hotmail.com",
      "firstName": "Adonis",
      "lastName": "Boyle",
      // the "books" part is being resolved somewhere which create a database request. 
      // It would be awesome if there is a way to disable it and just return the nested data already defined in here.
      "books": {
        "edges": [
          {
            "node": {
              "id": 6,
              "isPublished": false,
              "title": "a exercitationem atque",
              "summary": "Corporis magni in quod consequatur dolor aut atque veritatis. Dolor similique quisquam facilis quae minima ducimus. Mollitia eos nam ratione aliquid tempora dolore. Eveniet possimus ex. Omnis nam placeat.",
              "publishedDate": "2020-02-13"
            }
          },
        ]
      }
    }
  }
}
