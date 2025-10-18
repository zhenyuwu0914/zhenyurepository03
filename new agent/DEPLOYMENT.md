# 健身助手部署指南

## 项目结构

```
健身/
├── api/                    # 后端 API (Vercel Functions)
├── web/                    # 前端 Web 应用
├── src/                    # 原始 React Native 代码
├── server/                 # 传统 Node.js 服务器 (可选)
├── vercel.json            # Vercel 配置
└── package.json           # 根项目配置
```

## 部署到 Vercel

### 1. 推送代码到 GitHub
```bash
git add .
git commit -m "Add web version for Vercel deployment"
git push origin main
```

### 2. 在 Vercel 中导入项目
1. 登录 [Vercel Dashboard](https://vercel.com/dashboard)
2. 点击 "New Project"
3. 选择你的 GitHub 仓库
4. 点击 "Import"

### 3. 配置环境变量
在 Vercel 项目设置中添加：
- `MONGODB_URI`: MongoDB 连接字符串
- 其他 AI 服务密钥（如需要）

### 4. 部署
Vercel 会自动：
- 构建 `web/` 目录为静态网站
- 部署 `api/` 目录为无服务器函数
- 配置路由

## 本地开发

### Web 版本
```bash
cd web
npm install
npm run dev
```

### React Native 版本
```bash
npm install
expo start
```

## API 端点

部署后可用的 API：
- `POST /api/user` - 创建用户
- `POST /api/plan-generate` - 生成健身计划
- `GET/POST /api/progress` - 进度管理
- `POST /api/ai-plan-text` - AI 文本计划
- `POST /api/ai-pose` - AI 姿态分析
- `POST /api/ai-tts` - 文字转语音

## 注意事项

1. **后端代码完全相同**：无论是本地开发、Web 版本还是移动应用，后端 API 代码完全一样
2. **前端适配**：Web 版本使用 React + React Router，移动版本使用 React Native + React Navigation
3. **环境变量**：确保在 Vercel 中正确配置所有必要的环境变量
4. **数据库**：需要 MongoDB 实例，可以使用 MongoDB Atlas



