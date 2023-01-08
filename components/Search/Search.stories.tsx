import { ComponentMeta, ComponentStory } from '@storybook/react'

import Search from './Search'

export default {
  title: 'Test/Search',
  component: Search,
} as ComponentMeta<typeof Search>

const Template: ComponentStory<typeof Search> = () => <Search />

export const Default = Template.bind({})
