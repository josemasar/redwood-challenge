import { ideas, idea, createIdea, updateIdea, deleteIdea } from './ideas'

describe('ideas', () => {
  scenario('returns all ideas', async (scenario) => {
    const result = await ideas()

    expect(result.length).toEqual(Object.keys(scenario.idea).length)
  })

  scenario('returns a single idea', async (scenario) => {
    const result = await idea({ id: scenario.idea.one.id })

    expect(result).toEqual(scenario.idea.one)
  })

  scenario('creates a idea', async (scenario) => {
    const result = await createIdea({
      input: {
        product: 'String',
        system: 'String',
        partNum: 'String',
        vendor: 'String',
        title: 'String',
        body: 'String',
        value: 8342998,
        author: 'String',
      },
    })

    expect(result.opportunity).toEqual()
    expect(result.product).toEqual('String')
    expect(result.system).toEqual('String')
    expect(result.partNum).toEqual('String')
    expect(result.vendor).toEqual('String')
    expect(result.title).toEqual('String')
    expect(result.body).toEqual('String')
    expect(result.value).toEqual(8342998)
    expect(result.author).toEqual('String')
  })

  scenario('updates a idea', async (scenario) => {
    const original = await idea({ id: scenario.idea.one.id })
    const result = await updateIdea({
      id: original.id,
      input: {},
    })

    expect(result.opportunity).toEqual()
  })

  scenario('deletes a idea', async (scenario) => {
    const original = await deleteIdea({ id: scenario.idea.one.id })
    const result = await idea({ id: original.id })

    expect(result).toEqual(null)
  })
})
