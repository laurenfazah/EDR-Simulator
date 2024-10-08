"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const activities_1 = require("./activities");
const logger_1 = require("./logger");
const filePath = './file-create.txt';
const runSimulation = () => {
    const curlProcess = (0, activities_1.startProcess)('/usr/bin/curl', ['https://example.com', '-v']);
    (0, logger_1.logActivity)(curlProcess);
    const bashProcess = (0, activities_1.startProcess)('./scripts/http_request.sh', ['https://example.com']);
    (0, logger_1.logActivity)(bashProcess);
    const fileCreation = (0, activities_1.createFile)(filePath, 'Hello world!');
    (0, logger_1.logActivity)(fileCreation);
    const fileModification = (0, activities_1.modifyFile)(filePath, 'This is a change.');
    (0, logger_1.logActivity)(fileModification);
    const fileDeletion = (0, activities_1.deleteFile)(filePath);
    (0, logger_1.logActivity)(fileDeletion);
    const networkActivity = (0, activities_1.establishNetworkConnection)('example.com', 80);
    (0, logger_1.logActivity)(networkActivity);
};
runSimulation();
