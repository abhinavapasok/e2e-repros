import type { E2EConfig } from 'e2e';
import { web } from '@e2e-dev/web';

export default {
  // Any value above 2147483647 (2^31 - 1). The config accepts it, but Node's
  // setTimeout clamps it to 1 ms, so every test times out immediately.
  timeout: 3_000_000_000,
  targets: [
    {
      engine: web(),
      app: {
        url: 'http://127.0.0.1:4173',
        command: { executable: 'node', args: ['server.mjs'] },
      },
    },
  ],
} satisfies E2EConfig;
