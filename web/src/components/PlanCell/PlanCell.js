import Plan from 'src/components/Plan'

export const QUERY = gql`
  query FIND_PLAN_BY_ID($id: Int!) {
    plan: plan(id: $id) {
      id
      ideaId
      owner
      plannedStart
      plannedEnd
      progress
      finish
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Plan not found</div>

export const Success = ({ plan }) => {
  return <Plan plan={plan} />
}
