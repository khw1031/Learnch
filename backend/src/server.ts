/* eslint-disable no-console */
import { ApolloServer } from "apollo-server-express";
import { app } from "./app";
import { baseUrl, origin } from "./config";
import schema from "./middlewares/graphql/schema";

app.set("port", process.env.PORT || 7000);
app.set("env", process.env.NODE_ENV || "development");

const server = new ApolloServer({
  schema,
});

server.applyMiddleware({
  app,
  cors: {
    credentials: true,
    origin: origin[app.get("env")],
  },
});

app.listen(app.get("port"), () => {
  console.log(`Learnch is running at ${baseUrl[app.get("env")]}`);
  console.log(`GraphQL server is running at ${baseUrl[app.get("env")]}${server.graphqlPath}`);
  console.log(`port: ${app.get("port")}`);
  console.log(`mode: ${app.get("env")} mode`);
});
