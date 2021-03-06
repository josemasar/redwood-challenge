import { Link, routes } from '@redwoodjs/router'

import Ideas from 'src/components/Ideas'

export const QUERY = gql`
  query IDEAS {
    ideas {
      id
      opportunity
      product
      system
      partNum
      vendor
      title
      body
      value
      author
      active
      finish
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No ideas yet. '}
      <Link to={routes.newIdea()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ ideas }) => {
  return <Ideas ideas={ideas} />
}
