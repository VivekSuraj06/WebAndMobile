const headless: boolean = process.env.HEADLESS as unknown as boolean;
import type { Options } from '@wdio/types';
import { config as buildConfig } from './base.wdio.conf.ts';

const iOSCap = {
        'bstack:options': {
          deviceName: 'iPhone 14 Pro Max',
          platformVersion: '16',
          platformName: 'ios',
          projectName: "BrowserStack Samples",
          buildName: 'browserstack build',
          sessionName: 'BStack parallel webdriverio-appium',
          debug: true,
          interactiveDebugging: true,
          networkLogs: true
        }
  }

export const config: Options.Testrunner = {
  ...buildConfig,
  capabilities: [iOSCap],
  services: [
    [
      'browserstack',
      {
        app: 'bs://e1c92813ad24e49d4f3bd647dcab5d5fbc35c66d', //Upload the app in browserstack and replace the app path
        browserstackLocal: true
      },
    ], 'shared-store'
  ],
  user: ' ', // Replace/Add your username
  key: ' ', // Replace/Add your access key
  hostname: 'hub.browserstack.com',
  region: 'eu-central-1',
};
