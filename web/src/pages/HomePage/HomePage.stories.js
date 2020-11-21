import HomePage from './HomePage'
import { standard as posts } from 'src/components/PostsCell/PostsCell.mock'

export const generated = () => {
  mockGraphQLQuery('PostsQuery', () => {
    return posts()
  })
  return <HomePage />
}

export default { title: 'Pages/HomePage' }
