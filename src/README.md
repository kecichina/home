# 体重管理系统 - 本地部署指南

## 环境准备

### 前提条件
- Node.js (v16.0.0 或更高版本)
- pnpm (v7.0.0 或更高版本)

### 安装依赖
```bash
# 安装pnpm（如果尚未安装）
npm install -g pnpm

# 克隆项目仓库
git clone https://github.com/yourusername/weight-management-system.git
cd weight-management-system

# 安装项目依赖
pnpm install
```

## 本地开发环境

### 启动开发服务器
```bash
pnpm dev
```
项目将运行在 http://localhost:3000

### 开发模式功能
- 热模块替换(HMR)
- 开发工具支持
- 错误提示

## 生产环境构建与部署

### 构建生产版本
```bash
pnpm build
```
构建产物将生成在 `dist` 目录下

### 本地预览生产版本
```bash
# 安装本地服务器（如果尚未安装）
pnpm add -g serve

# 预览生产构建
serve -s dist -p 8080
```
访问 http://localhost:8080 查看生产版本

## 部署选项

### 本地服务器部署
1. 运行 `pnpm build` 生成生产构建
2. 将 `dist` 目录部署到本地服务器（如Nginx、Apache等）

### 容器化部署
```bash
# 构建Docker镜像（如果有Dockerfile）
docker build -t weight-management-system .

# 运行Docker容器
docker run -p 80:80 weight-management-system
```

### 注意事项
- 生产环境需要配置适当的环境变量
- 确保服务器具有适当的资源配置
- 定期更新依赖以修复安全漏洞

## 故障排除

- **依赖安装问题**: 尝试删除 `node_modules` 和 `pnpm-lock.yaml` 后重新安装
- **端口冲突**: 修改package.json中的端口配置
- **构建错误**: 检查TypeScript类型错误或依赖冲突

## 常见问题

Q: 本地开发服务器无法启动怎么办？
A: 检查Node.js版本是否符合要求，尝试删除node_modules后重新安装依赖

Q: 构建后的文件无法正常运行？
A: 检查是否正确配置了base路径，或使用serve命令预览