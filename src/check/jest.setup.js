module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{tsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testMatch: ["**/?(*.)+(spec|test).tsx"],
    transformIgnorePatterns: [
      '/node_modules/(?!(\\@uitk/react)/)',
    ],
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    },
    transform: {
      "^.+\\.jsx?$": "babel-jest",
      "^.+\\.tsx?$": "babel-jest",
    },
  };
  