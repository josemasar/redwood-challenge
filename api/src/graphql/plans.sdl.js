export const schema = gql`
  type Plan {
    id: Int!
    idea: Idea!
    ideaId: Int!
    owner: String!
    plannedStart: DateTime!
    plannedEnd: DateTime!
    progress: Int!
    finish: Boolean!
    createdAt: DateTime!
    tasks: [Task]!
  }

  type Query {
    plans: [Plan!]!
    plan(id: Int!): Plan
  }

  input CreatePlanInput {
    ideaId: Int!
    owner: String!
    plannedStart: DateTime!
    plannedEnd: DateTime!
    progress: Int!
    finish: Boolean!
  }

  input UpdatePlanInput {
    ideaId: Int
    owner: String
    plannedStart: DateTime
    plannedEnd: DateTime
    progress: Int
    finish: Boolean
  }

  type Mutation {
    createPlan(input: CreatePlanInput!): Plan!
    updatePlan(id: Int!, input: UpdatePlanInput!): Plan!
    deletePlan(id: Int!): Plan!
  }
`
