import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, TypedDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<TypedDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
