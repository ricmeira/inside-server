import { makeExecutableSchema } from 'graphql-tools';

// resolvers
import resolvers from './resolvers';
// models
import user from './model/user/schema';

const schema = `
  ${user}

  type Session {
    token: String,
    error: String,
    email: String,
    name: String
  }

  # the schema allows the following query:
  type Query {
    users: [User]
  }
  # this schema allows the following mutation:
  type Mutation {
    RegisterEmail (name: String, email: String, password: String): Session,
    LoginEmail (email: String, password: String): Session,
  }
`;

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});
