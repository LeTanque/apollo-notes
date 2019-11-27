const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar DateTime
  
  """
  Queries
  """
  type Query {
    """
    Me represents the current user, based off of the authorization token send from headers
    """
    me: User!
    note: Note!
  }

  """
  Mutations
  """
  type Mutation {
    createUser(data: UserInput): AuthPayload!
    loginUser(data: LoginUserInput): AuthPayload!
    createNote(data: CreateNoteInput): Note!
    updateNote(data: UpdateNoteInput): Note!
  }

  """
  User data model
  """
  type User {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime! 
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    notes: [Note]!
  }
  """
  Fields to create or update a user
  """
  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
  """
  Fields to login a user
  """
  input LoginUserInput {
    email: String!
    password: String!
  }
  """
  Login and Sign-up payload wrapped that contains an authentication token
  and the current user.
  """
  type AuthPayload {
    token: String!
    user: User!
  }
  """
  Note data model
  """
  type Note {
    id: ID!
    user: ID!
    title: String!
    body: String!
    published: Boolean
  }
  """
  Fields to create a note
  """
  input CreateNoteInput {
    """
    User field is an id the represents the user its going to be attached to
    """
    user: ID!
    title: String!
    body: String!
  }
  """
  Fields to update a note
  """
  input UpdateNoteInput {
    title: String!
    body: String!
  }
`;

module.exports = typeDefs;
