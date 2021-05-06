import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import PlanForm from 'src/components/PlanForm'

export const QUERY = gql`
  query FIND_PLAN_BY_ID($id: Int!) {
    plan: plan(id: $id) {
      id
      ideaId
      owner
      plannedStart
      plannedEnd
      finish
      createdAt
    }
  }
`
const UPDATE_PLAN_MUTATION = gql`
  mutation UpdatePlanMutation($id: Int!, $input: UpdatePlanInput!) {
    updatePlan(id: $id, input: $input) {
      id
      ideaId
      owner
      plannedStart
      plannedEnd
      finish
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ plan }) => {
  const [updatePlan, { loading, error }] = useMutation(UPDATE_PLAN_MUTATION, {
    onCompleted: () => {
      toast.success('Plan updated')
      navigate(routes.plans())
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { ideaId: parseInt(input.ideaId) })
    updatePlan({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Plan {plan.id}</h2>
      </header>
      <div className="rw-segment-main">
        <PlanForm plan={plan} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
