import type { Config } from '@jest/types'

export default async (): Promise<Config.InitialOptions> => ({
  bail: 1,
  verbose: true,
  // A preset that is used as a base for Jest's configuration.
  preset: 'ts-jest',
  // The test environment that will be used for testing.
  testEnvironment: 'jsdom',
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // A list of paths to modules that run some code to configure or set up the testing framework before each test file in the suite is executed.
  setupFilesAfterEnv: ['<rootDir>/__jest__/setupTest.ts'],
  // The glob patterns Jest uses to detect test files.
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(test).ts?(x)'],
  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a)$':
      '<rootDir>/__jest__/fileMock.js',
  },
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  // Coverage threshold in which the pipeline will fail
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 58,
      lines: 65,
      statements: 64,
    },
  },
  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  moduleNameMapper: {
    '^@/(.*)$': ['<rootDir>/src/$1'],
  },
})
