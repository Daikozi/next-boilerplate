import { RootState } from '@Redux/rootReducer'

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState): number => state.counter.value
