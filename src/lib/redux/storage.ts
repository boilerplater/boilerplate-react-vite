import localForage from 'localforage';
// import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

// localForage.config({
//   driver      : localForage.INDEXEDDB, // Force WebSQL; same as using setDriver()
//   name        : 'mobaverseMarketplaceWeb',
//   // version     : 1.0,
//   // size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
//   // storeName   : 'keyvaluepairs', // Should be alphanumeric, with underscores.
//   // description : 'some description'
// });

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== 'undefined'
    ? localForage // createWebStorage('local')
    : createNoopStorage();

export default storage;
