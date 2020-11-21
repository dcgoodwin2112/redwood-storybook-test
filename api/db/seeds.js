/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')

dotenv.config()
const db = new PrismaClient()

async function main() {
  // Seed data is database data that needs to exist for your app to run.
  // Ideally this file should be idempotent: running it multiple times
  // will result in the same database state (usually by checking for the
  // existence of a record before trying to create it). For example:
  //
  //   const existing = await db.user.findMany({ where: { email: 'admin@email.com' }})
  //   if (!existing.length) {
  //     await db.user.create({ data: { name: 'Admin', email: 'admin@email.com' }})
  //   }
  const posts = await db.post.findMany()
  if (!posts.length) {
    const post = await db.post.create({
      data: { content: 'This is a seed post' },
    })
    if (post?.id) {
      await db.subPost.create({
        data: {
          content: 'This is a seed subPost',
          post: { connect: { id: post.id } },
        },
      })
    }
    console.info('Post and SubPost content has been seeded.')
  }

  console.info('No data to seed. See api/db/seeds.js for info.')
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })
