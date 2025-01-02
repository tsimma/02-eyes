import { FC } from 'react'
import { EyesState } from './types/EyesState'

export const Eyes: FC<{
  state: EyesState
}> = ({ state }) => {
  return (
    <div
      className={`hover:bg-[url("./resources/closedeyes.jpg")] bg-[url("./resources/openeyes.jpg")] w-[500px] h-[200px] bg-cover bg-center bg-no-repeat  contrast-125`}
    >
      {state}
    </div>
  )
}
