import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'binder.sa.test.app',
  appName: 'binder-test',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
