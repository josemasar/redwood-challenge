import { render } from '@redwoodjs/testing'

import CardDashboard from './CardDashboard'

describe('CardDashboard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CardDashboard />)
    }).not.toThrow()
  })
})
