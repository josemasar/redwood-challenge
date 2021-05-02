export const schema = gql`
  type Idea {
    id: Int!
    opps: Boolean!
    product: String!
    system: String!
    partNum: String!
    vendor: String!
    title: String!
    body: String!
    value: Int!
    author: String!
    active: Boolean!
    plannedStart: DateTime!
    plannedEnd: DateTime!
    finish: Boolean!
    createdAt: DateTime!
  }

  type Query {
    ideas: [Idea!]!
    idea(id: Int!): Idea
  }

  input CreateIdeaInput {
    opps: Boolean!
    product: String!
    system: String!
    partNum: String!
    vendor: String!
    title: String!
    body: String!
    value: Int!
    author: String!
    active: Boolean!
    plannedStart: DateTime!
    plannedEnd: DateTime!
    finish: Boolean!
  }

  input UpdateIdeaInput {
    opps: Boolean
    product: String
    system: String
    partNum: String
    vendor: String
    title: String
    body: String
    value: Int
    author: String
    active: Boolean
    plannedStart: DateTime
    plannedEnd: DateTime
    finish: Boolean
  }

  type Mutation {
    createIdea(input: CreateIdeaInput!): Idea!
    updateIdea(id: Int!, input: UpdateIdeaInput!): Idea!
    deleteIdea(id: Int!): Idea!
  }
`
