import { MouseEvent, MouseEventHandler } from 'react'
import { Coordinates } from './types/Coordinates'

export function useEyesContainerMouseMoveHandler(
  setCoordinates: (coordinates: Coordinates) => void,
): MouseEventHandler {
  return (event: MouseEvent) => {
    const containerElement = event.currentTarget
    const rect = containerElement.getBoundingClientRect()

    const relativeX = event.clientX - rect.x
    const relativeY = event.clientY - rect.y

    const x = relativeX / rect.width
    const y = relativeY / rect.height

    setCoordinates([x, y])
  }
}
