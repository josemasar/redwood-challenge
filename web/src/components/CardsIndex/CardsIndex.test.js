import { render } from '@redwoodjs/testing'

import CardsIndex from './CardsIndex'

describe('CardsIndex', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CardsIndex />)
    }).not.toThrow()
  })
})
