import { FC, PropsWithChildren } from 'react'
import { Coordinates } from './Coordinates'
import { useEyesContainerMouseMoveHandler } from './useEyesContainerMouseMoveHandler'

type Props = PropsWithChildren<{
  setCoordinates: (coordinates: Coordinates | null) => void
}>

export const EyesContainer: FC<Props> = ({ children, setCoordinates }) => {
  const mouseMoveHandler = useEyesContainerMouseMoveHandler(setCoordinates)

  return (
    <div
      className="m-32 p-32 inline-flex items-center justify-center"
      onMouseMove={mouseMoveHandler}
      onMouseLeave={() => {
        setCoordinates(null)
      }}
    >
      {children}
    </div>
  )
}
