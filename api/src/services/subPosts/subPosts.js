import { db } from 'src/lib/db'

export const subPosts = () => {
  return db.subPost.findMany()
}

export const SubPost = {
  post: (_obj, { root }) =>
    db.subPost.findOne({ where: { id: root.id } }).post(),
}
