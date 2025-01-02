import { Coordinates } from './types/Coordinates'
import { EyesState } from './types/EyesState'

export class EyesStateFactory {
  constructor(private coordinates: Coordinates | null) {}

  getState(): EyesState {
    if (this.coordinates === null) {
      return EyesState.Direct
    }

    return this.getStateByCoordinates(this.coordinates)
  }

  private getStateByCoordinates([x, y]: Coordinates): EyesState {
    if (x < 0.33) {
      if (y < 0.33) {
        return EyesState.TopLeft
      } else if (y < 0.66) {
        return EyesState.Left
      } else {
        return EyesState.BottomLeft
      }
    } else if (x < 0.66) {
      if (y < 0.33) {
        return EyesState.Top
      } else if (y < 0.66) {
        return EyesState.Closed
      } else {
        return EyesState.Bottom
      }
    } else {
      if (y < 0.33) {
        return EyesState.TopRight
      } else if (y < 0.66) {
        return EyesState.Right
      } else {
        return EyesState.BottomRight
      }
    }
  }
}
