import { FC } from 'react'
import { EyesState } from './types/EyesState'

export const Eyes: FC<{
  state: EyesState
}> = ({ state }) => {
  return (
    <div
      className={`hover:bg-[url("./images/closedeyes.jpg")] bg-[url("./images/openeyes.jpg")] w-[500px] h-[200px] bg-cover bg-center bg-no-repeat  contrast-125`}
    >
      {state}
    </div>
  )
}
