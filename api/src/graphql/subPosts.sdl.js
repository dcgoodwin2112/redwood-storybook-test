export const schema = gql`
  type SubPost {
    id: Int!
    content: String!
    psotId: Int!
    post: Post!
  }

  type Query {
    subPosts: [SubPost!]!
  }

  input CreateSubPostInput {
    content: String!
    psotId: Int!
  }

  input UpdateSubPostInput {
    content: String
    psotId: Int
  }
`
