export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '.+\\.(svg|png|jpg)$': 'identity-obj-proxy',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '@/(.*)': '<rootDir>/src/$1',
  },
};
