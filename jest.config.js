const { defaults } = require('jest-config');

module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"]
};