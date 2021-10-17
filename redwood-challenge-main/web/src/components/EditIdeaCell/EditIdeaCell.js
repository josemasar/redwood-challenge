import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import IdeaForm from 'src/components/IdeaForm'

export const QUERY = gql`
  query FIND_IDEA_BY_ID($id: Int!) {
    idea: idea(id: $id) {
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
const UPDATE_IDEA_MUTATION = gql`
  mutation UpdateIdeaMutation($id: Int!, $input: UpdateIdeaInput!) {
    updateIdea(id: $id, input: $input) {
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

export const Success = ({ idea }) => {
  const [updateIdea, { loading, error }] = useMutation(UPDATE_IDEA_MUTATION, {
    onCompleted: () => {
      toast.success('Idea updated')
      navigate(routes.ideas())
    },
  })

  const onSave = (input, id) => {
    updateIdea({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Idea {idea.id}</h2>
      </header>
      <div className="rw-segment-main">
        <IdeaForm idea={idea} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
