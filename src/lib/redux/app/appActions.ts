import { createAction } from '@reduxjs/toolkit';

/**
 * Update Redux Ready - Action Creator
 */
// const updateReduxReady = createAction<boolean>('app/updateReduxReady');
const updateReduxReady = createAction('app/updateReduxReady', (isReduxReady: boolean) => {
  return {
    payload: isReduxReady
  };
});

// const updateSiteLocation = createAction<string>('app/updateSiteLocation');
const updateSiteLocation = createAction('app/updateSiteLocation', (siteLocation: string) => {
  const defaultValue = 'PH';
  const acceptedValues = ['PH'];

  if (!acceptedValues.includes(siteLocation)) {
    siteLocation = defaultValue;
  }

  return {
    payload: siteLocation
  };
});

export {
  updateReduxReady,
  updateSiteLocation
};
