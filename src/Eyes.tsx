import { FC } from 'react'

export const Eyes: FC<{
  x: number
  y: number
}> = ({ x, y }) => {
  return (
    <div
      className={`hover:bg-[url("./resources/closedeyes.jpg")] bg-[url("./resources/openeyes.jpg")] w-[500px] h-[200px] bg-cover bg-center bg-no-repeat  contrast-125`}
    >
      {x}x{y}
    </div>
  )
}
