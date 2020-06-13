module.exports = {
  roots: ['<rootDir>/tests'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: 'node',
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
}
