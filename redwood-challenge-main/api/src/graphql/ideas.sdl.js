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
    total: Int
  }

  type Query {
    ideas: [Idea!]!
    idea(id: Int!): Idea
    sumIdeas: [sumIdeas]
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
    createIdea(input: CreateIdeaInput!): Idea!
    updateIdea(id: Int!, input: UpdateIdeaInput!): Idea!
    deleteIdea(id: Int!): Idea!
  }
`
