module.exports = {
  "testMatch": ["**/__tests__/**/*spec.ts", "**/?(*.)+(spec|test).ts"],
  "moduleFileExtensions": [
    "js",
    "ts",
    "tsx",
    "json",
    "node"
  ],
  "testPathIgnorePatterns": [
    "/node_modules/"
  ],
  "coveragePathIgnorePatterns": [
    "/node_modules/",
    "/.vscode/",
    "package.json",
    "/src/flow/task/*"
  ],
  "preset": "ts-jest",
  "collectCoverageFrom": ["src/**/*.ts", "!src/**/index.ts"],
  "collectCoverage": true
}
