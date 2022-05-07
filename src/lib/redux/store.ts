import { configureStore, ThunkAction, Action, AnyAction /* getDefaultMiddleware */ } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { TypedUseSelectorHook } from 'react-redux';
// Side Effects modules
import thunk, { ThunkDispatch } /* { ThunkMiddleware } */ from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
// Middlewares
import logger from 'redux-logger';
// Persistence modules
// import localForage from 'localforage';
import storage from './storage';
import { persistReducer, persistStore, PERSIST, PURGE, FLUSH, REHYDRATE, PAUSE, REGISTER } from 'redux-persist';
import { createStateSyncMiddleware, initStateWithPrevTab, Config as ReduxStateSyncConfigType } from 'redux-state-sync';
// Reducers and Actions
import rootReducer from './reducers';
import { updateLocale } from './i18n/i18nActions';
// import { updateReleaseToggle, updateUiToggle } from './debug-toggles/debugTogglesActions';
// import { resetReleaseToggles, resetUiToggles } from './debug-toggles/debugTogglesSlice';
// import { setReduxReady } from 'client/redux/app/actions';
// import rootSaga from './sagas';

/**
 * Redux Persist + Redux State Sync configurations
 */
const persistConfig = {
  key: 'primary',
  storage: storage,
  whitelist: [
    'app',
    'counter',
    'i18n'
  ], // place to select which state you want to persist
  // blacklist: ['router'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer());

const reduxStateSyncConfig: ReduxStateSyncConfigType = {
  channel: 'mobaverse_marketplace_web_channel',
  // blacklist: [PERSIST, PURGE],
  // Use whitelist instead to listen for actions, import constants for each repos
  whitelist: [
    'LOGIN_SUCCESS',
    'LOGOUT_SUCCESS',
    updateLocale.fulfilled.toString(), // i18n/updateLocale/fulfilled
    // updateReleaseToggle.fulfilled.toString(), // debugToggles/updateReleaseToggle/fulfilled
    // updateUiToggle.fulfilled.toString(), // debugToggles/updateUiToggle/fulfilled
    // resetReleaseToggles.toString(), // debugToggles/resetReleaseToggles
    // resetUiToggles.toString(), // debugToggles/resetUiToggles
  ],
  // enforce a type, oneOf['native', 'idb', 'localstorage', 'node']
  // broadcastChannelOption: { type: 'localstorage' },
  // Map immutable object to js
  // prepareState: state => state.toJS(),
}


/**
 * Middleware configurations
 *
 * A. sagaMiddleware   : Makes redux-sagas work
 */
const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  createStateSyncMiddleware(reduxStateSyncConfig),
  thunk,
];


/**
 * Enhancer configurations
 *
 * A. composeWithDevTools : Compose Enhancer usage for redux-devtools-extension
 */
// const composeEnhancers = composeWithDevTools({
//   // Specify here name, actionsBlacklist, actionsCreators and other options
// });

/**
 * Store configurations using @reduxjs/toolkit
 *
 * A. reducer
 * B. middleware
 * C. enhancers
 *
 */

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
          // 'auth/updateAuthUser',
          // 'auth/register/fulfilled',
          // 'auth/login/fulfilled',
          // 'auth/updateProfile/pending',
          // 'auth/updateProfile/fulfilled',
        ],
      },
    })
    .prepend(
      ...middlewares
    )
    .concat(sagaMiddleware)
    .concat(logger)
  },
  devTools: {
    serialize: {
      options: true
    }
  },
  // enhancers: [composeEnhancers],
});

// Old Way
// const store = createStore(
//   persistedReducer,
//   composeEnhancers(
//     applyMiddleware(...middlewares),
//   )
// );
// const action = (type: String) => store.dispatch({type});

/**
 * Redux Saga initializations
 */
// sagaMiddleware.run(rootSaga);
// store.runSaga = sagaMiddleware.run; // sagaMiddleware.run(rootSaga);
// store.injectedReducers = {}; // Reducer registry
// store.injectedSagas = {}; // Saga registry

/**
 * Redux Persist initializations
 */
initStateWithPrevTab(store);
const persistor = persistStore(store);

// if (process.env.NODE_ENV !== 'production' && module.hot) {
//   module.hot.accept('./reducers', () => store.replaceReducer(persistedReducer))
// }

/**
 * Typings
 */
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;
// const action = (type: String) => store.dispatch({type});
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export {
  store,
  persistor
};

export default store;
