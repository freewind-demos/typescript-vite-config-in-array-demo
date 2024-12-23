import { defineConfig } from 'vite';
import path from 'path';

// 样式文件配置
export default defineConfig({
    root: '.',
    plugins: [],
    build: {
        outDir: 'dist/style',
        rollupOptions: {
            input: path.resolve(__dirname, 'src/Hello.pcss'),
            output: {
                assetFileNames: 'hello.css'
            }
        }
    }
}); 