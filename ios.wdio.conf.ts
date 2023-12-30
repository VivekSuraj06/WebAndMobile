import type { Options } from '@wdio/types';
import { config as buildConfig } from './base.wdio.conf.js';
import * as path from 'path';

const iOSCap = {
  maxInstances: 1, 
  platformName: 'iOS',
  'appium:platformName': 'iOS',
  'appium:deviceName': 'iPhone 11', //Update your IOS device Name
  'appium:platformVersion': '15.2', // Update your device osVersion
  'appium:automationName': 'XCUITest',
  'appium:app':path.resolve(`./apps/dailymail.apk`),
  acceptInsecureCerts: true,
  timeouts: { implicit: 60000, pageLoad: 60000, script: 60000 }
};

export const config: Options.Testrunner = {
  ...buildConfig,
  capabilities: [iOSCap],
  services: [
    [
      'appium',
      {
        command: 'appium',
        args: {
          debugLogSpacing: true,
          sessionOverride: true,
          port: 4723,
          allowInsecure: 'chromedriver_autodownload'
        }
      }
    ],
    'shared-store'
  ],
  path: '/wd/hub',
  port: 4723,
};