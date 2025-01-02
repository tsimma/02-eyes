import { FC, useMemo } from 'react'
import { EyesState } from './types/EyesState'
import { getImageUrl } from './getImageUrl'

export const Eyes: FC<{
  state: EyesState
}> = ({ state }) => {
  const url = useMemo(() => getImageUrl(state), [state])

  return (
    <div
      className="w-[500px] h-[200px] bg-cover bg-center bg-no-repeat contrast-125"
      style={{
        backgroundImage: `url(${url})`,
      }}
    />
  )
}
