export const schema = gql`
  type Todo {
    id: String!
    title: String!
    completed: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    todos: [Todo!]! @skipAuth
  }
  type Mutation {
    createTodo(title: String!): Todo! @skipAuth
  }
`
