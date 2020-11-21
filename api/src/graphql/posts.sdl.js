export const schema = gql`
  type Post {
    id: Int!
    content: String!
    subPosts: [SubPost]!
  }

  type Query {
    posts: [Post!]!
  }

  input CreatePostInput {
    content: String!
  }

  input UpdatePostInput {
    content: String
  }
`
