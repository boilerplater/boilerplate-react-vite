import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState, AppDispatch } from '../store';

/**
 * Increase By Amount - Action Creator
 */
const incrementByAmount = createAsyncThunk<number, number, { dispatch: AppDispatch, state: RootState }>(
  'counter/incrementByAmount',
  // Declare the type your function argument here:
  async (amount: number) => {
    // const response = await fetch(`https://reqres.in/api/users/${amount}`)
    // Inferred return type: Promise<MyData>
    // return (await response.json()) as MyData
    return amount as number;
  }
);

export {
  incrementByAmount
}
