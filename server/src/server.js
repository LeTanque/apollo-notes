const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const { prisma } = require("./generated/prisma-client");
const getUserId = require("./utils/getUserId");
const resolvers = require("./resolvers");




const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  // ...resolvers,
  context(request) {
    return {
      prisma,
      request,
      getUserId: () => getUserId(request)
    }
  }
});

// console.log(server)



server.listen().then(({ url }) => {
  console.log(` 🔰 ${url}  🔰 `);
});

