import type { Options } from '@wdio/types';
import { config as buildConfig } from './base.wdio.conf.ts';
import * as path from 'path';

const androidCap = {
  maxInstances: 1,
  platformName: 'Android',
  'appium:deviceName': 'WCV0219312005376',  //Replace with your deviceName
  'appium:app': path.resolve(`./apps/Dailymail.apk`),
  'appium:platformVersion': '10.0', //Replace with your OSV
  'appium:orientation': 'PORTRAIT',
  acceptInsecureCerts: true,
  'appium:newCommandTimeout': 240,
  timeouts: { implicit: 60000, pageLoad: 60000, script: 60000 }
};

export const config: Options.Testrunner = {
  ...buildConfig,
  capabilities: [androidCap],
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