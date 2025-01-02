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
    if (this.isFirstColumn(x)) {
      if (this.isFirstRow(y)) {
        return EyesState.TopLeft
      } else if (this.isSecondRow(y)) {
        return EyesState.Left
      } else {
        return EyesState.BottomLeft
      }
    } else if (this.isSecondColumn(x)) {
      if (this.isFirstRow(y)) {
        return EyesState.Top
      } else if (this.isSecondRow(y)) {
        return EyesState.Closed
      } else {
        return EyesState.Bottom
      }
    } else {
      if (this.isFirstRow(y)) {
        return EyesState.TopRight
      } else if (this.isSecondRow(y)) {
        return EyesState.Right
      } else {
        return EyesState.BottomRight
      }
    }
  }

  private isSecondRow(y: number) {
    return y < 0.66
  }

  private isFirstRow(y: number) {
    return y < 0.33
  }

  private isSecondColumn(x: number) {
    return x < 0.75
  }

  private isFirstColumn(x: number) {
    return x < 0.25
  }
}
