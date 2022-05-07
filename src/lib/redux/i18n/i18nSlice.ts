import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateLocale } from './i18nActions';

// Define a type for the slice state
export interface I18nState {
  locale: string,
  isLoading: boolean,
  error?: Record<string, unknown> | null | undefined,
}

// Define the initial state using that type
const initialState: I18nState = {
  locale: 'en',
  isLoading: false,
  error: null
}

export const i18nSlice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    // updateLocale: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(updateLocale.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(updateLocale.fulfilled, (state, action: PayloadAction<string>) => {
      state.locale = action.payload;
      state.isLoading = false;
    });

    builder.addCase(updateLocale.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);

// export const {} = i18nSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// Other code such as selectors can use the imported `RootState` type
// export const selectLocale = (state: RootState) => state.i18n.locale;

export default i18nSlice.reducer;
