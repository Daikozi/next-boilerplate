import { ComponentMeta, ComponentStory } from '@storybook/react'

import { getReduxDecorator } from '@Test/decorators'

import Counter from './Counter'

export default {
  title: 'Test/Counter',
  component: Counter,
  decorators: [getReduxDecorator()],
} as ComponentMeta<typeof Counter>

const Template: ComponentStory<typeof Counter> = () => <Counter />

export const Default = Template.bind({})
