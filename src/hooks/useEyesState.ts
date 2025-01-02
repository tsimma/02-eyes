import { useMemo } from 'react'
import { EyesStateFactory } from '../EyesStateFactory'

export function useEyesState(coordinates: [x: number, y: number] | null) {
  return useMemo(() => new EyesStateFactory(coordinates).getState(), [coordinates])
}
