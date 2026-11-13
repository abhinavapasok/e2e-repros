import type { E2EConfig } from 'e2e';
import { web } from '@e2e-dev/web';

export default {
  reporters: ['list', 'junit'],
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
