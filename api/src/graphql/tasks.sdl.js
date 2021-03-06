export const schema = gql`
  type Task {
    id: Int!
    plan: Plan!
    planId: Int!
    type: String!
    owner: String!
    Requiredby: DateTime!
    status: String!
    Start: DateTime!
    Finish: DateTime!
  }

  type Query {
    tasks: [Task!]!
    task(id: Int!): Task
  }

  input CreateTaskInput {
    planId: Int!
    type: String!
    owner: String!
    Requiredby: DateTime!
    status: String!
    Start: DateTime!
    Finish: DateTime!
  }

  input UpdateTaskInput {
    planId: Int
    type: String
    owner: String
    Requiredby: DateTime
    status: String
    Start: DateTime
    Finish: DateTime
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task!
    updateTask(id: Int!, input: UpdateTaskInput!): Task!
    deleteTask(id: Int!): Task!
  }
`
