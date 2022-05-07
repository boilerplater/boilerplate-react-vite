import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { updateReduxReady } from './appActions';

// Define a type for the slice state
export interface AppState {
  reduxReady: boolean,
  darkMode?: boolean,
  siteLocation: string,
}

// Define the initial state using that type
const initialState: AppState = {
  reduxReady: false,
  siteLocation: 'PH',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateReduxReady: (state, action: PayloadAction<boolean>) => {
      state.reduxReady = action.payload
    },
    updateDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload
    },
    updateSiteLocation: (state, action: PayloadAction<string>) => {
      state.siteLocation = action.payload
    },
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

export const { updateReduxReady, updateDarkMode, updateSiteLocation } = appSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// Other code such as selectors can use the imported `RootState` type
// export const selectLocale = (state) => state.i18n.locale;

export default appSlice.reducer;
