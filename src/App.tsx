import { Eyes } from './Eyes'
import { FC, useState } from 'react'
import { EyesContainer } from './EyesContainer'
import { Coordinates } from './types/Coordinates'
import { useEyesState } from './hooks/useEyesState'

export const App: FC = () => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null)
  const state = useEyesState(coordinates)

  return (
    <EyesContainer setCoordinates={setCoordinates}>
      <Eyes state={state} />
    </EyesContainer>
  )
}
