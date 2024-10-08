"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const activities_1 = require("./activities");
const logger_1 = require("./logger");
const args = process.argv.slice(2);
const username = (_a = args.shift()) !== null && _a !== void 0 ? _a : 'unknown';
const runSimulation = (username, args) => {
    const processStart = (0, activities_1.startProcess)('./scripts/http_request.sh', args, username);
    (0, logger_1.logActivity)(processStart);
    const fileCreation = (0, activities_1.createFile)('./file-create.md', 'Hello world!', username);
    (0, logger_1.logActivity)(fileCreation);
    const fileModification = (0, activities_1.modifyFile)('./file-modify.md', 'HELLO WORLD', username);
    (0, logger_1.logActivity)(fileModification);
    const fileDeletion = (0, activities_1.deleteFile)('./file-create.md', username);
    (0, logger_1.logActivity)(fileDeletion);
    const networkActivity = (0, activities_1.establishNetworkConnection)('example.com', 80, username);
    (0, logger_1.logActivity)(networkActivity);
};
runSimulation(username, args);
