import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      setupFiles: ['./tests/setup.ts'],
      include: ['tests/**/*.test.{ts,tsx}'],
      restoreMocks: true,
      coverage: {
        provider: 'v8',
        include: ['src', 'scripts/lib'],
        exclude: ['src/data/generated', 'src/vite-env.d.ts', 'src/main.tsx'],
        reporter: ['text-summary', 'lcov'],
      },
    },
  }),
);
