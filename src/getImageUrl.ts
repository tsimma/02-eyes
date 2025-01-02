import { EyesState } from './types/EyesState'
import closedEyes from './images/closedeyes.jpg'
import openEyes from './images/openeyes.jpg'

export function getImageUrl(state: EyesState): string {
  const mapping: { [key in EyesState]: string } = {
    [EyesState.Closed]: closedEyes,
    [EyesState.Bottom]: '/bottom-eyes.jpg',
    [EyesState.BottomLeft]: openEyes,
    [EyesState.BottomRight]: openEyes,
    [EyesState.Direct]: openEyes,
    [EyesState.Left]: openEyes,
    [EyesState.Right]: openEyes,
    [EyesState.Top]: openEyes,
    [EyesState.TopLeft]: openEyes,
    [EyesState.TopRight]: openEyes,
  }

  return mapping[state]
}
