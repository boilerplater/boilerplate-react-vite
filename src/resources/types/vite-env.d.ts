/// <reference types="vite/client" />

interface ImportMetaEnv {
  // more env variables...
  VITE_APP_PKG_VERSION: string;
  VITE_APP_PKG_NAME: string;

  VITE_APP_ENV: string;
  VITE_APP_ATLAS_API_URL: string;
}
