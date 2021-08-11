module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/unitTests/**/*.test.*'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  modulePaths: ['<rootDir>'],
  coverageDirectory: './coverage',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  coverageReporters: ["json", "lcov", "text", "cobertura"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};