import { useMemo } from 'react'
import { EyesStateFactory } from '../EyesStateFactory'
import { EyesState } from '../types/EyesState'

export function useEyesState(coordinates: [x: number, y: number] | null): EyesState {
  return useMemo(() => new EyesStateFactory(coordinates).getState(), [coordinates])
}
