module.exports = {
  bail: true,
  preset: "ts-jest",
  displayName: "test",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  transformIgnorePatterns: [],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov", "text-summary", "clover", "cobertura"],
  collectCoverageFrom: [
    "src/**/**/*.{ts,json}",
    "!src/**/**/*.spec.ts",
    "!src/**/**/*.test.ts",
    "!src/**/**/*.d.ts",
    "!src/**/node_modules/**",
    "!src/jestConfig/*.*",
    "!src/test/*.*",
    "!src/**/test/*.*",
    "!test/*.*",
  ],
  testMatch: ["<rootDir>/src/**/?(*.)+(spec|test).[tj]s?(x)"],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50,
    },
  },
};
