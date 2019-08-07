import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1565164032628_9715';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  const mongoose = {
    client: {
      url: 'mongodb://localhost:27017/egg-blog',
      option: {},
      //plugins: [createdPlugin, [updatedPlugin, pluginOptions]]
    }
  }
  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
    ...mongoose
  };
};
