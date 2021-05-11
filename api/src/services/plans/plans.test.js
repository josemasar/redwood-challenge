import { plans, plan, createPlan, updatePlan, deletePlan } from './plans'

describe('plans', () => {
  scenario('returns all plans', async (scenario) => {
    const result = await plans()

    expect(result.length).toEqual(Object.keys(scenario.plan).length)
  })

  scenario('returns a single plan', async (scenario) => {
    const result = await plan({ id: scenario.plan.one.id })

    expect(result).toEqual(scenario.plan.one)
  })

  scenario('creates a plan', async (scenario) => {
    const result = await createPlan({
      input: {
        ideaId: 'scenario.plan.two.ideaId',
        owner: 'String',
        plannedStart: '2021-05-11T08:36:35Z',
        plannedEnd: '2021-05-11T08:36:35Z',
        progress: 7466277,
      },
    })

    expect(result.ideaId).toEqual('scenario.plan.two.ideaId')
    expect(result.owner).toEqual('String')
    expect(result.plannedStart).toEqual('2021-05-11T08:36:35Z')
    expect(result.plannedEnd).toEqual('2021-05-11T08:36:35Z')
    expect(result.progress).toEqual(7466277)
  })

  scenario('updates a plan', async (scenario) => {
    const original = await plan({ id: scenario.plan.one.id })
    const result = await updatePlan({
      id: original.id,
      input: { owner: 'String2' },
    })

    expect(result.owner).toEqual('String2')
  })

  scenario('deletes a plan', async (scenario) => {
    const original = await deletePlan({ id: scenario.plan.one.id })
    const result = await plan({ id: original.id })

    expect(result).toEqual(null)
  })
})
