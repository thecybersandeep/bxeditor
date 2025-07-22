# BXEditor - Burp Suite Extension Developer

VS Code extension for Burp Suite Extension development. Built for security dev and penetration testers.

## Features

**Code Intelligence**
- Full IntelliSense support for Montoya API classes and methods
- Instant hover documentation with parameter details
- Smart auto-completion with import suggestions

**Development Tools**
- 6 ready-to-use project templates
- 25+ code snippets for common patterns

**Documentation**
- Complete offline API documentation

## Installation

### Option 1: Direct Download
Download the latest release: [bxeditor-1.0.0.vsix](https://github.com/thecybersandeep/bxeditor/releases/download/1.0.1/bxeditor-1.0.1.vsix)

Install in VS Code:
```
Extensions → Install from VSIX → Select downloaded file
```

### Option 2: Command Line
```bash
code --install-extension bxeditor-1.0.0.vsix
```

## Quick Setup

1. **Create Project**
   ```
   Ctrl+Shift+P → BXEditor: Create New Project
   ```

2. **Select Template**
   - Basic Extension
   - HTTP Handler
   - Proxy Handler
   - Scanner Extension (Pro)
   - UI Extension
   - Context Menu

3. **Start Coding**
   - Type `api.` for Montoya methods
   - Use `burp-` prefix for snippets
   - Hover for instant documentation


## Extension Templates

### Basic Extension
```java
public class MyExtension implements BurpExtension {
    @Override
    public void initialize(MontoyaApi api) {
        api.extension().setName("My Extension");
        api.logging().logToOutput("Extension loaded");
    }
}
```

### HTTP Handler
```java
public class HttpHandler implements BurpExtension, HttpHandler {
    @Override
    public RequestToBeSentAction handleHttpRequestToBeSent(HttpRequestToBeSent request) {
        // Modify requests here
        return RequestToBeSentAction.continueWith(request);
    }
}
```

## Commands

| Command | Function |
|---------|----------|
| `BXEditor: Create New Project` | Generate extension project |
| `BXEditor: Generate Extension Template` | Insert code template |
| `BXEditor: Open Documentation` | Browse API docs |
| `BXEditor: Show Examples` | View code samples |


### Debug Mode
Press `F5` in VS Code with debug configuration

## API Coverage

- HTTP Request/Response manipulation
- Proxy traffic interception  
- Custom vulnerability scanning
- User interface components
- Context menu integration
- Session handling
- Utilities (Base64, URL, HTML)

## Troubleshooting

**Extension not loading**
- Check JAR build: `./gradlew build`
- Verify main class implements `BurpExtension`

**IntelliSense issues**
- Restart VS Code
- Check Java Language Support is active

**Build failures**
- Ensure Java 17+ installed
- Check Gradle wrapper permissions: `chmod +x gradlew`

## License

MIT License - See LICENSE file

---

Built using the PortSwigger Burp Extensions Montoya API.
