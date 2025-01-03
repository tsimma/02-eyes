import { useMemo } from 'react'
import { EyesStateFactory } from '../EyesStateFactory'
import { EyesState } from '../types/EyesState'
import { Coordinates } from '../types/Coordinates'

export function useEyesState(coordinates: Coordinates | null): EyesState {
  return useMemo(() => new EyesStateFactory(coordinates).getState(), [coordinates])
}
