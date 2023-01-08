import { useDispatch, useSelector } from 'react-redux'

import { selectCount } from '@Redux/selectors/counter'
import { decrement, increment, incrementByAmount } from '@Redux/slices/counterSlice'

type UseCounterReturnType = {
  count: number
  incrementCounter: () => void
  decrementCounter: () => void
  incrementByAmountCounter: (amount: number) => void
}

export const useCounter = (): UseCounterReturnType => {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  const incrementCounter = () => dispatch(increment())
  const decrementCounter = () => dispatch(decrement())
  const incrementByAmountCounter = (amount: number) => dispatch(incrementByAmount(amount))

  return { count, incrementCounter, decrementCounter, incrementByAmountCounter }
}
