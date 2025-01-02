import { Eyes } from './Eyes'
import { FC, useState } from 'react'
import { EyesContainer } from './EyesContainer'
import { Coordinates } from './Coordinates'

export const App: FC = () => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null)

  return (
    <EyesContainer setCoordinates={setCoordinates}>
      <Eyes coordinates={coordinates} />
    </EyesContainer>
  )
}
