import { FC, PropsWithChildren } from 'react'

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className="h-screen flex items-center justify-center">{children}</div>
}
