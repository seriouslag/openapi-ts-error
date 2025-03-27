import { defineConfig } from '@hey-api/openapi-ts';
import { resolve } from 'path';

const project = resolve(__dirname);

export default defineConfig({
  input: resolve(project, 'working.yaml'),
  output: resolve(project, 'src', 'generated'),
  plugins: ['@hey-api/client-axios'],
});
