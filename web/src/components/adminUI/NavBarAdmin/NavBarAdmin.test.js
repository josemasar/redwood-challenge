import { render } from '@redwoodjs/testing'

import NavBarAdmin from './NavBarAdmin'

describe('NavBarAdmin', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavBarAdmin />)
    }).not.toThrow()
  })
})
