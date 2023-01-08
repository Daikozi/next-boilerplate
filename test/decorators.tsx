import { Provider } from 'react-redux'
import { PartialStoryFn } from '@storybook/csf'
import { ReactFramework } from '@storybook/react'

import { RootState } from '@Redux/rootReducer'
import { createMyStore } from '@Redux/store'

export const getReduxDecorator =
  <Args,>(initialState?: Partial<RootState>) =>
  (StoryFn: PartialStoryFn<ReactFramework, Args>): JSX.Element =>
    (
      <Provider store={createMyStore(initialState)}>
        <StoryFn />
      </Provider>
    )
