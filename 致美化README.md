# 致美化 README

---

## 项目概述

此仓库包含 `致美化.js` 脚本，用于自动化“致美化”网站（https://zhutix.com/）的用户签到任务。该脚本基于 Node.js，支持多账号管理和定时执行。

---

## 代码功能解释

`致美化.js` 是一个基于 Node.js 的自动化脚本，主要用于对“致美化”网站（https://zhutix.com/）执行用户签到任务。以下是详细功能分析：

### 主要功能

1. **多账号支持**：脚本从环境变量 `zmh` 中读取用户名和密码，支持多个账号（使用 `@`、`换行` 或 `\r\n` 分隔），格式为 `username&password`。
2. **登录认证**：使用用户名和密码通过 JWT 认证登录网站，获取 Bearer Token。
3. **签到任务**：
   - 获取用户任务信息（`getUserMission`）。
   - 执行签到（`userMission`），更新用户积分余额。
4. **日志和通知**：记录操作日志，如果有错误则通过 `sendNotify.js` 发送通知。
5. **环境兼容**：使用 `Env` 类支持多种运行环境（Node.js、QuanX、Surge 等），处理 HTTP 请求、数据存储等。

### 脚本结构

- **Task 类**：每个账号实例化一个 Task 对象，包含用户名、密码、token 等属性。方法包括：
  - `main()`：主执行流程。
  - `init()`：登录获取 token。
  - `getUserMission()`：获取任务信息。
  - `sign()`：执行签到。
  - `taskRequest()`：通用 HTTP 请求方法。
- **Env 类**：通用环境处理类，提供 HTTP 请求、日志、数据存储等功能。
- **全局变量**：
  - `ckName`：环境变量名 "zmh"。
  - `envSplitor`：多账号分隔符。
  - `strSplitor`：账号内分隔符 "&"。

### 依赖模块

- `qs` (^6.11.0)：用于查询字符串序列化。
- `tough-cookie` (^4.1.3)：处理 Cookie。
- `axios` (^1.4.0) 或 `got` (^12.6.0)：HTTP 请求库（脚本会自动检测并使用）。
- `./sendNotify`：自定义通知模块，用于发送结果通知。

### 执行流程

1. 检查环境变量，解析账号信息。
2. 为每个账号创建 Task 实例。
3. 依次执行每个账号的登录、获取任务、签到。
4. 输出结果日志，并发送通知（如果有错误）。
5. 脚本结束，清理资源。

---

## GitHub Workflow 配置分析

此项目可以在 GitHub 上配置每日自动调度，使用 GitHub Actions。脚本本身兼容 Node.js 环境，但需要添加项目依赖管理和 Workflow 配置。

### 配置步骤

#### 1. 设置 GitHub Secrets

在仓库的 Settings > Secrets and variables > Actions 中添加 `ZMH_CREDENTIALS`，值为你的账号信息（例如：`username1&password1@username2&password2`）。

#### 2. Workflow 文件

已创建 `.github/workflows/zmh.yml`，配置每日定时运行（北京时间 08:00，使用 cron: '0 0 * * *'）。
支持手动触发（`workflow_dispatch`）。

#### 3. 依赖管理

已添加 `package.json`，列出必要依赖。
Workflow 会自动安装依赖并运行脚本。

### 使用方法

- **推送代码到 GitHub 仓库**。
- Workflow 将按 cron 定时自动运行，无需手动干预。
- 查看 Actions 标签页监控运行日志。
- 如果需要调整定时时间或其他配置，可以修改 `zmh.yml` 文件中的 cron 表达式（例如，改为北京时间 12:00：`0 4 * * *`）。

### 本地运行

如果你想在本地测试脚本：

1. 安装 Node.js (>=14.0.0)。
2. 克隆仓库，运行 `npm install`。
3. 设置环境变量：`export zmh="username&password"`（或在 Windows 上使用 `set zmh=...`）。
4. 运行 `node 致美化.js`。

### 注意事项

- 确保账号信息安全，不要在代码中硬编码凭据。
- 脚本依赖网络连接，确保防火墙允许访问 zhutix.com。
- 如果签到失败，检查账号状态或网站更新。
- GitHub Actions 有使用限制，免费账户每月 2000 分钟。
