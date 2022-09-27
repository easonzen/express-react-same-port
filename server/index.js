const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} = require("apollo-server-core");
const http = require("http");
const routes = require("./routes");

const PORT = 5000;
const isDev = process.env.NODE_ENV !== "production";

const typeDefs = require("./models");
const resolvers = require("./controllers");

const { RESTAPI } = require("./utils/datasources");

async function startServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
    dataSources: () => {
      return {
        RESTAPI: new RESTAPI(),
      };
    },
  });

  await apolloServer.start();

  app.use(apolloServer.getMiddleware({ path: "/api/graphql" }));

  app.use("/api", routes);

  if (!isDev) {
    app.use("/", express.static(path.resolve(__dirname, "../client/build")));
  }

  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));

  // console.log(`🚀 Server ready at http://localhost: ${PORT}`);
}

startServer();
