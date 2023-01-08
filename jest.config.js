const path = require('path')
const getJestMappersFromTSConfig = require('tsconfig-paths-jest-mapper')
const moduleNameMapper = getJestMappersFromTSConfig(path.resolve(__dirname, './tsconfig.paths.json'))

module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper,
}
