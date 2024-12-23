# Vite Multi-Entry Build Demo

这个项目演示了如何在Vite中配置多入口构建，特别是如何将不同类型的文件（如React应用和独立的CSS文件）分别构建到不同的输出目录。

## 目的

- 演示Vite的多入口构建配置
- 展示如何为不同类型的文件使用不同的构建配置
- 说明如何避免不必要的插件（如对CSS文件不使用React插件）

## 限制

- Vite不支持webpack那样的数组形式配置（即 `export default [config1, config2]`）
- 需要为不同的入口创建独立的配置文件
- 需要通过npm scripts来组织多个构建命令

## 解决方案

1. 使用多个配置文件：
   - `vite.config.app.ts`: 主应用配置，包含React插件
   - `vite.config.style.ts`: 样式文件配置，不包含多余插件

2. 分别配置输出目录：
   - 主应用输出到 `dist/app/`
   - 样式文件输出到 `dist/style/`

3. 通过npm scripts组织构建命令：
   ```json
   {
     "scripts": {
       "start": "vite --open",
       "build": "npm run build:app && npm run build:style",
       "build:app": "vite build --config vite.config.app.ts",
       "build:style": "vite build --config vite.config.style.ts"
     }
   }
   ```

## 使用方法

1. 安装依赖：
   ```bash
   pnpm install
   ```

2. 开发预览：
   ```bash
   pnpm start
   ```

3. 构建：
   ```bash
   pnpm build        # 构建所有
   pnpm build:app    # 只构建主应用
   pnpm build:style  # 只构建样式文件
   ```

## 输出说明

构建后的文件结构：
```
dist/
  ├── app/          # 主应用输出目录
  │   ├── index.html
  │   └── assets/
  │       ├── index-[hash].js
  │       └── index-[hash].css
  └── style/        # 样式文件输出目录
      └── hello.css
```

```
npm install
npm start
```

It will open page on browser automatically.
