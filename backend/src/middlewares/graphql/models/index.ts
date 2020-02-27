/* eslint-disable */
import { GraphQLResolveInfo, DocumentNode } from "graphql";
import { Book } from "./Book";
import { Author } from "./Author";

export type Resolver<T = any> = (
  source: T,
  args: any,
  context: Express.Request & { resources: { [modelName: string]: any } },
  info: GraphQLResolveInfo
) => any;

export type GraphQLModel<T> = {
  type: DocumentNode;
  resolver?: { [field: string]: Resolver<T> };
};

const models: { [name: string]: GraphQLModel<any> } = {
  Book,
  Author,
};

export const typeDefs = (() => {
  const types = Object.keys(models).map((model) => models[model].type);
  return types;
})();
export const resolvers = Object.keys(models).reduce((_resolvers: any, model) => {
  return { ..._resolvers, ...models[model].resolver };
}, {});
