import { db } from 'src/lib/db'

export const posts = () => {
  return db.post.findMany()
}

export const Post = {
  subPosts: (_obj, { root }) =>
    db.post.findOne({ where: { id: root.id } }).subPosts(),
}
