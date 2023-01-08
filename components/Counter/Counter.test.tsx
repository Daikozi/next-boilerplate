import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import * as stories from './Counter.stories'

const { Default } = composeStories(stories)

describe('Counter', () => {
  it('should render the counter', () => {
    render(<Default />)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('should increment the counter', async () => {
    render(<Default />)
    await userEvent.click(screen.getByText('Increment'))
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('should decrement the counter', async () => {
    render(<Default />)
    await userEvent.click(screen.getByText('Decrement'))
    expect(screen.getByText('-1')).toBeInTheDocument()
  })
})
