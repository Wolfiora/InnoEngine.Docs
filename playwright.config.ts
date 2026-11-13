import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/browser',
  fullyParallel: true,
  workers: 2,
  retries: 0,
  forbidOnly: Boolean(process.env.CI),
  outputDir: 'artifacts/browser/results',
  reporter: [['list'], ['json', { outputFile: 'artifacts/browser/results.json' }]],
  use: {
    baseURL: 'http://127.0.0.1:4324/InnoEngine.Docs/',
    browserName: 'chromium',
    channel: process.env.INNO_DOCS_BROWSER_CHANNEL || undefined,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'desktop', use: { viewport: { width: 1440, height: 1000 } } },
    { name: 'tablet', use: { viewport: { width: 900, height: 1100 } } },
    { name: 'mobile', use: { viewport: { width: 390, height: 844 } } },
  ],
  webServer: {
    command: 'npm run preview -- --port 4324',
    url: 'http://127.0.0.1:4324/InnoEngine.Docs/',
    reuseExistingServer: false,
  },
});
