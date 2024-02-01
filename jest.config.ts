export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleNameMapper: {
    '.+\\.(svg|png|jpg)$': '<rootDir>/src/__mocks__/mockFile.ts',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '@/(.*)': '<rootDir>/src/$1',
  },
};
