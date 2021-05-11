import Task from 'src/components/Task'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Task not found</div>

export const Success = ({ task }) => {
  return <Task task={task} />
}
