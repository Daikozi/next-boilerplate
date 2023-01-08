import { FC } from 'react'
import { Button, Stack, Typography } from '@mui/material'

import { useCounter } from '@Hooks/useCounter'

const Counter: FC = () => {
  const { count, incrementCounter, decrementCounter } = useCounter()

  return (
    <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
      <Button variant="outlined" onClick={() => decrementCounter()}>
        Decrement
      </Button>
      <Typography>{count}</Typography>
      <Button variant="outlined" onClick={() => incrementCounter()}>
        Increment
      </Button>
    </Stack>
  )
}
export default Counter
