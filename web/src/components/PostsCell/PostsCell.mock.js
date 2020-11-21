// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  posts: {
    id: 1,
    content: 'This is a mock post',
    // Uncomment the line below to remove Storybook error on home page
    // subPosts: [{ id: 1, content: 'This is a mock subpost' }],
  },
})
