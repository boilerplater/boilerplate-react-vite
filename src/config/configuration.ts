const envVars = () => ({
    NODE_ENV: process.env.NODE_ENV || 'production',
    APP_ENV: import.meta.env.VITE_APP_ENV || 'prod',
    CDN_URL: import.meta.env.VITE_APP_CDN_URL,
    MOCK_API_URL: import.meta.env.VITE_APP_MOCK_API_URL,
    PKG_NAME: import.meta.env.VITE_APP_PKG_NAME,
    PKG_VERSION: import.meta.env.VITE_APP_PKG_VERSION,
});

const configVars = envVars();

export default configVars;
