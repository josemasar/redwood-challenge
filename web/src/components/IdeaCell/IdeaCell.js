import Idea from 'src/components/Idea'

export const QUERY = gql`
  query FIND_IDEA_BY_ID($id: Int!) {
    idea: idea(id: $id) {
      id
      opps
      product
      system
      partNum
      vendor
      title
      body
      value
      author
      active
      plannedStart
      plannedEnd
      finish
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Idea not found</div>

export const Success = ({ idea }) => {
  return <Idea idea={idea} />
}
