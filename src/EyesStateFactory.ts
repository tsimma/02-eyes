import { Coordinates } from './types/Coordinates'
import { EyesState } from './types/EyesState'

export class EyesStateFactory {
  constructor(private coordinates: Coordinates | null) {}

  getState(): EyesState {
    return EyesState.Closed
  }
}
