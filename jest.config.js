export default {
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  // verbose: true,
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
  moduleDirectories: ['node_modules', 'src', '<rootDir>'],
  transformIgnorePatterns: [
    '/node_modules/(?!(copy-anything|is-what|other-esm-modules)/)',
    'node_modules/(?!(@tanstack/react-query-devtools)/)',
  ],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js.jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  // load configuration from jest.setup.js
  setupFilesAfterEnv: ['<rootDir>/src/jest.setup.js'], // Setup file
  moduleNameMapper: {
    // mock imports
    '\\.(svg|jpg|jpeg|png|gif|webp|avif|ico|bmp|tiff)$':
      '<rootDir>/jest.fileMock.js', // Map image files
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
    '^src/(.*)$': '<rootDir>/src/$1',
    '^utils$': '<rootDir>/src/lib/utils',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^store/(.*)$': '<rootDir>/src/store/$1',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
};
