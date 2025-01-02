import { Eyes } from './Eyes'
import { FC, useMemo, useState } from 'react'
import { EyesContainer } from './EyesContainer'
import { Coordinates } from './types/Coordinates'
import { EyesState } from './types/EyesState'

export const App: FC = () => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null)
  const state = useMemo(() => EyesState.Closed, [coordinates])

  return (
    <EyesContainer setCoordinates={setCoordinates}>
      <Eyes state={state} />
    </EyesContainer>
  )
}
