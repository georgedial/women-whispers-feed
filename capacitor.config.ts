import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.72e231d25cc04bdcb097a107367048df',
  appName: 'women-whispers-feed',
  webDir: 'dist',
  server: {
    url: 'https://72e231d2-5cc0-4bdc-b097-a107367048df.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      backgroundColor: "#fffbff",
      androidSplashResourceName: "splash",
      showSpinner: true,
      spinnerColor: "#999999"
    }
  }
};

export default config;