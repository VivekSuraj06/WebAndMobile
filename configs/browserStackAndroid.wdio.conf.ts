import type { Options } from '@wdio/types';
import { config as buildConfig } from './base.wdio.conf.ts';

const androidCap = {
        'bstack:options': {
          deviceName: 'Google Pixel 6 Pro',
          platformVersion: '14.0',
          platformName: 'android',
          projectName: "BrowserStack Samples",
          buildName: 'browserstack build',
          sessionName: 'BStack parallel webdriverio-appium',
          interactiveDebugging: true,
          networkLogs: false,
        },
  }

export const config: Options.Testrunner = {
  ...buildConfig,
  capabilities: [androidCap],
  services: [
    [
      'browserstack',
      {
       //Upload the app in browserstack and replace the app path
        app: 'bs://42c9fa854987c6008da408b82e655aa35303e696',
        browserstackLocal: true
      },
    ], 'shared-store'
  ],
  user: ' ', // Replace/Add your username
  key: ' ', // Replace/Add your accessKey
  hostname: 'hub.browserstack.com',
  region: 'eu-central-1'
};
