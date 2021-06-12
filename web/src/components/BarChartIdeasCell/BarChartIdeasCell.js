import BarChartIdeas from 'src/components/BarChartIdeas/BarChartIdeas'

export const QUERY = gql`
  query IDEAS {
    ideas {
      id
      opportunity
      value
      active
      finish
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ ideas }) => {
  return <BarChartIdeas data={ideas} />
}
