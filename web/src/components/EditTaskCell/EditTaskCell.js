import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import TaskForm from 'src/components/TaskForm'

export const QUERY = gql`
  query FIND_TASK_BY_ID($id: Int!) {
    task: task(id: $id) {
      id
      planId
      type
      owner
      Requiredby
      status
      Start
      Finish
    }
  }
`
const UPDATE_TASK_MUTATION = gql`
  mutation UpdateTaskMutation($id: Int!, $input: UpdateTaskInput!) {
    updateTask(id: $id, input: $input) {
      id
      planId
      type
      owner
      Requiredby
      status
      Start
      Finish
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ task }) => {
  const [updateTask, { loading, error }] = useMutation(UPDATE_TASK_MUTATION, {
    onCompleted: () => {
      toast.success('Task updated')
      navigate(routes.tasks())
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { planId: parseInt(input.planId) })
    updateTask({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Task {task.id}</h2>
      </header>
      <div className="rw-segment-main">
        <TaskForm task={task} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
