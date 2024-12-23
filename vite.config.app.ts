import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// 主应用配置
export default defineConfig({
    root: '.',
    plugins: [react()],
    build: {
        outDir: 'dist/app',
        rollupOptions: {
            input: path.resolve(__dirname, 'index.html')
        }
    }
}); 