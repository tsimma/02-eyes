import { FC } from 'react'
import { EyesState } from './types/EyesState'
import closedEyes from './images/closedeyes.jpg'
import openEyes from './images/openeyes.jpg'
import bottomEyes from './images/bottom-eyes.jpg'

const mapping: { [key in EyesState]: string } = {
  [EyesState.Closed]: closedEyes,
  [EyesState.Bottom]: bottomEyes,
  [EyesState.BottomLeft]: openEyes,
  [EyesState.BottomRight]: openEyes,
  [EyesState.Direct]: openEyes,
  [EyesState.Left]: openEyes,
  [EyesState.Right]: openEyes,
  [EyesState.Top]: openEyes,
  [EyesState.TopLeft]: openEyes,
  [EyesState.TopRight]: openEyes,
}

export const Eyes: FC<{
  state: EyesState
}> = ({ state }) => {
  const url = mapping[state]

  return (
    <div
      className="w-[500px] h-[200px] bg-cover bg-center bg-no-repeat contrast-125"
      style={{
        backgroundImage: `url(${url})`,
      }}
    />
  )
}
