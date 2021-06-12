import { render } from '@redwoodjs/testing'

import ResultsPage from './ResultsPage'

describe('ResultsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ResultsPage />)
    }).not.toThrow()
  })
})
