import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1565316495645_5855';
  config.security = {
    csrf: {
      enable: false,
    },
  };
  // add your egg config in here
  config.middleware = ['responseOk'];
  /**
    * @see http://mongodb.github.io/node-mongodb-native/2.2/api/Db.html#createCollection
    */
  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/egg-blog',
    options: {
      server: { poolSize: 20 },
      reconnectTries: 10,
      reconnectInterval: 500,
    },
  };
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };
  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
