# NextJS Redux with Apollo Server v4

![image](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![image](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![image](https://img.shields.io/badge/Apollo%20GraphQL-311C87?&style=for-the-badge&logo=Apollo%20GraphQL&logoColor=white)

By [`@jimmynguyen1308`](https://github.com/jimmynguyen1308)

## Overview

With [Apollo Server v2 & v3 coming to an end-of-life](https://www.apollographql.com/blog/announcement/backend/announcing-the-end-of-life-schedule-for-apollo-server-2-3/) and the lack of online resources covering how to setup Apollo Server v4 alongside with Redux in NextJS, this project is going to do just that.

The repository is a simple application bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) issuing "the basics" of how to setup Redux state management and GraphQL Server within a NextJS application (current version is NextJS 13).

Hopefully this can help you upscale to an up-to-date version of this tech stack without too many Google searches and  StackOverflow threads.

## Features

The source code is the combination of `NextJS TypeScript framework`, `Redux`, the new `Apollo Server v4` and some little bit of *SASS* (because I can).

### 1. NextJS + TypeScript (v13)
```bash
npx create-next-app@latest --ts
# or
yarn create next-app --typescript
# or
pnpm create next-app --ts
```
Being one of the most common JavaScript frameworks and becoming even more popular, [NextJS + TypeScript](https://nextjs.org/docs/basic-features/typescript) is considerably a versatile option when it comes to scalability. Some features including:
- **Dynamic file-based routing:** ~~because f#&k React Router (?)~~
- **Designated API route with serverless backend:** I'm setting up Apollo Server in here, so the API uses TypeScript & GraphQL
- **Data pre-rendering:** as Apollo Server is deployed within NextJS, I'm primarily using [`getStaticProps`](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) and [`getStaticPaths`](https://nextjs.org/docs/basic-features/data-fetching/get-static-paths)

### 2. Apollo Server (v4)
It is suggested that the purpose of Apollo's new direction is to change the way we approach GraphQL: while it used to have `Schemas` and `Mutations`, now with [Apollo Server v4](https://www.apollographql.com/docs/apollo-server/migration) they are renamed as `typeDefs` and `resolvers`.
```
# Folder Structure:
.
├── ...
├── api                     # API route
│   ├── data                # JSON data files 
│   ├── resolvers           # containing GraphQL actions (ie. Query, Mutation, etc.)
│   ├── typeDefs            # containing GraphQL types
│   └── graphql.ts          # root file - start Apollo Server and create NextJS handler
└── ...
```
Having introduced to a new method of writing GraphQL inside TypeScript...
```
const typeDefs = `#graphql
  # GraphQL types in here
`
```
... it is very clear that the new version of `Apollo Server` has the TypeScript level of dynamic when it comes to database structuring and scope upscaling. The repository is **MY** approach of how they should be dynamically structured.

### 3. Redux

It is such a burden to implement `Redux` within a so-called *"simple application"*; hence, Redux has not been fully integrated to the source code (only the setup part is made at the moment).

Despite all that, since I need Redux to work in NextJS for future projects, squeezing it in here is one of few opportunities for me to get more efficient with Redux.

## Setup & Implementation
After cloning the repository, direct to the clone folder and install required dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```
Then run the development server by typing in the terminal:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
The server will start and be located at url: [http://localhost:3000](http://localhost:3000) which you can access via your browser. The application is fairly simple, just to give an idea of how data is fetch in the new version of `Apollo Server`.

It is also recommended to get to [GraphQL SandBox](http://localhost:3000/api/graphql) to try out every query and mutation added in the app as I only selected a few to include in the demo build.

## FAQ

### The usecase & the given queries
Displaying books and authors in `GraphQL` is the classic usecase of how to apply `Apollo GraphQL` to your own project(s). The queries given here, thus, are simplistic at best *(and redundant at worst)*. The purpose is only to give you some basics to write `GraphQL` queries and schemas in this new format.

### GraphQL's two-way relationship
With this approach, it is impossible to establish two-way relationship between two schemas to which the backend being serverless but not a proper `Apollo Server` might somewhat contribute.
As for my proposed solution, depending on the use case, you can either merge `Books` into `Authors` data...
```
{
  "authors": [
    ...
    "books": [
      # Books data of each author
    ]
  ]
}
```
... or use two (2) queries to fetch the required data, for example, use query `getAuthorById` to get author's name and use `getBooksByAuthorName` to get all books from that author.
## Learn More
- [NextJS Documentation](https://nextjs.org/docs) - official in-depth documentation including NextJS features and API.
- [Apollo Server v4 Migration](https://www.apollographql.com/docs/apollo-server/migration) - Apollo's documentation page to guide migrating from older verions of Apollo Server to version 4.
