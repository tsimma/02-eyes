import { FC } from 'react'
import { Coordinates } from './Coordinates'

export const Eyes: FC<{
  coordinates: Coordinates | null
}> = ({ coordinates }) => {
  return (
    <div
      className={`hover:bg-[url("./resources/closedeyes.jpg")] bg-[url("./resources/openeyes.jpg")] w-[500px] h-[200px] bg-cover bg-center bg-no-repeat  contrast-125`}
    >
      {coordinates ? `${coordinates[0].toFixed(2)} x ${coordinates[1].toFixed(2)}` : null}
    </div>
  )
}
