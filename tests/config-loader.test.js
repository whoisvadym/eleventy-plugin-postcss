const test = require('ava');
const { ConfigLoaderConstructor } = require('../src/config-loader');

test('tryLoad - uses loader to fetch plugins and options', async (t) => {
  const actualPlugins = ['plugin1', 'plugin2'];
  const actualOptions = { option1: 'foo', option2: 'bar' };
  const customLoader = (() => Promise.resolve({ plugins: actualPlugins, options: actualOptions }));
  const configLoader = new ConfigLoaderConstructor();

  // Try loading the config
  await configLoader.tryLoad(customLoader);

  t.deepEqual(configLoader._plugins, actualPlugins);
  t.deepEqual(configLoader._options, actualOptions);
});

test('tryLoad - silently fails with defaults if unable to load for some reason', async (t) => {
  const failingLoader = () => Promise.reject();
  const configLoader = new ConfigLoaderConstructor();

  await configLoader.tryLoad(failingLoader);

  t.deepEqual(configLoader._plugins, []);
  t.deepEqual(configLoader._options, {});
});

test('getters', (t) => {
  const configLoader = new ConfigLoaderConstructor();

  t.true(typeof configLoader.getPlugins === 'function');
  t.true(typeof configLoader.getOptions === 'function');
});

test('getProcessorConfig', async (t) => {
  const configLoader = new ConfigLoaderConstructor();

  await configLoader.tryLoad(() => ({ plugins: ['plugin1'], options: { option1: 'foo' } }));

  const actualTo = 'destination/';
  const actualFrom = 'source/';

  const processorConfigs = configLoader.getProcessorConfig(actualFrom, actualTo);

  t.deepEqual(processorConfigs, { option1: 'foo', from: actualFrom, to: actualTo });
});
