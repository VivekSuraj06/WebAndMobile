import type { Options } from '@wdio/types';
import { config as buildConfig } from './base.wdio.conf.js';

const webCap = {
  browserName: 'Chrome',
  'bstack:options': {
    os: 'Windows',
    osVersion: '11',
    browserVersion: 'latest',
    timeouts: { implicit: 10000}
  }
}

export const config: Options.Testrunner = {
  ...buildConfig,
  capabilities: [webCap],
  services: ['browserstack', 'shared-store'],
  user: ' ', //Update/Add your user ID
  key: ' ', // Update/Add your Access Key
  region: 'eu-central-1'
};


















// const androidWebCap = {
//   maxInstances: 1,
//   browserName: 'chrome',
//   platformName: 'Android',
//   browserVersion: 'latest',
//   // Sauce options can be found here https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options
//   'sauce:options': {
//     //tunnelIdentifier: 'YourTunnelName',
//     screenResolution: '1600x1200'
//   }
// };

// export const dynamicConfig: Options.Testrunner = {
//   // user: 'login username',
//   // key: '1234-abcd-...',
//   user: 'mailqatest_cXsLbu',
//   key: 'TEPExGhJQfYqSq4qteYf',
//   region: 'eu-central-1', // or 'eu' or 'apac',
//   capabilities: [androidWebCap],
//   services: ['browserstack', 'shared-store']
// };
