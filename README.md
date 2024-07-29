## Installation

```bash
$ npm i -g @nestjs/cli
$ nest new
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Swagger UI

[nestjs-swagger](https://docs.nestjs.com/openapi/introduction)

```bash
$ npm install --save @nestjs/swagger
```

## Prisma

[nestjs-prisma](https://docs.nestjs.com/recipes/prisma)

```bash
$ npm install prisma --save-dev

$ npx prisma

$ npx prisma init

# migration
$ npx prisma migrate dev --name {init} #이름을 정해줌

# client 설치
$ npm install @prisma/client
```

`prisma\schema.prisma` 파일 수정

```ts
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}
```

```ts
// .env 파일
DATABASE_URL = 'mysql://{ID}:{PASSWORD}@{IP_ADDRESS}:{PORT}/{DATABASE_NAME}';
/* PASSWORD에 특수문자가 있을 경우 아래와 같이 변경해야 함
```

| 문자 | 인코딩 | 문자 | 인코딩 | 문자 | 인코딩 | 문자 | 인코딩 | 문자 | 인코딩 |
| ---- | ------ | ---- | ------ | ---- | ------ | ---- | ------ | ---- | ------ |
| !    | %21    | @    | %40    | #    | %23    | $    | %24    | %    | %25    |
| ^    | %5E    | &    | %26    | \*   | %2A    | (    | %28    | )    | %29    |
| +    | %2B    | -    | %2D    | \_   | %5F    | =    | %3D    | [    | %5B    |
| ]    | %5D    | {    | %7B    | }    | %7D    | \|   | %7C    | \    | %5C    |
| ;    | %3B    | '    | %27    | "    | %22    | ,    | %2C    | <    | %3C    |
| >    | %3E    | ?    | %3F    | /    | %2F    | `    | %60    | ~    | %7E    |

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
