# AI Agent Guidelines for fork-LangKe

## Project Overview
This is a Node.js automation script collection for automated check-in/sign-in tasks across various Chinese online services and communities. Each `.js` file targets a specific service with consistent architecture.

## Core Architecture

### Script Structure Pattern
All automation scripts follow this template (see `致美化.js` as reference):

```javascript
const $ = new Env("ServiceName");
const notify = $.isNode() ? require('./sendNotify') : '';
let ckName = "env_var_name";  // Environment variable for credentials
// ... configuration ...

class Task {
    constructor(str) {
        // Parse credentials from env var (format: username&password or custom)
        this.index = ++userIdx;
        // ... credential fields ...
        this.ckStatus = false;
    }

    async main() {
        $.log(`========= 开始【第${this.index}个账号】=========`);
        await this.init();  // Login/authentication
        if (!this.ckStatus) return;
        // ... main automation logic ...
    }

    async taskRequest(method, url, header = "", body = "") {
        // HTTP request wrapper using $.httpRequest
    }

    // Service-specific methods: init(), sign(), getUserMission(), etc.
}

// Fixed execution pattern
!(async () => {
    if (!(await checkEnv())) return;
    for (let user of userList) {
        await user.main();  // Sequential execution
    }
    if (Notify) await $.sendMsg($.logs.join("\n"));
})().catch(console.log).finally(() => $.done());
```

### Environment Handling
- Uses custom `Env` class for cross-platform compatibility (Node.js, QuanX, Surge, Loon)
- Credentials stored in environment variables (e.g., `zmh=username&password`)
- Multi-account support with `@` or newline separators
- Default fallback credentials when env vars missing

### HTTP Requests
- Wrapper method `taskRequest()` for consistent API calls
- Supports GET/POST with automatic header management
- Uses `$.httpRequest()` from Env class with axios/got fallbacks

## Key Files & Patterns

### Core Files
- `sendNotify.js` - Multi-platform notification system (Telegram, WeChat, DingTalk, Bark, etc.)
- `package.json` - Node.js dependencies (qs, tough-cookie, axios, got)
- Individual service scripts (e.g., `致美化.js`, `iKun.js`) - One per target service

### Naming Conventions
- Scripts use Chinese service names (e.g., `王者营地.js` for King of Glory Camp)
- Environment variables match script names (e.g., `zmh` for 致美化.js)
- Class methods use Chinese comments but English identifiers

### Authentication Patterns
- **JWT Token**: `致美化.js` - POST to `/wp-json/jwt-auth/v1/token` with username/password
- **Cookie-based**: `iKun.js` - Direct cookie storage after login
- **API Token**: `王者营地.js` - userid&token&roleId format

## Development Workflow

### Running Scripts
```bash
# Install dependencies
npm install

# Run specific script
node 致美化.js

# Set environment variables for credentials
export zmh="username&password"
```

### GitHub Actions
- Scheduled daily runs via `.github/workflows/zmh.yml`
- Uses secrets for credential storage
- Node.js 18 with npm caching

### Adding New Services
1. Copy existing script as template (e.g., `致美化.js`)
2. Update service name, URLs, and authentication logic
3. Modify credential parsing in Task constructor
4. Add service-specific API methods
5. Update package.json scripts if needed

## Code Quality Notes
- Mixed language: Chinese comments/strings, English code
- Sequential user processing (not parallel)
- Error handling via try/catch with Notify counter
- GPL-3.0 license with strict usage disclaimer
- No TypeScript or modern JS features (ES5+ compatible)</content>
<parameter name="filePath">C:\Users\fluck\Desktop\fork-LangKe\AGENTS.md
