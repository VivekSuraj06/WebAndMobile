import { config as buildConfig } from './base.wdio.conf.js';
import type { Options } from '@wdio/types';

buildConfig.capabilities = [{
    browserName: 'chrome',
    'goog:chromeOptions': {
        args: [
            '--disable-infobars',
            '--window-size=1280,800',
            '--no-sandbox',
            '--disable-gpu',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
        ],
    },
}]; 

export const config: Options.Testrunner = buildConfig;
