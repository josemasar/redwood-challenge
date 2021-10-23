export const schema = gql`
  type Idea {
    id: Int!
    opportunity: Boolean!
    product: String!
    system: String!
    partNum: String!
    vendor: String!
    title: String!
    body: String!
    value: Int!
    author: String!
    active: Boolean!
    finish: Boolean!
    createdAt: DateTime!
    plan: Plan
  }

  type sumIdeas {
    total: Int @skipAuth
  }

  type Query {
    ideas: [Idea!]! @skipAuth
    idea(id: Int!): Idea @skipAuth
    sumIdeas: [sumIdeas] @skipAuth
  }

  input CreateIdeaInput {
    opportunity: Boolean!
    product: String!
    system: String!
    partNum: String!
    vendor: String!
    title: String!
    body: String!
    value: Int!
    author: String!
    active: Boolean!
    finish: Boolean!
  }

  input UpdateIdeaInput {
    opportunity: Boolean
    product: String
    system: String
    partNum: String
    vendor: String
    title: String
    body: String
    value: Int
    author: String
    active: Boolean
    finish: Boolean
  }

  type Mutation {
    createIdea(input: CreateIdeaInput!): Idea! @skipAuth
    updateIdea(id: Int!, input: UpdateIdeaInput!): Idea! @skipAuth
    deleteIdea(id: Int!): Idea! @skipAuth
  }
`
