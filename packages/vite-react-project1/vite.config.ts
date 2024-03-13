import { ConfigEnv, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig((configEnv: ConfigEnv) => {
  console.log(configEnv);
  return {
    plugins: [react()],
  };
});
