import { render } from '@redwoodjs/testing'

import BarChartIdeas from './BarChartIdeas'

describe('BarChartIdeas', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BarChartIdeas />)
    }).not.toThrow()
  })
})
