import { combineReducers, Reducer, CombinedState, AnyAction } from 'redux';

// Reducers
import counterReducer, { CounterState } from './counter/counterSlice';
import appReducer, { AppState } from './app/appSlice';
// import authReducer, { AuthState } from './auth/authSlice';
// import debugTogglesReducer, { DebugTogglesState } from './debug-toggles/debugTogglesSlice';
import i18nReducer, { I18nState } from './i18n/i18nSlice';

export interface IAppState {
  // debugToggles: DebugTogglesState;
  // auth: AuthState;
  counter: CounterState;
  i18n: I18nState;
  app: AppState;
}

type RootReducerType = () => Reducer<CombinedState<IAppState>, AnyAction>;

export const rootReducer: RootReducerType = () => combineReducers({
  // debugToggles: debugTogglesReducer,
  // auth: authReducer,
  counter: counterReducer,
  i18n: i18nReducer,
  app: appReducer,
});

export type ReducerState = ReturnType<typeof rootReducer>;

export default rootReducer;
