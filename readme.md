# Countries-Graphql

## You can visit a demo [here](https://react-countries-graphql.vercel.app)

## About this proyect

Get all the countries of the world and know the details of these with a single click. You can search and filter according to your interests.

You can enter this [graphql playground](https://countries.trevorblades.com/) which is where all the information that we are showing in this application comes from.

## Installation

The first step to follow is to clone the repository

```
git clone https://github.com/geamdev/countries-graphql
```

in the root folder of the project we can execute the command:

```
npm i && npm run dev
```

### Tests

To run the tests of all the components you can use the command:

```
npm run test
```

### Coverage

To see the coverage that we have in this application you can execute the command:

```
npm run coverage
```

## More Details

### What do we use to make graphql requests?

To make the requests we use [apollo-client](https://www.apollographql.com/) which allows us to work with graphql in a simple and fast way.

### Why we use GraphQL Code Generator?

In order to have all the types that we have in our api we use [graphql-code-generator](https://www.graphql-code-generator.com) since this way we can obtain the typeScript typing of each of our entities which saves us the time of not defining the types ourselves.

### License

[MIT](https://choosealicense.com/licenses/mit/)
