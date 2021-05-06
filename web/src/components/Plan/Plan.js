import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/PlansCell'

const DELETE_PLAN_MUTATION = gql`
  mutation DeletePlanMutation($id: Int!) {
    deletePlan(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Plan = ({ plan }) => {
  const [deletePlan] = useMutation(DELETE_PLAN_MUTATION, {
    onCompleted: () => {
      toast.success('Plan deleted')
      navigate(routes.plans())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete plan ' + id + '?')) {
      deletePlan({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Plan {plan.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{plan.id}</td>
            </tr>
            <tr>
              <th>Idea id</th>
              <td>{plan.ideaId}</td>
            </tr>
            <tr>
              <th>Owner</th>
              <td>{plan.owner}</td>
            </tr>
            <tr>
              <th>Planned start</th>
              <td>{timeTag(plan.plannedStart)}</td>
            </tr>
            <tr>
              <th>Planned end</th>
              <td>{timeTag(plan.plannedEnd)}</td>
            </tr>
            <tr>
              <th>Finish</th>
              <td>{checkboxInputTag(plan.finish)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(plan.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPlan({ id: plan.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(plan.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Plan
