import { tasks, task, createTask, updateTask, deleteTask } from './tasks'

describe('tasks', () => {
  scenario('returns all tasks', async (scenario) => {
    const result = await tasks()

    expect(result.length).toEqual(Object.keys(scenario.task).length)
  })

  scenario('returns a single task', async (scenario) => {
    const result = await task({ id: scenario.task.one.id })

    expect(result).toEqual(scenario.task.one)
  })

  scenario('creates a task', async (scenario) => {
    const result = await createTask({
      input: {
        planId: 'scenario.task.two.planId',
        type: 'String',
        owner: 'String',
        Requiredby: '2021-05-11T08:36:48Z',
        status: 'String',
        Start: '2021-05-11T08:36:48Z',
        Finish: '2021-05-11T08:36:48Z',
      },
    })

    expect(result.planId).toEqual('scenario.task.two.planId')
    expect(result.type).toEqual('String')
    expect(result.owner).toEqual('String')
    expect(result.Requiredby).toEqual('2021-05-11T08:36:48Z')
    expect(result.status).toEqual('String')
    expect(result.Start).toEqual('2021-05-11T08:36:48Z')
    expect(result.Finish).toEqual('2021-05-11T08:36:48Z')
  })

  scenario('updates a task', async (scenario) => {
    const original = await task({ id: scenario.task.one.id })
    const result = await updateTask({
      id: original.id,
      input: { type: 'String2' },
    })

    expect(result.type).toEqual('String2')
  })

  scenario('deletes a task', async (scenario) => {
    const original = await deleteTask({ id: scenario.task.one.id })
    const result = await task({ id: original.id })

    expect(result).toEqual(null)
  })
})
