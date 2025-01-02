import { Coordinates } from './types/Coordinates'
import { EyesState } from './types/EyesState'

export class EyesStateFactory {
  private config = [
    [EyesState.TopLeft, EyesState.Top, EyesState.TopRight],
    [EyesState.Left, EyesState.Closed, EyesState.Right],
    [EyesState.BottomLeft, EyesState.Bottom, EyesState.BottomRight],
  ]

  constructor(private coordinates: Coordinates | null) {}

  getState(): EyesState {
    return this.coordinates ? this.getStateByCoordinates(this.coordinates) : EyesState.Direct
  }

  private getStateByCoordinates([x, y]: Coordinates): EyesState {
    return this.config[this.getRowIndex(y)][this.getColumnIndex(x)]
  }

  private getColumnIndex(x: number) {
    return this.isFirstColumn(x) ? 0 : this.isSecondColumn(x) ? 1 : 2
  }

  private getRowIndex(y: number) {
    return this.isFirstRow(y) ? 0 : this.isSecondRow(y) ? 1 : 2
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
