"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const net_1 = require("net");
async function findAvailablePort() {
    const startPort = 3000;
    const endPort = 3010;
    for (let port = startPort; port <= endPort; port++) {
        const isAvailable = await checkPortAvailability(port);
        if (isAvailable) {
            return port;
        }
    }
    throw new Error(`No available ports found between ${startPort} and ${endPort}`);
}
function checkPortAvailability(port) {
    return new Promise((resolve) => {
        const server = (0, net_1.createServer)();
        server.listen(port, () => {
            server.close();
            resolve(true);
        });
        server.on('error', () => {
            resolve(false);
        });
    });
}
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'frontend', 'build'));
    app.enableCors();
    try {
        const port = await findAvailablePort();
        await app.listen(port);
        console.log(`Application is running on: http://localhost:${port}`);
    }
    catch (error) {
        console.error('Failed to find available port:', error);
        process.exit(1);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map