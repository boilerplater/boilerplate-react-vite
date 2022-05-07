/// <reference types="vite/client" />

interface ImportMetaEnv {
  // more env variables...
  readonly VITE_APP_PKG_VERSION: string
  readonly VITE_APP_PKG_NAME: string
  readonly VITE_APP_ENV: string
  readonly VITE_APP_CDN_URL: string
  readonly VITE_APP_MOCK_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
