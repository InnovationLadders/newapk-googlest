import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.myprojectplatform.launcher',
  appName: 'My Project Platform',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
