import CardDashboard from 'src/components/CardDashboard'

export const QUERY = gql`
  query SumIdeasQuery {
    sumIdeas {
      total
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ sumIdeas }) => {
  return (
/*    <>
    <ul>
      {sumIdeas.map((item) => {
        return <li key={item}>{JSON.stringify(item)}</li>
      })}
    </ul> */
    <CardDashboard data= {sumIdeas} />
   // </>
  )
}
