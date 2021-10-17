import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import TaskForm from 'src/components/TaskForm'

import { QUERY } from 'src/components/TasksCell'

const CREATE_TASK_MUTATION = gql`
  mutation CreateTaskMutation($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
    }
  }
`

const NewTask = () => {
  const [createTask, { loading, error }] = useMutation(CREATE_TASK_MUTATION, {
    onCompleted: () => {
      toast.success('Task created')
      navigate(routes.tasks())
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { planId: parseInt(input.planId) })
    createTask({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Task</h2>
      </header>
      <div className="rw-segment-main">
        <TaskForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTask
