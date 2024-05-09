/** @type {import('jest').Config} */
const config = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  roots: ['<rootDir>/src'],
  preset: '@shelf/jest-mongodb',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  }
}

export default config
