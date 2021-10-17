import { render } from '@redwoodjs/testing'

import FrameAdmin from './FrameAdmin'

describe('FrameAdmin', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FrameAdmin />)
    }).not.toThrow()
  })
})
