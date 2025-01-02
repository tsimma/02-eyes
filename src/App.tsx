import { Eyes } from './Eyes'
import { FC } from 'react'
import { Container } from './Container'

export const App: FC = () => {
  return (
    <Container>
      <Eyes x={12} y={23} />
    </Container>
  )
}
