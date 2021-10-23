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
    plans: [Plan!]! @skipAuth
    plan(id: Int!): Plan @skipAuth
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
    createPlan(input: CreatePlanInput!): Plan! @skipAuth
    updatePlan(id: Int!, input: UpdatePlanInput!): Plan! @skipAuth
    deletePlan(id: Int!): Plan! @skipAuth
  }
`
